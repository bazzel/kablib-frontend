import Ember from 'ember';

export default Ember.View.extend({
  doFocus: function() {
    this.$('#search').focus();
  }.on('didInsertElement')
});
