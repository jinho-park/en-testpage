import React from 'react';
import './Button.css';

const Button = ({children, click}) => {
    return(
        <div 
            className="Button"
            onClick={click}
        >
            {children}
        </div>
    )
}

export default Button;