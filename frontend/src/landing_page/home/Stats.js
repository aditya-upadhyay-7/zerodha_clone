import React from 'react';

function Stats() {
    return (  
        <div className='container p-3'>
            <div className='row p-5'>
                <div className='col-6 p-5'>
                    <h1 className='fs-2 mb-5'>Trust with confidence</h1>
                    <h2 className='fs-4 mb-2'>Customer-first always</h2>
                    <p className='text-muted mb-4'>That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores worth of equity investments.</p>

                    <h2 className='fs-4 mb-2'>No spam or gimmicks</h2>
                    <p className='text-muted mb-4'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.</p>

                    <h2 className='fs-4 mb-2'>The Zerodha universe</h2>
                    <p className='text-muted mb-4'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>

                    <h2 className='fs-4 mb-2'>Do better with money</h2>
                    <p className='text-muted mb-4'>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
                </div>

                <div className='col-6 p-5'>
                    <img src='media/images/ecosystem.png' alt='ecosystem' style={{width: "100%"}}/>
                   
                    <div className='text-center'>
                        <a href='/' className='mx-4' style={{textDecoration:"none", fontWeight:"500", color:"#387ED1"}}>Explore our products <i class="fa-solid fa-arrow-right-long"></i></a>
                        <a href='/'  style={{textDecoration:"none", fontWeight:"500", color:"#387ED1"}}>Try Kite demo <i class="fa-solid fa-arrow-right-long"></i></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Stats;