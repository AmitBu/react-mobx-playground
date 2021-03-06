import { computed, observable } from 'mobx'

class TodoItem {
   @observable checked;

   constructor(name, checked = false) {
      this.id      = name + Math.random();
      this.name    = name;
      this.checked = checked;
   }

   toggleCheck = () => {
      this.checked = !this.checked;
   }
}

export class TodoStore {
   @observable todos = [];
   @observable filter = "";

   @computed get filteredTodos () {
      return this.todos.filter(todo => todo.name.indexOf(this.filter) > -1);
   }

   @computed get unfinishedTodos() {
      return this.todos.filter(todo => !todo.checked).length;
   }

   createTodo(value) {
      this.todos.push(new TodoItem(value, false));
   }

   clearComplete = () => {
      const incomplete = this.todos.filter(todo => !todo.checked);
      this.todos.replace(incomplete);
   }
}

export default new TodoStore;