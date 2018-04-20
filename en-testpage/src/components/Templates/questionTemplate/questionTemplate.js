import React from 'react';

const QuestionTemplate = ({header, children}) => {
    return(
        <div>
            <header>
                {header}
            </header>
            <div>
                {children}
            </div>
        </div>
    )
}

export default QuestionTemplate;