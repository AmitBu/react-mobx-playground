import { autorun, computed, observable } from 'mobx'

class TodoStore {
   @observable todos = ["buy milk", "yay"];
   @observable filter = "";

   @computed get filteredTodos () {
      return this.todos.filter(todo => todo.indexOf(this.filter) > -1);
   }

   createTodo(value) {
      this.todos.push(value);
   }
}


let store = window.store = new TodoStore();

export default store;

autorun(() => {
   console.log('filters', store.filter);
   console.log('todo', store.todos[0]);
})