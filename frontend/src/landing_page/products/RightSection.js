import React from 'react';

function RightSection({productName, productDescription, link, linkName, rightImageURL}) {
    return ( 
        <div className='container'>
            <div className='row px-5 mt-5'>
                <div className='col-5 p-5 mt-5'>
                    <h1 className='mt-5'>{productName}</h1>
                    <p className='mt-4'>{productDescription}</p>
                    <div>
                        <a href={link} style={{textDecoration:"none", fontWeight:"500", color:"#387ED1"}}>{linkName} <i class="fa-solid fa-arrow-right-long"></i></a>
                    </div>
                </div>
               
                <div className='col-6 px-5'>
                    <img src={rightImageURL} alt="Pricing" className='mb-5'/>
                </div>
            </div>
        </div>
     );
}

export default RightSection;