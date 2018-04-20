import React from 'react';

const RadioButton = ({
    name, 
    value,
    checked
}) => {
    return(
        <input 
            type="radio"
            name={name} 
            value={value} 
            checked={checked}
        />
    )
}

export default RadioButton;