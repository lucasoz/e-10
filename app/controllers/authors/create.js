import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    create(){
      const name = this.name;
      const dateOfBirth = this.dateOfBirth;
      const dateOfDeath = this.dateOfDeath;

      let author = this.store.createRecord('author', {
        name: name,
        dateOfBirth: dateOfBirth,
        dateOfDeath: dateOfDeath,
      });
      author.save().then(()=>console.log('melo'));
    },
  },
});
