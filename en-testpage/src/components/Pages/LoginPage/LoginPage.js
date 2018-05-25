import React from 'react';
import { LoginContainer } from 'containers';
import styles from './LoginPage.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const LoginPage = () => {
    localStorage.removeItem('readingTest');
    localStorage.removeItem('writingTest');
    localStorage.removeItem('listeningTest');
    localStorage.removeItem('speakingTest');
    return (
        <div className={cx('loginpage')}>
            <LoginContainer/>
        </div>
    )
}

export default LoginPage;