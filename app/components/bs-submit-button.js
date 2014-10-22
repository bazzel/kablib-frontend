import Ember from 'ember';

// Generates a Bootstrap submit button as described on
// http://getbootstrap.com/css/#buttons
//
// style: default|primary|success|info|warning|danger|link
export default Ember.Component.extend({
  tagName: 'button',
  attributeBindings: ['type'],
  type: 'submit',
  style: 'default',
  classNames: ['btn', 'btn-block'],
  classNameBindings: ['btnStyle'],
  btnStyle: function() {
    return 'btn-' + this.get('style');
  }.property('style')
});
