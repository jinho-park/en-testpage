import React from 'react'
import { Button, Input } from 'components';
import styles from './Login.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Login = ({
    clickhandle, 
    changehandle, 
    onKeyPress,
    userName
}) => {
    return(
        <div className={cx('login')}>
            <div className={cx('inputid')}>
                <Input 
                    changehandle={changehandle}
                    onKeyPress={onKeyPress}
                    name="userName"
                    value={userName}
                />
            </div>
            <div className={cx('loginbutton')}>
                <Button click={clickhandle}>로그인</Button>
            </div>
        </div>
    )
}

export default Login;