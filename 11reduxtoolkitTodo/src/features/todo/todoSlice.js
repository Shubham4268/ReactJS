import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{ id: 1, text: "Hello World" }],
    updateId: null
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) =>         // instead of crating new array, we can directly overwrite the todos
                todo.id !== action.payload          // this is possible due to redux states
            )
        },
        updateTodo: (state, action) => {
            state.todos.map((todo) => {
                if (todo.id === action.payload) {
                    state.updateId = todo.id;
                }
                
            })
        },
        saveUpdate: (state,action) => {
            state.todos.map((todo) => {
                if (todo.id === state.updateId) {
                    todo.text = action.payload
                }
            })
            state.updateId = null;  
        }
    }
})

export const { addTodo, removeTodo,updateTodo,saveUpdate } = todoSlice.actions  // we are exporting indivisual functipnalities so that we can use them is components

export default todoSlice.reducer                        // exporting this so that store can register this reducer
