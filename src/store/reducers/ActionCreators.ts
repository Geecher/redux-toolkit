import type {AppDispatch} from "../store.ts";
import type {IUser} from "../../models/IUser.ts";
import axios from "axios";
import {userSlice} from "./UserSlice.ts";

export const fetchUsers = () => async (dispatch: AppDispatch ) => {
    try {
        dispatch(userSlice.actions.usersFetching());
        const resp = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
        dispatch(userSlice.actions.usersFetchingSuccess(resp.data));
    } catch (e) {
        let message: string;
        if (axios.isAxiosError(e)) {
            // AxiosError имеет поле message
            message = e.message;
        } else if (e instanceof Error) {
            // обычный Error
            message = e.message;
        } else {
            // всё остальное — приводим к строке
            message = String(e);
        }
        dispatch(userSlice.actions.usersFetchError(message));
    }
}