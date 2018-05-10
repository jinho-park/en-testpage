import React from 'react';
import styles from './QWriting.scss';
import { Question, TextArea } from 'components';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const QWriting = ({question, onChangehandle, answer}) => {
    //if(question === undefined) return;
    return(
        <div className={cx('qwriting')}>
            <div className={cx('question')}>
                <Question>
                    asdf
                </Question>
            </div>
            <div className={cx('answer')}>
                <TextArea
                    onChange={onChangehandle}
                >
                    {answer}
                </TextArea>
            </div>
        </div>
    );
}

export default QWriting;