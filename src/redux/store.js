import { configureStore } from "@reduxjs/toolkit"
import { filterSlice } from "../components/Main/Filter/filterSlice"
import { todoSlice } from "../components/Main/TodoList/todoSlice"

const store = configureStore({
    reducer: {
        filters: filterSlice.reducer,
        todoList: todoSlice.reducer,
    }
})

export default store