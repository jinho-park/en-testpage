import React from 'react';

const FinishPage = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('rStartTime');
    localStorage.removeItem('lStartTime');
    localStorage.removeItem('startTime');
    localStorage.removeItem('wStartTime');
    localStorage.removeItem('sStartTime');
    return(
        <div>
            <h1>FINISH TEST</h1>
        </div>
    )
}

export default FinishPage;