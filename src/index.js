import ReactDOM from "react-dom/client";
import {BrowserRouter, Route, Routes} from "react-router";
import React from 'react'
import './asset/styles/global.scss'
import Home from "./page/home";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<Home/>}/>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);