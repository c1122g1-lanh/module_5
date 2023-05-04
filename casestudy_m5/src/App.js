import './App.css';
import {Header} from "./components/header";
import React from "react";
import {Footer} from "./components/footer";
import {Body} from "./components/body";
import {ListCustomer} from "./furama/customer/ListCustomer";
import {ListService} from "./furama/service/ListService";

function App() {
  return (
      <>
    <Header/>
    {/*<ListService/>*/}
    <ListCustomer/>
    <Footer/>
    </>
  );
}

export default App;
