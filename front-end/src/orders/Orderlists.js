import React, { useEffect, useState } from 'react'

import {useHistory,Link} from "react-router-dom"
import "../orders/Orderlists.css"
import Product_type_lists from './Product_type_lists'






function Orderlists() {
  const [totalorders,setOrders]=useState([]) 
  const callbackFunction=()=>{

  }
 
  const orderdata = [
        {
        productname :'shirts',
        description:"selcet noof shirts to placeorder to laundry ",
        image:'https://th.bing.com/th/id/OIP.kZUnFP1eViE_45Y_czSNbgHaLH?pid=ImgDet&rs=1'
        },
      {
      productname :'Tshirts',
      description:"selcet noof Tshirts to placeorder to laundry ",
      image:'https://th.bing.com/th/id/OIP.gtRV3hBK_e7BhJsLoTkTuAHaI4?pid=ImgDet&rs=1'
        },
        {
        productname :'Trousers',
        description:"selcet Trousers shirts to placeorder to laundry ",
        image:'https://th.bing.com/th/id/OIP.yCMVmqhpIPDcGRdQA7uiswHaJ4?pid=ImgDet&rs=1'
          },
      {
        productname :'Jeans',
        description:"selcet noof Jeans to placeorder to laundry ",
        image:'https://th.bing.com/th/id/OIP.bkNXpIdRAszLa8_BWYWQlgHaMH?pid=ImgDet&rs=1'
          },
          {
            productname :'Boxers',
            description:"selcet noof Boxers to placeorder to laundry ",
            image:'https://th.bing.com/th/id/OIP.0rS-XGejGDz2fga7UeptsgHaH3?pid=ImgDet&rs=1'
          },
          {
          productname :'Joggers',
          description:"selcet noof Joggers to placeorder to laundry ",
          image:'https://th.bing.com/th/id/OIP.-1XpE5CXYnblCkXoWUrvIwHaIY?pid=ImgDet&rs=1'
          },
          {
          productname :'others',
          description:"selcet noof others to placeorder to laundry ",
          image:'https://th.bing.com/th/id/OIP.nPcc7GDQZfugMeQr9RoSnQHaHU?pid=ImgDet&w=800&h=790&rs=1'
          },
    ]
  return (
    <div className='parent-orderlists'>
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
      <div className='orderlists-table'>
      <div className='parent-div'>
           <div className='nav-home'></div>
            <Link to="/past-orders"><div className='nav-create'></div></Link>
            <Link to="/orders-page"><div className='nav-show'></div></Link>
           </div>
     
         
          <div className='create-order-page'>
               <div className='ordercount-search'>
                 <h2>Create Order</h2>
                 <div className='search_container'>
                <div className='search_box'>
                    <div className='search_icon'>
                        
                    </div>
            </div>
        </div>
                    
                </div>
                <div  className='table-orderlists'>
                  <table cellSpacing={0} className='table-orderlists-inside'  >
                    <thead>
                      <tr className='table-head'>
                        <th>Product Types</th>
                        <th>Quantity</th>
                        <th colSpan={4}>Wash type</th>
                        <th colSpan={2}>Price</th>
                      </tr>
                    </thead>
                    <tbody>
                  { orderdata.map((data)=>{
                  return (
                    <Product_type_lists gettingOrders={ callbackFunction} data={data}/>
                  )})}
                    
                    </tbody> 
                  </table>
                </div>

            </div>
      
          </div>
          <div  className='proceed-cancel-btn'>
              <button className='cancel-btn'>Cancel</button>
              <button className='proceed-btn'>Proceed</button>
            </div>
      <footer className='footer-component'>
                    <p>2022</p>
                    <div className='footer-circle'>C</div>
                    <p>Laundry</p>
            </footer>
      
    </div>
  )
}

export default Orderlists
