import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
    name: "todoList",
    initialState: [
        {
            id: "433fc2aa-af2e-407f-a0fb-31c2403658a1",
            name: "Học React",
            priority: "High",
            completed: true
        },
        {
            id: "589b6fb4-cf21-4590-9997-ab85ea57af68",
            name: "Báo cáo cuối kỳ CNPM",
            priority: "Low",
            completed: false
        },
        {
            id: "066dc1f7-91db-4929-a81c-628ffc61b1b5",
            name: "Vấn đáp android",
            priority: "Medium",
            completed: false
        }
    ],
    reducers: {
        addTodo: (state, action) => {
            state.push(action.payload)
        },
        statusTodoChange: (state, action) => {
            const currentTodo = state.find(todo => todo.id === action.payload)
            if (currentTodo) {
                currentTodo.completed = !currentTodo.completed
            }
        },
        todoChange: (state, action) => {
            const id = action.payload.id
            const todo = action.payload.todo

            if (!todo) return

            const currentTodo = state.find(todo => todo.id === id)

            if (currentTodo) {
                currentTodo.name = todo
            }
        },
        deleteTodo: (state, action) => {
            const id = action.payload
            state.map((todo, index) => todo.id === id ? state.splice(index, 1) : todo)
        }
    }
})