import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  title:         DS.attr(),
  description:   DS.attr(),
  author:        DS.attr(),
  tagList:       DS.attr(),
  tags:          function() {
    return this.get('tagList').split(', ');
  }.property('tagList'),
  coverImage:    DS.attr(),
  latestBorrow:  DS.belongsTo('borrow'),
  borrowedBy:    Ember.computed.alias('latestBorrow.user'),
  isCheckedOut:  Ember.computed.bool('latestBorrow'),
  reviews:       DS.hasMany('review', {async: true})
});
