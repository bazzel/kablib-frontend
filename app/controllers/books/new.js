import Ember from 'ember';

export default Ember.ObjectController.extend({
  actions: {
    submit: function() {
      var book = this.model,
         _this = this;

      book.save().then(function() {
        _this.set('validationErrors', null);
        _this.transitionToRoute('books');
      }, function(reason) {
        _this.set('validationErrors', reason.errors);
      });
    }
  }
});
