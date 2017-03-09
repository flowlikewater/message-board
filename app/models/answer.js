import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  writer: DS.attr(),
  rating: DS.attr(),
  question: DS.belongsTo('question', {async: true})
});
