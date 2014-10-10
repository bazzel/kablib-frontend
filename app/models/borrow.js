import DS from 'ember-data';

export default DS.Model.extend({
  book:        DS.belongsTo('book'),
  // No need to embed users,
  // since we already retrieve all users for login.
  user:        DS.belongsTo('user'),
  startedOn:   DS.attr(),
  finishedOn:  DS.attr()
});
