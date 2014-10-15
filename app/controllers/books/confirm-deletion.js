import Ember from 'ember';

export default Ember.ObjectController.extend({
  confirmation: null,
  actions: {
    deleteBook: function() {
      if(this.get('title') === this.get('confirmation')) {
        var _this = this;

        this.model.destroyRecord().then(function() {
          _this.transitionToRoute('books');
        });
      }
    }
  }
});
