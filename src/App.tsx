import React from 'react';
import './App.css';
import AddTodoForm from './components/AddTodoForm';
import TodoItem from './components/TodoItem';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, deleteTodo } from './todoSlice';
import { RootState } from './store'

function App() {
  const todos = useSelector((state: RootState) => state.todos)
  const dispatch = useDispatch()

  return (
    <div className="App">
      <h1>TODO LIST</h1>
      <AddTodoForm onAdd={(text) => dispatch(addTodo(text))} />
      <ul>
        {todos.map(todo => (<TodoItem key={todo.id} todo={todo} onDelete={(id) => dispatch(deleteTodo(id))} />))}
      </ul>
    </div>
  );
}

export default App;
