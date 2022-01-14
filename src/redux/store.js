import { configureStore } from "@reduxjs/toolkit"
import { filterSlice } from "../components/Main/Filter/filterSlice"
import { todoSlice } from "../components/Main/TodoList/todoSlice"
import { accountSlice } from "../components/Login/accountSlice"

const store = configureStore({
    reducer: {
        account: accountSlice.reducer,
        filters: filterSlice.reducer,
        todoList: todoSlice.reducer,
    }
})

export default store