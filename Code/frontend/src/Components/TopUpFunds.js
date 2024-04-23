import React, { useState, useEffect } from 'react';
import axios from '../network/networkInterceptor';
import { redirect } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './topupfunds.css';



function TopUpFunds() {
 // State to track the amount to top up
    const [amount, setAmount] = useState(0);

    // Function to handle changes in the input field
    const handleAmountChange = (event) => {
        setAmount(Number(event.target.value)); // Convert the input value to a number
    };

    // Function to handle the top-up action
    const handleTopUp = async () => {
    

        // Make a POST request to the server to top up the funds
    var addingMoneyCall=await     axios.post('account/addMoney', {
            "amount" : amount,
            "currency" : "USD"
        });

if(!addingMoneyCall){

    toast.warn('Could not add funds. Please try again.');

    
}else{
	toast.success('Funds added successfully.')

    window.location.href = "/dashboard";
}
    };

   
    useEffect(() => {
      getAmount();
    }, []); 
    async function getAmount(){
 var  responseMoney =   await axios.get('account/money') ;
 console.log(responseMoney.data);
    }
    return (
        <div className='topUp-main-container'>
        		<ToastContainer />
               
                <div className='topupcard'>
                <h2 className='topupH2'>Top Up Your Funds</h2>
            <div className='lableInput'>
                <label htmlFor="amountInput">Enter Amount</label>
                <input className='topupinput'
                    type="number"
                    id="amountInput"
                    value={amount}
                    onChange={handleAmountChange}
                />
            </div>
            <button className='topUpBtn' onClick={handleTopUp}>Top Up</button>
                </div>


          
        </div>
    );
}

export default TopUpFunds;




