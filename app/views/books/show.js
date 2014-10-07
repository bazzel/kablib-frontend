import Ember from 'ember';

export default Ember.View.extend({
  classNames: ['panel', 'panel-default', 'book'],
  doPositionView: function() {
    var _this = this;
    Ember.run(function() {
      _this.$().affix();
    });
  }.on('didInsertElement')
});
