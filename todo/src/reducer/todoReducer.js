export const initialTodoState = {
    todos: [{
        id: Date.now(),
        item: 'Learn about reducers',
        completed: false
    }]
  }

export const todoReducer = (state, action) => {
    switch(action.type) {
        case "ADD_TODO": {
            {
                const newTodo = {
                    id: Date.now(),
                    item: action.text,
                    completed: false
                }
                return {
                    todos: {
                        ...state.todos, 
                        newTodo
                    }
                }
            }
        }
        case "COMPLETE_TODO": {}
        case "REMOVE_TODO": {}
        default: 
            return state;
    }
}