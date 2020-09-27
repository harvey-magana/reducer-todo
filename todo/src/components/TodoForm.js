import React, { useState, useReducer } from "react";
import Todo from "./Todo";
import { todoReducer, initialTodoState, ACTIONS } from '../reducer/todoReducer';
import '../App.css';

const TodoForm = (props) => {
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
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    value={name} 
                    onChange={handleChange} 
                />
                <button type="submit">Add</button>
            </form>
            {todos.map((todo) => {
                return(<Todo key={todo.id} todo={todo} dispatch={dispatch} />)
            })}
        </div>
    )
}

export default TodoForm;