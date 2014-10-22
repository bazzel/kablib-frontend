import Ember from 'ember';

export default Ember.ObjectController.extend({
  actions: {
    submit: function() {
      var review = this.model;

      review.save().then(function() {
        // nothing here...
      },
      function() {
        review.deleteRecord();
      });
    },
    like: function() {
      this.set('like', true);
    },
    dislike: function() {
      this.set('like', false);
    }
  }
});
