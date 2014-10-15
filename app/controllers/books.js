import Ember from 'ember';

export default Ember.ArrayController.extend({
  queryParams: ['tag'],
  tag: '',
  uniqueTags: function() {
    var taggedBooks = this.model.rejectBy('tagList', '');

    if (Ember.empty(taggedBooks)) {
      return [];
    } else {
      var tagList = taggedBooks.mapBy('tagList').join();
      var tags = tagList.split(/\s*,\s*/);

      return tags.uniq();
    }
  }.property('model.@each.tagList'),
  filteredContent: function() {
    var tag = this.get('tag');
    var books = this.model;

    if (tag) {
      books = books.filter(function(book) {
        return book.get('tags').contains(tag);
      });
    }

    return books;
  }.property('tag', 'model', 'model.@each')
});
