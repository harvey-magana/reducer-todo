export const initialTodoState = {
    id: new Date(),
    item: 'Learn about reducers',
    completed: false
  }

export const todoReducer = (state, action) => {
    switch(action.type) {
        case "ADD_TODO": {}
        case "COMPLETE_TODO": {}
        case "REMOVE_TODO": {}
        default: 
            return state;
    }
}