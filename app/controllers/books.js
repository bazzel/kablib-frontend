import Ember from 'ember';

export default Ember.ArrayController.extend({
  needs: ['login'],
  currentUser: Ember.computed.alias('controllers.login.currentUser'),
  queryParams: ['tag', 'borrowedBy'],
  tag: '',
  borrowedBy: '',
  uniqueTags: function() {
    var taggedBooks = this.model.rejectBy('tagList', '');

    if (Ember.empty(taggedBooks)) {
      return [];
    } else {
      var tagList = taggedBooks.mapBy('tagList').join();
      var tags = tagList.split(/\s*,\s*/);

      return tags.uniq().sort();
    }
  }.property('model.@each.tagList'),
  filteredContent: function() {
    var tag = this.get('tag');
    var borrowedBy = this.get('borrowedBy');
    var books = this.model;
    var _this = this;

    if (tag) {
      books = books.filter(function(book) {
        return book.get('tags').contains(tag);
      });
    }

    if (borrowedBy) {
      books = books.filter(function(book) {
        switch(borrowedBy) {
          case 'nobody':
            return !book.get('latestBorrow');
          case 'anybody':
            return !!book.get('latestBorrow');
          case 'me':
            return book.get('latestBorrow.user') === _this.get('currentUser');
        }
      });
    }

    return books;
  }.property('tag', 'borrowedBy', 'model', '@each', '@each.latestBorrow')
});
