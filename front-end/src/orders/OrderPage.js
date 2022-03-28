import "./orderpage.css";
import Search from '../commanComponent/Search';
import Sidebar from "../commanComponent/Side-bar";
import Footer from '../commanComponent/footer';
import { Link } from 'react-router-dom';
import Header from "../commanComponent/OrderHeaderCompo";
import Alert from "../commanComponent/Alert";
import Summary from "../Summary/Summary";
import eye from "../images/eye1.png";
import React, { useState, useEffect } from 'react'
import axios from "axios";



function OrderPage() {
    const [alertIsOpen, setAlertIsOpen] = useState(false);
    const [summaryIsOpen, setSummaryIsOpen] = useState(false);
    const [currOrder, setCurrOrder] = useState({})
    const [orderNo, setOrderNo] = useState(null)

    const [orders, setOrders] = useState([]);
    const [ordCount,setordCount] = useState(0);

    const token = localStorage.getItem("token")
    useEffect(() => {

        axios.get(`http://localhost:5000/orders`, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        }).then(res => {

            setOrders(res.data.orders)
            setordCount(res.data.orders.length)
        })
    },[])

    const dummyData = orders
    
    


    const toggleAlertPopup = () => {
        setAlertIsOpen(!alertIsOpen)
        
    }

    const alertCancel = (ord, id) => {
        setCurrOrder(ord)
        setOrderNo(id+1)
        toggleAlertPopup()
    }

    const viewSummary = (ord) => {
        setCurrOrder(ord)
        toggleSummaryPopup()
    }
    const toggleSummaryPopup = () => {
        setSummaryIsOpen(!summaryIsOpen)
    }
    
    const table_heading = ["Order id", "Order Date & Time", "Store Location", "City", "Store Phone", "Total Items", "Price", "Status", "            ", "View"]
    return (
        <div className='parentOrd'>
        <div>
        <Header></Header>
        <Sidebar></Sidebar>
        </div>
        <div className='topSpace'>
            <h2 className="ordeCount">Orders | {ordCount}</h2>
            <Link to="/orderlists"><button className='head-button'>Create</button></Link> 
        </div>
        <div className='top_srch_btn'>
            <Search></Search>
        </div>
        <div>
            <table  className='orders__table'>
            <thead>
                <tr >
                        {table_heading.map((heading, index) => {
                            return (
                                <th key={index}>{heading}</th>
                            )

                        })}
                </tr>
            </thead>
            <tbody className='table_body'>
                {dummyData.map((order, index) => {
                    let coloChange = "#f4f5f7"
                    if (index % 2) {
                        coloChange = "#0000"
                    }
                    let cancel = false
                    if (order.status === "ready to pick") {
                        cancel = true
                    }
                    
                    let statusStyle = {
                        color: "black",
                        fontWeight: "normal"
                    }
                    if (order.status === "Cancelled") {
                        statusStyle = {
                            color: "red",
                            fontWeight: "bold"
                        }
                    }
                    return (
                        <tr key={order._id} style={{ backgroundColor: coloChange }}>
                        <td onClick={() => viewSummary(order)}>
                        OR000{index + 1}
                        </td>
                        <td onClick={() => viewSummary(order)}>
                            {Date().slice(3, 21)}
                        </td>
                        <td onClick={() => viewSummary(order)}>
                            Jp Naga
                        </td>
                        <td onClick={() => viewSummary(order)}>
                            Bangalore
                        </td>
                        <td onClick={() => viewSummary(order)}>
                            +91 99 88 66 77 55
                        </td>
                        <td onClick={() => viewSummary(order)}>
                            {order.totalquantity}
                        </td>
                        <td className='price' onClick={() => viewSummary(order)}>
                        Rs {order.totalcost}
                        </td>
                        <td onClick={() => viewSummary(order)} style={statusStyle}>
                            {order.status}
                        </td>
                        <td >
                            {cancel &&
                         <button  onClick={() => alertCancel(order, index)} className='table__button cancel'>Cancel Order</button>}
                        </td>
                        <td onClick={() => viewSummary(order)}>
                            <img className="view" src={eye} alt='view' />
                        </td>
                        {alertIsOpen && <Alert
                                    handleClose={toggleAlertPopup}
                                    content={orderNo}
                                    id={currOrder._id}
                        />}
                        {summaryIsOpen && <Summary 
                                    handleSummaryClose={toggleSummaryPopup}
                                    handleAlertClose={toggleAlertPopup}
                                    order={currOrder}
                        />}
                    </tr>
                    )

                })}
            </tbody>
            </table>
        </div>
        <Footer></Footer>
        </div>
    );
}

export default OrderPage;