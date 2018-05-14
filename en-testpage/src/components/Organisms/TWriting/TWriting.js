import React from 'react';
import { TextArea, Listening } from 'components';

const TWriting = ({url, onChangehandle, answer}) => {
    return(
        <div>
            <Listening
                src={url}
            />
            <TextArea
                onChange={onChangehandle}
            >
                {answer}
            </TextArea>
        </div>
    )
}

export default TWriting;