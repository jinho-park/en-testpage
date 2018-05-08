import React from 'react';
import { ListeningContainer, LHeaderContainer } from 'containers';
import { QuestionTemplate } from 'components';

const ListeningPage = () => {
    return(
        <QuestionTemplate
            header={<LHeaderContainer/>}
        >
            <ListeningContainer/>
        </QuestionTemplate>
    );
}

export default ListeningPage;