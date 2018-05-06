import React from 'react';
import styles from './Input.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Input = ({
    changehandle, 
    onKeyPress,
    name,
    userName
}) => {
    return(
        <input className={cx('input')}
            onChange={changehandle}
            onKeyPress={onKeyPress}
            name={name}
            value={userName}
        />
    )
}

export default Input;