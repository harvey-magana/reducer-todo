import React, { useReducer } from 'react';
import '../App.css';
import { initialTodoState, todoReducer } from '../reducer/todoReducer';

const TodoForm = () => {
    const [ state, dispatch ] = useReducer(initialTodoState, todoReducer);
    return (
        <div>
            TodoForm
            <form>
                <input 
                    type="text"
                    todo="item"
                    value="some value"
                />
                <button>Add</button>
            </form>
        </div>
    )
}

export default TodoForm;