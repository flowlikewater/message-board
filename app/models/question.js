import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  writer: DS.attr(),
  answers: DS.hasMany('answer', {async: true})
});
