import Ember from 'ember';

export default Ember.ObjectController.extend({
  isEditing: false,
  actions: {
    toggleEditing: function() {
      this.toggleProperty('isEditing');
      this.get('model').rollback();
    }
  }
});
