import type {IUser} from "../../models/IUser.ts";
import axios from "axios";
import {createAsyncThunk} from "@reduxjs/toolkit";

// Данный закомментированный код реализует ту же логику, что и createAsyncThunk ниже,
// но с использованием "ручного" подхода к созданию асинхронного действия.
// export const fetchUsers = () => async (dispatch: AppDispatch ) => {
//     try {
//         dispatch(userSlice.actions.usersFetching());
//         const resp = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
//         dispatch(userSlice.actions.usersFetchingSuccess(resp.data));
//     } catch (e) {
//         let message: string;
//         if (axios.isAxiosError(e)) {
//             // AxiosError имеет поле message
//             message = e.message;
//         } else if (e instanceof Error) {
//             // обычный Error
//             message = e.message;
//         } else {
//             // всё остальное — приводим к строке
//             message = String(e);
//         }
//         dispatch(userSlice.actions.usersFetchError(message));
//     }
// }

export const fetchUsers = createAsyncThunk(
    'user/fetchAll',
    async (_, thunkAPI) => {
        try {
            const resp = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
            return resp.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e);
        }
    }
)