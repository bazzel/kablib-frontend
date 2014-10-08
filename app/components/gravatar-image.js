import Ember from 'ember';

export default Ember.Component.extend({
  size: 200,
  email: '',
  tagName: 'img',
  classNames: ['gravatar'],
  attributeBindings: ['src'],
  src: function() {
    var email = this.get('email');
    console.log(email);
    var size = this.get('size');

    // No import for md5, it's a global called `md5`
    return 'http://www.gravatar.com/avatar/' + md5(email) + '?s=' + size;
  }.property('email', 'size')
});
