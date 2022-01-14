import { createSlice } from "@reduxjs/toolkit";

export const accountSlice = createSlice({
    name: "account",
    initialState: {
        name: "",
        image: "",
    },
    reducers: {
        login: (state, action) => {
            state.name = action.payload.name
            state.image = action.payload.image
        },
        logout: (state, action) => {
            state.name = ""
            state.image = ""
        }
    }
})