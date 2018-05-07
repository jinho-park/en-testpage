import React from 'react';
import { Question } from 'components';
import { RadioGroup, RadioButton } from 'react-radio-buttons';
import styles from './QReading.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const QReading = ({question, onChangehandle, answer}) => {
    if (question === undefined) return;
    return(
        <div className={cx('qreading')}>
            <div className={cx('question')}>
                <Question>
                    {question.problem}
                </Question>
            </div>
            <div className={cx('answer')}>
                <RadioGroup onChange={onChangehandle} value={answer}>
                    <RadioButton value="1">
                        {question.example[0]}
                    </RadioButton>
                    <RadioButton value="2">
                        {question.example[1]}
                    </RadioButton>
                    <RadioButton value="3">
                        {question.example[2]}
                    </RadioButton>
                    <RadioButton value="4">
                        {question.example[3]}
                    </RadioButton>
                </RadioGroup>
            </div>
        </div>
    );
}

export default QReading;