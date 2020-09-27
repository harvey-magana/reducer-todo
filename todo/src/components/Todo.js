import React from 'react';
import '../App.css';
import { ACTIONS } from '../reducer/todoReducer';

const Todo = ({props, dispatch, todo}) => {
    console.log(props)
    return (
        <div>
            <span className={todo.completed ? "todo-completed" : null}>
                    {todo.name}
            </span>
            <button onClick={() => dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id: todo.id }})}>Toggle</button>
            <button onClick={() => dispatch({ type: ACTIONS.CLEAR_TODO, payload: { id: todo.id }})}>Clear</button>
        </div>
    )
}

export default Todo;