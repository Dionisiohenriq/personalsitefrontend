import React from 'react';
import '../styles/button.css';

function Button({ onClick, children}) {
    return (
        <button className='Button' onClick={onClick}>
            {children}
        </button>
    )
}

export default Button;