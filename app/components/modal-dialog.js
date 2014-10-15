import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['modal', 'fade'],
  scheduleFadeIn: function() {
    Ember.run.scheduleOnce('afterRender', this, 'applyFadeIn');
  }.on('didInsertElement'),
  applyFadeIn: function() {
    var _this = this;
    this.$().modal().on('hidden.bs.modal', function() {
      _this.sendAction('cancel');
    });
  },
  actions: {
    submit: function() {
      this.$().modal('hide');
      this.sendAction('submit');
    }
  }
});
