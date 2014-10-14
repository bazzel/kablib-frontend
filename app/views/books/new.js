import Ember from 'ember';

export default Ember.View.extend({
  classNames: ['panel', 'panel-default', 'book'],
  schedulePositioning: function() {
    Ember.run.scheduleOnce('afterRender', this, 'applyPositioning');
  }.on('didInsertElement'),
  applyPositioning: function() {
    this.$().affix();
  }
});
