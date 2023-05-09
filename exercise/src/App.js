import './App.css';
import {Routes, Route, NavLink} from 'react-router-dom';
import ShowList from "./components/ss3/list-student";
import React from "react";
import {TodoApp} from "./components/ss3/todo-app";
import {Counter} from "./components/ss5/Counter";
import {FormInfo} from "./components/ss6/FormInfo";
import {FormHealthDeclaration} from "./components/ss6/FormHealthDeclaration";
import {TodoList} from "./components/ss7_api_client/TodoList";
import {BookManagement} from "./components/ss7_api_client/BookManagement";
import {CreateBook} from "./components/ss7_api_client/CreateBook";
import {EditBook} from "./components/ss7_api_client/EditBook";
import {UserList} from "./components/ss8_redux/UserList";


function App() {
    return (
        // < ShowList />
        // < TodoApp />
        //  <Counter/>
        // <Counter2/>
        // <FormInfo/>
        // <FormHealthDeclaration/>
        // <TodoList/>

        <Routes>
            <Route path='/user' element={<UserList/>}/>
            {/*<Route path='/add-book' element={<CreateBook/>}/>*/}
            {/*<Route path='/edit-book/:id' element={<EditBook/>}/>*/}

        </Routes>
    );
}

export default App;
