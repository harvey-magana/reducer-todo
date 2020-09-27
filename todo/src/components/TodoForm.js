import React, { useState, useReducer } from "react";
import Todo from "./Todo";
import { todoReducer, initialTodoState, ACTIONS } from '../reducer/todoReducer';
import '../App.css';

const TodoForm = () => {
    const [ todos, dispatch ] = useReducer(todoReducer, [])
    const [ name, setName ] = useState('');

    const handleChange = (e) => {
        e.preventDefault();
        setName(e.target.value);
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name }})
        setName("");
    }

    return (
        <div className="app">
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    value={name} 
                    onChange={handleChange} 
                />
                <button type="submit">Add</button>
            </form>
            <div>
                <div className="todo-list">
                {todos.map((todo) => {
                    return(<Todo key={todo.id} todo={todo} dispatch={dispatch} />)
                })}
                </div>
            </div>
        </div>
    )
}

export default TodoForm;