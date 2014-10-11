import Ember from 'ember';

export default Ember.View.extend({
  classNames: ['panel', 'panel-default', 'book'],
  doPositionView: function() {
    var _this = this;
    Ember.run(function() {
      _this.$().affix();
    });
  }.on('didInsertElement'),
  scheduleSelectize: function() {
    Ember.run.scheduleOnce('afterRender', this, this.applySelectize);
  }.observes('controller.isEditing'),
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
