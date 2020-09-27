import React, { useState, useReducer } from "react";
//import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
//import { todoReducer, initialTodoState, ACTIONS } from '../reducer/todoReducer';
import '../App.css';

const TodoApp = () => {
  //const [ todos, dispatch ] = useReducer(todoReducer, [])

  return (
    <div className="container">
        <TodoForm />
    </div>
  );
}

export default TodoApp;