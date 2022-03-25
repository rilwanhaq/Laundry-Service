import React from 'react';
import "../Summary/summary.css";

function Summary(props) {

    let showButton = false
    const washType = []
    const washPrice = []
    const Price = []

    const handleCancelClick = () => {
        props.handleSummaryClose()
        props.handleAlertClose()
    }

    if (props.order.status === "Ready to Pickup") {
        showButton = true
    } else {
        showButton = false
    }

    props.order.order_details.forEach(product => {
        let wash1 = ""
        let price1 = 0
        if (product.wash === true) {
            wash1 += "Washing  "
            price1 += 20
        }
        if (product.ironing === true) {
            wash1 += "Ironing  "
            price1 += 15
        }
        if (product.Folding === true) {
            wash1 += "Chemical wash  "
            price1 += 10
        }
        if (product.Packing === true) {
            wash1 += "Dry wash  "
            price1 += 25
        }
        Price.push(product.quantity * price1)
        washType.push(wash1)
        washPrice.push(price1)
    });
    const products = props.order.order_details;

    return (
        <div className='popup-box'>
             <div className='summary__box'>
                <div className='summary__header'>
                    Summary
                    <button className='summary__btn__close' onClick={props.handleSummaryClose}>x</button>
                </div>
                <div className='summary__storeinfo'>
                    <div className='store__detail'>
                        <strong>Store Location</strong>
                        <p>Jp Nagar</p>
                    </div>
                    <div className='store__detail'>
                        <strong>Store Address</strong>
                        <p>Near phone Booth, 10th road</p>
                    </div>
                    <div className='store__detail'>
                        <strong>Phone</strong>
                        <p>+91 9999999999</p>
                    </div>
                </div>
                <div className='summary__status'>
                    <div className='circle'></div>
                    <p>Picked up</p>
                    <div className='line'></div>
                    <div className='circle'></div>
                    <p>Washed</p>
                    <div className='line'></div>
                    <div className='circle'></div>
                    <p>Ironed</p>
                    <div className='line'></div>
                    <div className='circle'></div>
                    <p>Delivered</p>
                </div>
                <div className='summary__order'>
                    <h4>Order Details</h4>
                    <table className='summary__table'>
                    <tbody>
                    {products.map((product, index) => {
                                return (
                                    <tr key={index}>
                                        <td className='product__type'>
                                            {product.productType} {props.canCancel}
                                        </td>
                                        <td className='product__washtype'>
                                            {washType[index]}
                                        </td>
                                        <td className='price__calculation'>
                                            {product.quantity} x {washPrice[index]}
                                        </td>
                                        <td className='product__price'>
                                            {Price[index]}
                                        </td>
                                    </tr>
                                )
                })}
                            <tr>
                                <td /><td />
                                <td>Sub total:</td>
                                <td style={{ fontWeight: "bold" }}></td>
                            </tr>
                            <tr>
                                <td /><td />
                                <td>Pickup Charges:</td>
                                <td style={{ fontWeight: "bold" }}>90</td>
                            </tr>
                            <tr className='product__total'><td /><td />
                                <td>
                                    Total:
                                </td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className='summary__address'>
                    <label>Address</label>
                    <div>
                        <p className='address__title'>Home</p>
                        <p>#223, 10th road, Jp Nagar,</p>
                        <p>Bangalore</p>

                    </div>
                </div>

                <div className='summary__footer'>
                {showButton && <button className="cancel__button" onClick={handleCancelClick}>Cancel order</button>}
                </div>

            </div> 
        </div>

    )
}

export default Summary