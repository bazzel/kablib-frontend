import DS from 'ember-data';

export default DS.Model.extend({
  user: DS.belongsTo('user'),
  rating: DS.attr(),
  description: DS.attr()
});
