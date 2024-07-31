import React from 'react';

function Hero() {
    return (        
        <div className='container p-5 mb-5 text-center'>
            <div className='row text-center'>
                <div style={{alignItems:"center"}} className='mt-2'>
                <img src='media/images/homeHero.png' alt='HomeHero' className='mb-5' style={{width:"65%"}}/>
                </div>
                <h1 className='mt-4'>Invest in everything</h1>
                <p className='fs-4 text-muted'>Online plateform to invest in stocks, mutual funds, and more</p>
                <button className='p-2 btn btn-primary fs-5 mt-4 mb-5' style={{width:"15%", margin:"0 auto", backgroundColor:"#387ED1"}}>Singup now</button>
            </div>
        </div>
     );
}

export default Hero;