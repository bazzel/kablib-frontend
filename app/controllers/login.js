import Ember from 'ember';

export default Ember.ArrayController.extend({
  actions: {
    login: function(user) {
      this.set('currentUser', user);
      var previousTransition = this.get('previousTransition');
      if (previousTransition) {
        this.set('previousTransition', null);
        previousTransition.retry();
      } else {
        // Default back to homepage
        this.transitionToRoute('index');
      }
    }
  }
});
