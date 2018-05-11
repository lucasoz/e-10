import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  ordering: DS.attr('number'),

  book: DS.belongsTo('book'),
});
