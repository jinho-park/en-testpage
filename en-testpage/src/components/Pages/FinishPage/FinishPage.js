import React from 'react';
import styles from './FinishPage.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const FinishPage = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('rStartTime');
    localStorage.removeItem('lStartTime');
    localStorage.removeItem('startTime');
    localStorage.removeItem('wStartTime');
    localStorage.removeItem('sStartTime');
    return(
        <div className={cx('page')}>
            <h1>FINISH TEST</h1>
        </div>
    )
}

export default FinishPage;