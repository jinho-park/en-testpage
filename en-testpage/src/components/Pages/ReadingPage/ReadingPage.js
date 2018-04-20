import React from 'react';
import { ReadingContainer, HeaderContainer } from 'containers';
import { QuestionTemplate } from 'components';

const ReadingPage = () => {
    return (
        <QuestionTemplate
            header={<HeaderContainer/>}
        >
            <ReadingContainer/>
        </QuestionTemplate>
    )
}

export default ReadingPage;