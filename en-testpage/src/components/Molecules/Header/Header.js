import React from 'react';
import { Button } from 'components';
import styles from './Header.scss';
import classNames from 'classnames/bind';
import {Timer} from 'components';
const cx = classNames.bind(styles);

const Header = ({onNext, onPrev, children, total, startTime}) => {
    return(
        <div className={cx('header')}>
            <div className={cx('wrapper-item')}>
                <div className={cx('chapter')}>
                    {children}
                </div>
                <Timer
                    total={total}
                    chapter={startTime}
                />
                <div className={cx('item')}>
                    <Button onClick={onPrev}>이전</Button>
                    <Button click={onNext}>다음</Button>
                </div>
            </div>
        </div>
    )
}

export default Header;