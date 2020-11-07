export const initialTodoState = {
    todos: [{
        id: Date.now(),
        name: 'Learn about reducers',
        completed: false
    }]
  }

  export const ACTIONS = {
    ADD_TODO: 'ADD_TODO',
    TOGGLE_TODO: 'TOGGLE_TODO',
    CLEAR_TODO: 'CLEAR_TODO'
    }

function newTodo(name) {
    return { id: Date.now(), name: name, completed: false}
}

export const todoReducer = (todos, action) => {
    switch(action.type) {
        case ACTIONS.ADD_TODO: 
            return [...todos, newTodo(action.payload.name)]
        case ACTIONS.TOGGLE_TODO: 
            return todos.map( todo => {
                if(todo.id === action.payload.id) {
                    return { ...todo, completed: !todo.completed }
                }
                return todo
            })
        case ACTIONS.CLEAR_TODO: 
            return todos.filter(todo => todo.id !== action.payload.id);
        default: 
            return todos
    }
}
