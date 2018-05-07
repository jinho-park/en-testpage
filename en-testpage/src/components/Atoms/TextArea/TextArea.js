import React from 'react';
import styles from './TextArea.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const TextArea = ({onChange, children}) => {
    return(
        <textarea
            onChange={onChange}
            className={cx('textarea')}
        >
            {children}
        </textarea>
    )
}

export default TextArea;