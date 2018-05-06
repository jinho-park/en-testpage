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
            <Input 
                changehandle={changehandle}
                onKeyPress={onKeyPress}
                name="userName"
                value={userName}
            />
            <Button click={clickhandle}>로그인</Button>
        </div>
    )
}

export default Login;