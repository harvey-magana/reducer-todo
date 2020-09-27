/*
export const initialTodoState = {
    todos: [{
        id: Date.now(),
        item: 'Learn about reducers',
        completed: false
    }]
  }

const ACTIONS = {
    ADD_TODO: 'add-todo',
    TOGGLE_TODO: 'toggle-todo',
    CLEAR_TODO: 'clear-todo'
}

export const todoReducer = (todos, action) => {
    switch(action.type) {
        case "ADD_TODO": {
            {
                    const newTodo = {
                    id: Date.now(),
                    item: action.text,
                    completed: false
                }
                return [...todos, newTodo(action.payload.name)]
            }
        }
        case "TOGGLE_TODO": {
            return todos.map( todo => {
                if(todo.id === action.payload.id) {
                    return { ...todo, completed: !todo.completed }
                }
                return todo
            })
        }
        case "CLEAR_TODO": {
            return todos.filter( todo => todo.id !== action.payload.id)
        }
        default: 
            return state;
    }
}
*/