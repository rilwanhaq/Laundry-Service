import React, {useState} from 'react'
import "../Summary/summary.css";
import axios from 'axios';
import Summary_data from './Summary_data';

function SummaryToCreate(props) {
    const [storeNo,setStoreNo] = useState("")
    const [storeAddress,setStoreAddress] = useState("")
 console.log(props.OrderedItems)
    const [disabled,setDisabled] = useState(true)
   const Userorderdetails = []
   const finalOrderdetails=[]
 


    const washType = []
    const washPrice = []
    const Price = []


    const handleForm = () =>{
        setStoreNo("+91 9999999999")
        setStoreAddress("Near phone Booth, 10th road")
        setDisabled(false)
    }
    const handleSubmitClick = () => {
        // props.handleSummaryClose()
        // props.handleConfirmationPopup()
        Userorderdetails.forEach((items)=>{
            finalOrderdetails.push({productType:items.productType,...items.value})
           })
           
        console.log(finalOrderdetails,'final')
    }
    
    return (
        <div className='popup-box'>
            <div className='summary__box'>
                <div className='summary__header'>
                    Summary
                    <button className='summary__btn__close'>x</button>
                </div>
                <div className='summary__storeinfo'>
                    <div className='store__detail'>
                        <form className='store__form'>
                        <select onChange={handleForm} defaultValue="Store Location">
                                <option disabled>Store Location</option>
                                <option className='store__option'>Jp Nagar</option>
                            </select>
                        </form>
                    </div>
                    <div className='store__detail'>
                        <strong>Store Address</strong>
                        <p>{storeAddress}</p>
                    </div>
                    <div className='store__detail'>
                        <strong>Phone</strong>
                        <p>{storeNo}</p>
                    </div>
                </div>
                <div className='summary__order'>
                    <h4>Order Details</h4>
                    <table cellspacing={5} className='summary__table'>
                    <tbody>
                    {   (props.OrderedItems.length>0 &&
                        props.OrderedItems.map(
                           (items)=>{
                            return (
                                (items.value.quantity>0) &&
                              (items.value.wash || items.value.ironing||items.value.Folding||items.value.Packing)&&(
                                Userorderdetails.push(items),
                                    <Summary_data items={items}/>
                                    
                            ))
                       }))}
                      
                            <tr>
                                <td /><td />
                                <td>Sub total:</td>
                                <td style={{ fontWeight: "bold" }}>360rs</td>
                            </tr>
                            <tr>
                                <td /><td />
                                <td>Pickup Charges:</td>
                                <td style={{ fontWeight: "bold" }}>90</td>
                            </tr>
                            <tr className='product__total'>
                                <td ></td >
                                <td>
                                    Total:
                                </td>
                                <td>Rs 520</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                {console.log(Userorderdetails)}


                <div className='summary__address'>
                    <label>Address</label>
                    <div>
                        <p className='address__title'>Home</p>
                        <p>#223, 10th road, Jp Nagar,</p>
                        <p>Bangalore</p>

                    </div>
                </div>

                <div className='summary__footer'>
                    <button className="submit__button" disabled={disabled} onClick={handleSubmitClick} >Submit</button>
                </div>

            </div>
        </div>

    )

}

export default SummaryToCreate