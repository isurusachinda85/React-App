import React from 'react';

import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {DefaultLayout} from "./view/common/defaultLayout/DefaultLayout";
import {Login} from "./view/pages/login/Login";
import {SignUp} from "./view/pages/signUp/SignUp";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/*" Component={DefaultLayout}></Route>
                <Route path="/login" Component={Login}></Route>
                <Route path="/signup" Component={SignUp}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
