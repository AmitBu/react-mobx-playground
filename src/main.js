import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList';

import store from './todo-store'

ReactDOM.render(<TodoList store={store} />, document.querySelector('#app'));