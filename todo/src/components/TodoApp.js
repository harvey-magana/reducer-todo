import React from "react";
import TodoList from "./TodoList"
import TodoForm from "./TodoForm";
import '../App.css';

export default function TodoApp() {
  
  const [todos, setTodos] = React.useState([]);

  const addTodo = (newTodo) => {
    setTodos([
      ...todos,
      {
        id: Date.now(),
        text: newTodo,
        completed: false
      }
    ]);
  };

  const removeTodo = () => {
    const updatedTodos = todos.filter(todo => todo.completed === false);
    console.log(updatedTodos);
    setTodos(updatedTodos);
  };

  const toggleTodo = todoId => {
      
    const updatedTodos = todos.map(todo => {
      return todo.id === todoId
        ? { ...todo, completed: !todo.completed }
        : todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <div className="container">
        <TodoForm 
            addTodo={addTodo}
            todos={todos}
        />
        <TodoList 
            todos={todos}
            toggleTodo={toggleTodo}
            removeTodo={removeTodo}
        />
    </div>
  );
}