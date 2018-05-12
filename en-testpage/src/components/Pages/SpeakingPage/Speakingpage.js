import React from 'react';
import { SpeakingContainer, SHeaderContainer } from 'containers';
import { QuestionTemplate } from 'components';

const SpeakingPage = () => {
    return(
        <QuestionTemplate
            header={<SHeaderContainer/>}
        >
            <SpeakingContainer/>
        </QuestionTemplate>
    );
}

export default SpeakingPage;