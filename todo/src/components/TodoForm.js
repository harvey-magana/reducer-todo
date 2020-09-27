import React from 'react';
import '../App.css';

const TodoForm = (props) => {
    
    const [todo, setTodo] = React.useState("");

    const handleChange = e => {
        setTodo(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();
        props.addTodo(todo);
        setTodo("");
      };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="todo">Todo text</label>
                <br />
                <input
                id="todo"
                className="todo-input"
                onChange={handleChange}
                value={todo}
                />
                <button type="submit" className="add-btn">
                Add
                </button>
            </form>
        </div>
    )
}

export default TodoForm;