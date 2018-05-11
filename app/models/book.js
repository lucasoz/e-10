import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  datePublished: DS.attr('string'),

  author: DS.belongsTo('author'),
  chapters: DS.hasMany('chapter', { async: true }),
});
