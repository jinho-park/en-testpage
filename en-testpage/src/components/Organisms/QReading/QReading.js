import React from 'react';
import { Question } from 'components';
import { RadioGroup, RadioButton } from 'react-radio-buttons';

const QReading = ({question, onChangehandle}) => {
    return(
        <div>
            <div>
                <Question>
                    {question}
                </Question>
            </div>
            <div>
                <RadioGroup onChange={onChangehandle}>
                    <RadioButton value="1">
                        dd
                    </RadioButton>
                    <RadioButton value="2">
                        cc
                    </RadioButton>
                    <RadioButton value="3">
                        aa
                    </RadioButton>
                    <RadioButton value="4">
                        bb
                    </RadioButton>
                </RadioGroup>
            </div>
        </div>
    );
}

export default QReading;