import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    willTransition: function() {
      var book = this.currentModel,
      controller = this.controller;

      // Multiple rollbacks feels wrong,
      // but we found multiple discussions
      // about this topic.
      // Might still be work in progress.
      // See: http://discuss.emberjs.com/t/expected-behaviour-of-rollback-after-save-attempt-returns-422-ember-data-1-0/2513
      if (!book.get('isValid')) {
        book.rollback();
      }

      if (book.get('isDirty')) {
        book.rollback();
      }

      controller.clearValidationErrors();
      controller.set('isEditing', false);
    }
  }
});
