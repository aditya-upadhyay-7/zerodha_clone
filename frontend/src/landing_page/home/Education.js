import React from 'react';

function Education() {
    return ( 
        <div className='container p-5'>
            <div className='row'>

                <div className='col-6 py-2'>
                    <img src='media/images/education.svg' alt='Education'/>
                </div>
               
                <div className='col-6 py-5'>
                    <div className='mb-5 py-3'>
                    <h1 className='mb-3 fs-2'>Free and open market education</h1>
                    <p className='text-muted'>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                    <a href='/' style={{textDecoration:"none", fontWeight:"500", color:"#387ED1"}}>Varsity <i class="fa-solid fa-arrow-right-long"></i></a>
                    </div>

                    <div>
                    <p className='text-muted'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                    <a href='/' style={{textDecoration:"none", fontWeight:"500", color:"#387ED1"}}>TradingQ&A <i class="fa-solid fa-arrow-right-long"></i></a>
                    </div>
                </div>

            </div>
        </div>
     );
}

export default Education;