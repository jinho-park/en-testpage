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
                <div className={cx('logo')}>
                    <Timer
                        total={total}
                        chapter={startTime}
                    />
                </div>
                <div className={cx('chapter')}>
                    {children}
                </div>
                <div className={cx('item')}>
                    <Button click={onPrev}>PREV</Button>
                    <Button click={onNext}>NEXT</Button>
                </div>
            </div>
        </div>
    )
}

export default Header;