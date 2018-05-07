import React from 'react';
import { Question } from 'components';
import styles from './QSpeaking.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const QSpeaking = ({question}) => {
    return(
        <div className={cx('qspeaking')}>
            <div className={cx('question')}>
                <Question>
                    {question.problem}
                </Question>
            </div>
            <div className={cx('answer')}></div>
        </div>
    );
}

export default QSpeaking;