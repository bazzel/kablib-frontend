import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('books', function() {
    this.route('show', { path: ':book_id'});
    this.route('new');
  });
  this.route('users');
  this.route('login');
  this.route('authenticatedRoute');
});

export default Router;
