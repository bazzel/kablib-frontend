import Ember from 'ember';

// Abstract Route for redirecting to login
// when no currentUser set yet.
//
// Usage:
// import AuthenticatedRoute from './authenticated-route';
//
// export default AuthenticatedRoute.extend({
//   beforeModel: function() {
//     this._super();
//     console.log('beforeModel from booksRoute');
//   }
//   ...
// });
//
export default Ember.Route.extend({
  beforeModel: function(transition) {
    var loginController = this.controllerFor('login');

    if(!loginController.get('currentUser')) {
      loginController.set('previousTransition', transition);
      this.transitionTo('login');
    }
  }
});
