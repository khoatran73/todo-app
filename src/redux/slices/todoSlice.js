import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import todoAPI from '../../API/todoAPI'

export const getTodoList = createAsyncThunk('todo/getTodoList', async (account) => {
    const res = await todoAPI.getTodoList(account)

    return res.todoList
})

export const todoSlice = createSlice({
    name: "todoList",
    initialState: {
        isLoading: false,
        errorMessage: '',
        todoList: [],
    },
    reducers: {
        addTodo: (state, action) => {
            state.todoList.push(action.payload)
        },
        statusTodoChange: (state, action) => {
            const currentTodo = state.todoList.find(todo => todo.id === action.payload)
            if (currentTodo) {
                currentTodo.completed = !currentTodo.completed
            }
        },
        todoChange: (state, action) => {
            const id = action.payload.id
            const todo = action.payload.todo

            if (!todo) return

            const currentTodo = state.todoList.find(todo => todo.id === id)

            if (currentTodo) {
                currentTodo.name = todo
            }
        },
        deleteTodo: (state, action) => {
            const id = action.payload
            state.todoList.map((todo, index) => todo.id === id ? state.todoList.splice(index, 1) : todo)
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getTodoList.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(getTodoList.fulfilled, (state, action) => {
            state.isLoading = false;
            state.todoList = action.payload;
        })

        builder.addCase(getTodoList.rejected, (state, action) => {
            state.isLoading = false;
            state.errorMessage = action.payload.message;
        })
    }
})