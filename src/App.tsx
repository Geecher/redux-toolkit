import './App.css'
import {useAppDispatch, useAppSelector} from "./hooks/redux.ts";
import {useEffect} from "react";
import {fetchUsers} from "./store/reducers/ActionCreators.ts";


function App() {
    const dispatch = useAppDispatch();
    const {users, isLoading, error} = useAppSelector(state => state.userReducer);

    useEffect(() => {
        dispatch(fetchUsers())
    }, [])

    return (
        <>
            {isLoading && <h1>Идёт загрузка...</h1>}
            {error && <h1 style={{color: 'red'}}>{String(error)}</h1>}
            {(isLoading || error != null) ? null : JSON.stringify(users, null, 2)}
        </>
    )
}

export default App
