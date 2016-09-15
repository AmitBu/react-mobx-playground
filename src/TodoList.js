import React from 'react';
import {observer} from 'mobx-react';


@observer
export default class TodoList extends React.Component {
  addItem(e) {
    if (e.which === 13)
      this.props.store.createTodo(e.target.value);
  }
  render() {
    let { todos, filter } = this.props.store;
    const items = todos.map(todo => <li>{todo}</li>);


    return (
        <div>
          <h1>Todo list</h1>
          <input onKeyPress={this.addItem.bind(this)} />
          <ul>{items}</ul>
        </div>
    );
  }
}