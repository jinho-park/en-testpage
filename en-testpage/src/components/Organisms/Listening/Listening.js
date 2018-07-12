import React, { Component } from 'react';
import ReactHowler from 'react-howler';
import styles from './Listening.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

class Listening extends Component{
    render(){
        const { url, onEndhanle, image } = this.props;
        return(
            <div className={cx('listening')}>
                <ReactHowler
                    src={url}
                    playing={true}
                    preload={true}
                    onEnd={onEndhanle}
                />
                <img className={cx('image')}
                    src={image}
                />
            </div>
        )
    }
}

export default Listening;