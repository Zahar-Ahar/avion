import ReactDOM from "react-dom/client";
import {BrowserRouter, Route, Routes} from "react-router";
import React from 'react'
import './asset/styles/global.scss'
import Home from "./page/home";
import Header from "./components/header";
import Menu from "./components/menu";
import AllProducts from "./page/allProducts";
import ShoppingBaskets from "./page/shoppingBaskets";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <div className={'container'}>
                <Header/>
                <Menu/>
            </div>
            <Routes>
                <Route path={'/'} element={<Home/>}/>
                <Route path={'/allProducts'} element={<AllProducts/>}/>
                <Route path={'/ShoppingBaskets'} element={<ShoppingBaskets/>}/>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);