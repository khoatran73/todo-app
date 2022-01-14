import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
    name: "filter",
    initialState: {
        search: "",
        status: "All",
        priority: [],
    },
    reducers: {
        searchFilterChange: (state, action) => {
            state.search = action.payload
        },
        statusFilterChange: (state, action) => {
            state.status = action.payload
        },
        priorityFilterChange: (state, action) => {
            state.priority = action.payload
        }
    }
})