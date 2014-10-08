import Ember from 'ember';

export default Ember.ArrayController.extend({
  search: '',
  actions: {
    login: function(user) {
      var previousTransition = this.get('previousTransition');

      this.set('currentUser', user);

      if (previousTransition) {
        this.set('previousTransition', null);
        previousTransition.retry();
      } else {
        // Default back to homepage
        this.transitionToRoute('index');
      }
      this.set('search', '');
    }
  },
  filteredContent: function() {
    var search = new RegExp(this.get('search'), 'gi');

    return this.model.filter(function(user) {
      return search.test(user.get('fullName'));
    });
  }.property('@each', 'search')
});
