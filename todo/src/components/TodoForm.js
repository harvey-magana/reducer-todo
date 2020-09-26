import React, { useReducer } from 'react';
import '../App.css';
import { initialTodoState } from '../reducer/todoReducer';

const TodoForm = () => {
    const [ state, dispatch ] = useReducer(reducer, initialTodoState);
    return (
        <div>
            TodoForm
        </div>
    )
}

export default TodoForm;