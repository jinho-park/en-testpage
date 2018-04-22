import React from 'react';
import { QuestionTemplate } from 'components';
import { WritingContainer, WHeaderContainer } from 'containers';

const WritingPage = () => {
    return(
        <QuestionTemplate
            header={<WHeaderContainer/>}
        >
            <WritingContainer/>
        </QuestionTamplate>
    );
}

export default WritingPage;