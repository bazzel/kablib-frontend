import Ember from 'ember';

export default Ember.View.extend({
  templateName: 'books/form',
  scheduleSelectize: function() {
    Ember.run.scheduleOnce('afterRender', this, 'applySelectize');
  }.on('didInsertElement', 'controller.isEditing'),
  applySelectize: function() {
    var tags = this.$('#tags');

    if (tags) {
      tags.selectize({
        delimiter: ',',
        create: true
      });
    }
  }
});
