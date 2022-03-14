import React from 'react';

import './status.style.css';

function Status({ status }) {
    return (
        <div className={`status-component ${status}`} />
    );
}

export default Status;
