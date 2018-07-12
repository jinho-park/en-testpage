import React from 'react';
import { RadioGroup, RadioButton } from 'react-radio-buttons';
import styles from './QListening.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const QListening = ({question, onChangehandle, answer}) => {
    if( question === undefined) return;
    return(
        <div className={cx('listening')}>
            <div className={cx('answer')}>
                <div className={cx('problem')}>
                    {question.problem}
                </div>
                <div calssName={cx('example')}>
                    <RadioGroup onChange={onChangehandle} value={answer}>
                        <RadioButton value="1" rootColor='black' pointColor='black'>
                            {question.example[0]}
                        </RadioButton>
                        <RadioButton value="2" rootColor='black' pointColor='black'>
                            {question.example[1]}
                        </RadioButton>
                        <RadioButton value="3" rootColor='black' pointColor='black'>
                            {question.example[2]}
                        </RadioButton>
                        <RadioButton value="4" rootColor='black' pointColor='black'>
                            {question.example[3]}
                        </RadioButton>
                    </RadioGroup>
                </div>
            </div>
        </div>
    )
}

export default QListening;