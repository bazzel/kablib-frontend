import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('books', function() {
    this.route('show', { path: ':book_id'});
  });
  this.route('users');
});

export default Router;
