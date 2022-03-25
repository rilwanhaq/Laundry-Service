import React from 'react';
import "../commanComponent/side-bar.css";
import { Link } from 'react-router-dom';


function Sidebar(props) {
    return (
        <div className='sideparent-div'>
            <div className='sidenav-home'></div>
            <Link to="/create-orders"><div className='sidenav-create'></div></Link>
            <Link to="/orders-page"><div className='sidenav-show'></div></Link>
        </div>
    );
}

export default Sidebar;