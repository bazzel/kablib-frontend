import Ember from 'ember';

export default Ember.ObjectController.extend({
  isEditing: false,
  actions: {
    toggleEditing: function() {
      this.toggleProperty('isEditing');
      this.get('model').rollback();
    },
    submit: function() {
      var book = this.model,
         _this = this;

      book.save().then(function() {
        _this.clearValidationErrors();
        _this.set('isEditing', false);
      },function(reason) {
        _this.set('validationErrors', reason.errors);
      });
    }
  },
  clearValidationErrors: function() {
    this.set('validationErrors', null);
  }
});
