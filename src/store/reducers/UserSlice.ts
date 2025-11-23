import type {IUser} from "../../models/IUser.ts";
import {createSlice, type PayloadAction} from "@reduxjs/toolkit";
import {fetchUsers} from "./ActionCreators.ts";


interface UserState {
    users: IUser[];
    isLoading: boolean;
    error: string | null;
}

const initialState: UserState = {
    users: [],
    isLoading: false,
    error: null,
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchUsers.fulfilled.type, (state, action: PayloadAction<IUser[]>) => {
                state.isLoading = false;
                state.error = null;
                state.users = action.payload;
            })
            .addCase(fetchUsers.pending.type, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchUsers.rejected.type, (state, action: PayloadAction<string>) => {
                state.isLoading = false;
                state.error = action.payload;
            })
    }
})

export default userSlice.reducer;