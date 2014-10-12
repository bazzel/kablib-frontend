import Ember from 'ember';

export default Ember.View.extend({
  classNames: ['panel', 'panel-default', 'book'],
  schedulePositioning: function() {
    Ember.run.scheduleOnce('afterRender', this, 'applyPositioning');
  }.on('didInsertElement'),
  scheduleSelectize: function() {
    Ember.run.scheduleOnce('afterRender', this, 'applySelectize');
  }.on('didInsertElement', 'controller.isEditing'),
  applyPositioning: function() {
    this.$().affix();
  },
  applySelectize: function() {
    var tags = this.$('#tags');

    if (tags) {
      tags.selectize({
        delimiter: ',',
        create: true
      })
    }
  }
});
