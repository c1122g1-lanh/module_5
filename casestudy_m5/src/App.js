import './App.css';
import {Header} from "./components/header";
import React from "react";
import {Footer} from "./components/footer";
import {ListCustomer} from "./furama/customer/ListCustomer";
import {ListService} from "./furama/service/ListService";
import {ListContacts} from "./furama/contact/ListContact";
import {Route, Routes} from "react-router";
import {CreateContact} from "./furama/contact/CreateContact";

function App() {
    return (

        <Routes>
            <Route path={'/contact'} element={<ListContacts/>}/>
            <Route path={'/customer'} element={<ListCustomer/>}/>
            <Route path={'/service'} element={<ListService/>}/>
            <Route path={'/contact-create'} element={<CreateContact/>}/>
        </Routes>

    )
}

export default App;
