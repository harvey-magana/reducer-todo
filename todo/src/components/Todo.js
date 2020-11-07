import React from 'react';
import moment from 'moment';
import '../App.css';
import { ACTIONS } from '../reducer/todoReducer';

const Todo = ({dispatch, todo}) => {
    let now = moment().format('ll');
    return (
        <div className="todo">
            <span className={todo.completed ? "todo-completed" : null}>
                {now}: {todo.name} 
            </span>
            <button className="toggle" onClick={() => dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id: todo.id }})}>Toggle</button>
            <button className="clear" onClick={() => dispatch({ type: ACTIONS.CLEAR_TODO, payload: { id: todo.id }})}>Clear</button>
        </div>
    )
}

export default Todo;