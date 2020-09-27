//THIS PAGE WILL REMAIN BUT BE IGNORED FOR NOW
import React from 'react';
//import Todo from './Todo';
import '../App.css';


const TodoList = (props) => {
    
    return (
        <div>
            <h3>TodoList</h3>
            {todos.map((todo) => {
                return(<Todo key={todo.id} todo={todo} dispatch={dispatch} />)
            })}
            <button className="delete-btn" onClick={props.removeTodo}>
            Clear Todo
            </button>
        </div>
    )
}

export default TodoList;