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
      // filter by 'bar' must not show 'fooBar' or 'barBaz'
      var re = new RegExp('\\b'+tag+'\\b', 'gi');
      books = books.filter(function(book) {
        return re.test(book.get('tagList'));
      });
    }

    return books;
  }.property('tag', 'model', 'model.@each')
});
