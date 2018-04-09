import React from 'react';

const RadioButton = ({name, value}) => {
    return(
        <input 
            type="radio"
            name={name} 
            value={value} 
        />
    )
}