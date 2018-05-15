import React from 'react';
import { TextArea, Listening } from 'components';

const TWriting = ({url, onChangehandle, answer}) => {
    return(
        <div>
            <Listening
                url={url}
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