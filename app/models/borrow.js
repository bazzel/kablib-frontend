import DS from 'ember-data';

export default DS.Model.extend({
  book: DS.belongsTo('book'),
  user: DS.belongsTo('user')
});
