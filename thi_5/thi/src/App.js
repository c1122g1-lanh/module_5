import './App.css';
import React from "react";

import {Route, Routes} from "react-router";
import {List} from "./component/List";
import {Edit} from "./component/Edit";
import {CreateProduct} from "./component/Create";


function App() {
    return (
        <>
            <Routes>
                <Route path={'/'} element={<List/>}/>
                <Route path={'/'} element={<CreateProduct/>}/>
                <Route path={'/edit/:id'} element={<Edit/>}/>
            </Routes>
            </>
    )
}

export default App;
