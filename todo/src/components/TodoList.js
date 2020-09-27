import React from 'react';
import Todo from './Todo';
import '../App.css';


const TodoList = (props) => {
    console.log(props)
    return (
        <div>
            <h3>TodoList</h3>
            {props.todos.map((todo) => {
                return(<Todo key={todo.id} todo={todo} toggleTodo={props.toggleTodo} />)
            })}
            <button className="delete-btn" onClick={props.removeTodo}>
            Clear Todo
            </button>
        </div>
    )
}

export default TodoList;