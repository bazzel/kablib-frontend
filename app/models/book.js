import DS from 'ember-data';

export default DS.Model.extend({
  title:         DS.attr(),
  description:   DS.attr(),
  author:        DS.attr(),
  latestBorrow:  DS.belongsTo('borrow'),
  borrowedBy:    Ember.computed.alias('latestBorrow.user'),
  isCheckedOut:  Ember.computed.bool('latestBorrow')
});
