//import logo from './logo.svg';
import './App.css';
import React from 'react';
//import Headercomponent from './commanComponent/Headercomponent';
//import  FooterComponent from './commanComponent/FooterComponent';
import Register from "./register/Register";
import Login from "./login/Login"
import {BrowserRouter,Switch,Route} from "react-router-dom";
import Createorder from './orders/Createorder';
import Orderlists from './orders/Orderlists';
// import OrderPage from './orders/OrderPage';

function App() {
  return (

    < BrowserRouter>
    <div>
    <Switch>
      <Route  path="/" exact component={Login}/>
      <Route path="/register"   exact><Register/></Route>
      <Route path='/orders' exact  ><Createorder/></Route>
      <Route path='/orderlists' exact  ><Orderlists/></Route>
      {/* <Route path='order-past' exact><OrderPage/></Route> */}
       </Switch>
    </div>
  </BrowserRouter>
  );
}

export default App;
