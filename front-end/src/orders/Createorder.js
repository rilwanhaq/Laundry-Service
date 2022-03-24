import React from 'react'

//import Sidebar from '../components/Side-bar'
import "../orders/Createorder.css"

import {useHistory,Link} from "react-router-dom"


function Createorder() {
   const history = useHistory()
   const changeRoute=()=>{
       history.push('/orderlists')
   }

  return (
    <div className='parent-create-order'>
        <div class="header">
     <div class="nav-bar">
        <h1>Laundry</h1>
      </div>
      <div class="navbar">
          <a href="#"><p>Pricing</p></a>
          <a href="#"><p>Career</p></a>
          <button>User Name</button>
      </div>
      </div>
       <div  className='side-bar-btn'>
          <div className='parent-div'>
           <div className='nav-home'></div>
            <Link to="/past-orders"><div className='nav-create'></div></Link>
            <Link to="/orders-page"><div className='nav-show'></div></Link>
           </div>
           <div className='create-order-page'>
               <div className='ordercount-search'>
                 <h2>Orders | 0</h2>
                 <div className='search_container'>
                <div className='search_box'>
                    <div className='search_icon'>
                        
                    </div>
            </div>
        </div>
                    
                </div>
            </div>
                
               </div>
               <div className='create-order-btn'>
                <button onClick={changeRoute}>Create</button>
               </div>
               <footer className='footer-component'>
                    <p>2022</p>
                    <div className='footer-circle'>C</div>
                    <p>Laundry</p>
            </footer>
           </div>
    
      
      
      
   
  )
}

export default Createorder
