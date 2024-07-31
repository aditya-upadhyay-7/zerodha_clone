import React from 'react';

function Hero() {
    return ( 
        <div  style={{backgroundColor:"#387ED1"}}>
        <div className='container p-5'>
            <div className='row mb-5'>
                <div className='col-7 px-5'>
                    <h4 style={{color:"white"}} className='mb-5'>Support Portal</h4>     
                    <h4 style={{color:"white", fontWeight:"400"}} className='mb-4'>Search for an answer or browse help topics to create a ticket</h4>
 
                    <input className='mb-4' style={{width:"615px", height:"55px", padding:"0 15px 0 15px", border:"10px solid white", borderRadius:"10px"}} type='text' placeholder='Eg: how do i activate F&O, why is my order getting rejected...'/>
                    
                    <div>
                    <a href='/' style={{color:"white", marginRight:"20px", fontSize:"18px"}}>Track account opening</a>
                    <a href='/' style={{color:"white", marginRight:"20px", fontSize:"18px"}}>Track segment activation</a>
                    <a href='/' style={{color:"white", marginRight:"20px", fontSize:"18px"}}>Intraday margins</a>
                    </div>
                    <br/>
                    <a href='/' style={{color:"white", fontSize:"18px"}}>Kite user manual</a>
                </div>

                <div className='col-5 px-5'>
                    <a href='/' style={{color:"white", fontSize:"18px", marginLeft:"300px"}}>Track tickets</a>
                    <h4 style={{color:"white", paddingTop:"37px"}} className='mt-5'>Featured</h4>
                    <div style={{color:"white", fontSize:"18px"}}>
                        1. <a href='/' style={{color:"white", fontSize:"18px"}}>Rights Entitlements listing in July 2024</a>
                        <br/><br/>
                        2. <a href='/' style={{color:"white", fontSize:"18px"}}>Latest Intraday leverages and Square-off timings</a>
                    </div>
                </div>
            </div>
        </div>
        </div>
     );
}

export default Hero;