import React from 'react';
import {observer} from 'mobx-react';


@observer
export default class TodoList extends React.Component {
	addItem = (e) => {
		this.props.store.createTodo(this.refs.newItem.value);
		this.refs.newItem.value = "";
	};

	filterItems(e) {
		this.props.store.filter = e.target.value;
	}

	render() {
		let { filteredTodos, filter, clearComplete, unfinishedTodos} = this.props.store;
		const items = filteredTodos.map(todo => (
					<li key={todo.id}><input type="checkbox" value={todo.checked} onChange={todo.toggleCheck} />
						<span className={todo.checked ? 'strike' : ''}>{todo.name}</span>
					</li>
		));

		return (
			<div>
				<h1>Todo list</h1>
				<input placeholder="Filter list" value={filter} onChange={this.filterItems.bind(this)}/>
				<div>
					<input ref="newItem" placeholder="Add item" />
					<button onClick={this.addItem}>add</button>
					<ul>{items}</ul>
					<p>Unfinished todos: {unfinishedTodos}</p>
					<button onClick={clearComplete}>Clear complete</button>
				</div>
			</div>
		);
	}
}