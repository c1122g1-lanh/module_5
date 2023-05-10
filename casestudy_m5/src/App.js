import './App.css';
import React from "react";
import {ListCustomer} from "./furama/customer/ListCustomer";
import {ListContacts} from "./furama/contact/ListContact";
import {Route, Routes} from "react-router";
import {CreateContact} from "./furama/contact/CreateContact";
import {ListService} from "./furama/factility/ListService";

function App() {
    return (
        <Routes>
            <Route path={'/contact'} element={<ListContacts/>}/>
            <Route path={'/customer'} element={<ListCustomer/>}/>
            <Route path={'/facility'} element={<ListService/>}/>
            <Route path={'/contact-create'} element={<CreateContact/>}/>
        </Routes>

    )
}

export default App;
