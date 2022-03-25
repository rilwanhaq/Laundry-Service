import React from 'react'
import {BrowserRouter as Link} from "react-router-dom"
import "../commanComponent/headerorder.css";



function Headercomponent() {

  return (
  <div class="parent1">
    <div class="header1">
     <div class="nav-bar1">
        <h1>Laundry</h1>
      </div>
      <div class="navbar1">
          <a href="#"><p>Pricing</p></a>
          <a href="#"><p>Career</p></a>
          <button>User Name</button>
      </div>
      </div>
 

  </div>
   )
     
}

export default Headercomponent;