import Ember from 'ember';
/* global md5 */
// No import for md5, it's a global called `md5`

export default Ember.Component.extend({
  size: 200,
  email: '',
  tagName: 'img',
  classNames: ['gravatar'],
  attributeBindings: ['src'],
  src: function() {
    var email = this.get('email');
    var size = this.get('size');

    return 'http://www.gravatar.com/avatar/' + md5(email) + '?s=' + size;
  }.property('email', 'size')
});
