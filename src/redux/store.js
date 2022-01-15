import { configureStore } from "@reduxjs/toolkit"
import { filterSlice } from "./slices/filterSlice"
import { todoSlice } from "./slices/todoSlice"
import { accountSlice } from "./slices/accountSlice"

const store = configureStore({
    reducer: {
        account: accountSlice.reducer,
        filters: filterSlice.reducer,
        todoList: todoSlice.reducer,
    }
})

export default store