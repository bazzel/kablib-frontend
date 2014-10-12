import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.createRecord('book');
  },
  actions: {
    willTransition: function() {
      var book = this.currentModel;

      if (book.get('isNew')) {
        book.rollback();
      }
    }
  }
});
