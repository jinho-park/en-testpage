import React from 'react';

const Input = ({
    changehandle, 
    onKeyPress,
    name,
    userName
}) => {
    return(
        <input 
            onChange={changehandle}
            onKeyPress={onKeyPress}
            name={name}
            value={userName}
        />
    )
}

export default Input;