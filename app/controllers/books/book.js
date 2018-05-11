import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    edit(id){

    },
    delete(id){
      var answer = confirm("Do you want delete this book?");

      if (answer == true) {
        this.store.findRecord('book', id).then(function(post) {
          post.destroyRecord();
        });
      }
    }

  }
});
