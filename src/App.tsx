import './App.css'
// import {useAppDispatch, useAppSelector} from "./hooks/redux.ts";
// import {useEffect} from "react";
// import {fetchUsers} from "./store/reducers/ActionCreators.ts";
import PostContainer from "./components/PostContainer.tsx";
import PostContainer2 from "./components/PostContainer2.tsx";

// Закомментированная часть кода используется для примера работы с Redux Toolkit
// А рабочая часть кода демонстрирует использование RTK Query для получения и управления данными постов.
function App() {
    // const dispatch = useAppDispatch();
    // const {users, isLoading, error} = useAppSelector(state => state.userReducer);
    //
    // useEffect(() => {
    //     dispatch(fetchUsers())
    // }, [])

    return (
        <>
            {/*{isLoading && <h1>Идёт загрузка...</h1>}*/}
            {/*{error && <h1 style={{color: 'red'}}>{String(error)}</h1>}*/}
            {/*{(isLoading || error != null) ? null : JSON.stringify(users, null, 2)}*/}
            <div style={{display: "flex"}}>
                <PostContainer/>
                <PostContainer2/>
            </div>
        </>
    )
}

export default App
