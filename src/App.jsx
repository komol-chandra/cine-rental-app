import './App.css'
import {MovieContext,ThemeContext} from "./context/index.js";
import {useReducer, useState} from "react";
import Page from "./Page.jsx";
import {cartReducer, initialState} from "./reducers/CartReducer.js";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
    const[state,dispatch]=useReducer(cartReducer,initialState);
    const [darkMode,setDarkMode]=useState(true);

    return (
        <>
            <ThemeContext.Provider value={{darkMode, setDarkMode}}>
            <MovieContext.Provider value={{state, dispatch}}>
                <Page></Page>
                <ToastContainer/>
            </MovieContext.Provider>
            </ThemeContext.Provider>
        </>
    )
}

export default App
