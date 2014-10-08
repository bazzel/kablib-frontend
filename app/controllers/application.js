import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['login'],
  currentUser: Ember.computed.alias('controllers.login.currentUser')
});
