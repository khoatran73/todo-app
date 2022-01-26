import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import todoAPI from '../../API/todoAPI'

export const getTodoList = createAsyncThunk('todo/getTodoList', async (accountId) => {
    const res = await todoAPI.getTodoList(accountId)

    return res
})

export const addTodo = createAsyncThunk('todo/addTodo', async (todo) => {
    await todoAPI.addTodo(todo)

    return todo
})

export const deleteTodo = createAsyncThunk('todo/deleteTodo', async (todoId) => {
    await todoAPI.deleteTodo(todoId)

    return todoId
})

export const editTodo = createAsyncThunk('todo/editTodo', async (todo) => {
    await todoAPI.editTodo(todo)

    const res = await todoAPI.getTodoList(todo.accountId)

    return { todo: todo, todoList: res }
})

const todoSlice = createSlice({
    name: "todoList",
    initialState: {
        isLoading: false,
        errorMessage: '',
        todoList: [],
    },
    reducers: {},
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

        // add todo
        builder.addCase(addTodo.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(addTodo.fulfilled, (state, action) => {
            state.isLoading = false
            state.todoList.push(action.payload)
        })

        builder.addCase(addTodo.rejected, (state, action) => {
            state.isLoading = false
            state.errorMessage = action.payload.message
        })

        // delete todo
        builder.addCase(deleteTodo.pending, (state) => {
            state.isLoading = true
        })

        builder.addCase(deleteTodo.fulfilled, (state, action) => {
            state.isLoading = false
            const todoId = action.payload
            state.todoList.map((todo, index) => todo.todoId === todoId ? state.todoList.splice(index, 1) : todo)
        })

        builder.addCase(deleteTodo.rejected, (state, action) => {
            state.isLoading = false
            state.errorMessage = action.payload.message
        })

        // edit todo
        builder.addCase(editTodo.pending, (state) => {
            state.isLoading = true
        })

        builder.addCase(editTodo.fulfilled, (state, action) => {
            state.isLoading = false

            const todoList = action.payload.todoList
            state.todoList = todoList
            // const todo = action.payload.todo
            // const id = todo.id

            // if (!todo) return

            // let currentTodo = state.todoList.find(todo => todo.id === id)

            // if (currentTodo) {
            //     currentTodo = todo
            // }
        })

        builder.addCase(editTodo.rejected, (state, action) => {
            state.isLoading = false
            state.errorMessage = action.payload.message
        })
    }
})

export default todoSlice.reducer