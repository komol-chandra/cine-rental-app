import Header from "./Header.jsx";
import Sidebar from "./Sidebar.jsx";
import MovieList from "./cine/MovieList.jsx";
import Footer from "./Footer.jsx";
import {ThemeContext} from "./context/index.js";
import {useContext} from "react";

export default function Page() {
    const {darkMode} = useContext(ThemeContext);
    return (
        <div className={`h-full w-full ${darkMode ? "dark" : ""}`}>
            <Header/>
            <main>
                <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
                    <Sidebar></Sidebar>
                    <MovieList></MovieList>
                </div>
            </main>

            <Footer/>
        </div>
    );
}