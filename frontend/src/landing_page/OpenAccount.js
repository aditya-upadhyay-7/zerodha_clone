import React from 'react';
import { useNavigate } from "react-router-dom";


function OpenAccount() {
    const navigate = useNavigate();
    return ( 
        <div className='container p-5 mb-5'>
            <div className='row text-center'>
                <h1 className='mt-5 mb-4 fs-2'>Open a Zerodha account</h1>
                <p className='text-muted'>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
                <button className='p-2 btn btn-primary fs-5 mt-3 mb-5' style={{width:"15%", margin:"0 auto", backgroundColor:"#387ED1"}} onClick={() => {navigate("/signup");}}>Singup now</button>
            </div>
        </div>
     );
}

export default OpenAccount;