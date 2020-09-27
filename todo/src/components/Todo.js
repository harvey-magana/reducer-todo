import React from 'react';
import '../App.css';

const Todo = (props) => {
    const handleClick = (e) => {
        e.preventDefault();
        props.toggleTodo(props.text.id)
    }
    
    return (
        <div>
            <span
                className={props.todo.completed ? "todo-completed" : undefined}
                onClick={() => props.toggleTodo(props.todo.id)}
                >
                    {props.todo.text}
            </span>
        </div>
    )
}

export default Todo;