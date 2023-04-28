import './App.css';
import {Header} from "./components/header";
import React from "react";
import {Footer} from "./components/footer";
import {Body} from "./components/body";
import {ListCustomer} from "./furama/customer/list-customer";

function App() {
  return (
      <>
    <Header/>
    <ListCustomer/>
    <Footer/>
    </>
  );
}

export default App;
