import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './components/TodoList';

import store from './store/todo-store'

import './styles/style.scss'

ReactDOM.render(<TodoList store={store} />, document.querySelector('#app'));