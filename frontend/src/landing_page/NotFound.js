import React from 'react';

function NotFound() {
    return ( 
        <div className='container p-5 mb-5'>
            <div className='row text-center'>
                <h1 className='mt-5 mb-4 fs-2'>404 Not Found</h1>
                <p className='text-muted'>Sorry, the page you are looking for doesn't exist.</p>
            </div>
        </div>
     );
}

export default NotFound;