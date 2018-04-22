import React from 'react';
import { ReadingContainer, RHeaderContainer } from 'containers';
import { QuestionTemplate } from 'components';

const ReadingPage = () => {
    return (
        <QuestionTemplate
            header={<RHeaderContainer/>}
        >
            <ReadingContainer/>
        </QuestionTemplate>
    )
}

export default ReadingPage;