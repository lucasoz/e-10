import Controller from '@ember/controller';
import { get, set } from '@ember/object';

export default Controller.extend({

  invalidLength: false,
  newTodoText: '',

  actions: {
    addTodo() {
      const newTodoText = this.get('newTodoText').trim();
      console.log(newTodoText.length);
      if (newTodoText.length < 20 || newTodoText.length > 100) {
        this.set('invalidLength', true);
        setTimeout(()=>{
          this.set('invalidLength', false);
        }, 5000);
        return;
      }
      const todos = this.get('model');
      todos.pushObject({
        text: newTodoText,
        done: false,
      });
      this.set('newTodoText', '');
    },
    toggleDone(todo){
      const done = get(todo, 'done');
      set(todo, 'done', !done);
    }
  }
});
