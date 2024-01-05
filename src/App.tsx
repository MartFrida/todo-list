import React, { useState } from 'react';
import './App.css';
import AddTodoForm from './components/AddTodoForm';
import TodoItem from './components/TodoItem';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    const newTodo = { id: Date.now(), text };
    setTodos([...todos, newTodo])
  }
  const deleteTodo = (id) => {
    const newTodos = todos.filter(todo => todo.id !== id);
    setTodos(newTodos)
  }
  return (
    <div className="App">
      <h1>TODO LIST</h1>
      <AddTodoForm onAdd={addTodo} />
      <ul>
        {todos.map(todo => (<TodoItem key={todo.id} todo={todo} onDelete={deleteTodo} />))}
      </ul>
    </div>
  );
}

export default App;
