import React from 'react';
import styles from './Question.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Question = ({children}) => {
    return(
        <div className={cx('question')}>
            {children}
        </div>
    );
}

export default Question;