import React from 'react'
import { Link } from 'react-router-dom';

function Order_Side_Bar() {
  return (
    <div>
       <div className="side-bar-btn">
        <div className="parent-div">
          <div className="nav-home"></div>
          <Link to="/past-orders">
            <div className="nav-create"></div>
          </Link>
          <Link to="/orders-page">
            <div className="nav-show"></div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Order_Side_Bar
