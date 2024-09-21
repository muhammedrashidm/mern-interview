import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'

interface Todo {
    id: number
    title: string
    completed: boolean
}

interface TodoState {
    todos: Todo[]
}

// Define the initial state using that type
const initialState: TodoState = {
    todos: [
        { id: 1, title: 'Learn React', completed: false },
        { id: 2, title: 'Learn Redux', completed: false },
        { id: 3, title: 'Learn TypeScript', completed: false },
    ],
}

export const todoSlice = createSlice({
    name: 'todos',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
       
            addTodoItem: (state, action: PayloadAction<Todo>) => {
                state.todos.push(action.payload)
            },
            removeTodoItem: (state, action: PayloadAction<number>) => {
                state.todos = state.todos.filter(todo => todo.id !== action.payload)
            },
            updateTodoItem: (state, action: PayloadAction<Todo>) => {
                state.todos = state.todos.map(todo => todo.id === action.payload.id ? action.payload : todo)
            },
            markTodoAsCompleted: (state, action: PayloadAction<number>) => {
                state.todos = state.todos.map(todo => todo.id === action.payload ? { ...todo, completed: true } : todo)
            },

        
    }
})

export const { addTodoItem, removeTodoItem, updateTodoItem, markTodoAsCompleted } = todoSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectTodos = (state: RootState) => state.todos
export default todoSlice.reducer