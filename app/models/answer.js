import DS from 'ember-data';

export default DS.Model.extend({
  writer: DS.attr(),
  title: DS.attr(),
  question: DS.belongsTo('question', {async: true})
});
