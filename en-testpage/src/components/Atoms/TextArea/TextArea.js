import React from 'react';

const TextArea = ({onChange, children}) => {
    return(
        <textarea
            onChange={onChange}
        >
            {children}
        </textarea>
    )
}

export default TextArea;