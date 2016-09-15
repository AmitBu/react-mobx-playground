import React from 'react';
import {observer} from 'mobx-react';


@observer
export default class TodoList extends React.Component {
  addItem(e) {
    if (e.which === 13) {
        this.props.store.createTodo(e.target.value);
        e.target.value = "";
    }
  }

  filter(e) {
      this.props.store.filter = e.target.value;
  }

  render() {
    let { todos, filteredTodos, filter } = this.props.store;
    const items = filteredTodos.map(todo => <li>{todo}</li>);


    return (
        <div>
          <h1>Todo list</h1>
          <input placeholder="Filter list" value={filter} onChange={this.filter.bind(this)} />
          <input placeholder="Add item" onKeyPress={this.addItem.bind(this)} />
          <ul>{items}</ul>
        </div>
    );
  }
}