import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import accountAPI from "../../API/accountAPI";

export const login = createAsyncThunk('account/login', async (account) => {
    await accountAPI.postAccount(account)

    return account
})

const accountSlice = createSlice({
    name: "account",
    initialState: {
        isLoading: false,
        errorMessage: '',
        currentUser: null,
    },
    reducers: {
        logout: (state, action) => {
            state.isLoading = false
            state.errorMessage = ''
            state.currentUser = null
        }
    },
    extraReducers: (builder) => {
        builder.addCase(login.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(login.fulfilled, (state, action) => {
            state.isLoading = false;
            state.currentUser = action.payload;
        })

        builder.addCase(login.rejected, (state, action) => {
            state.isLoading = false;
            state.errorMessage = action.payload.message;
        })
    }
})

export const { logout } = accountSlice.actions
export default accountSlice.reducer