import React from 'react';
import { Question } from 'components';
import styles from './QSpeaking.scss';
import classNames from 'classnames/bind';
import AudioRecorder from 'react-audio-recorder';

const cx = classNames.bind(styles);

const QSpeaking = ({question, onChangehandle}) => {
    console.log(question);
    return(
        <div className={cx('qspeaking')}>
            <div className={cx('question')}>
                <Question>
                    {question}
                </Question>
            </div>
            <div className={cx('answer')}>
                <AudioRecorder
                    onChange={onChangehandle}
                />
            </div>
        </div>
    );
}

export default QSpeaking;