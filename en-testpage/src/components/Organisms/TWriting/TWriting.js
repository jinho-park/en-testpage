import React, { Component } from 'react';
import { TextArea, Listening, Question } from 'components';
import styles from './TWriting.scss';
import classNames from 'classnames/bind';
import ReactHowler from 'react-howler';

const cx = classNames.bind(styles);

export default class TWriting extends Component{
    constructor(props){
        super(props);

        this.state = {
            play : false,
            visible : 'visible'
        }

        this.onEndhandle = this.onEndhandle.bind(this);
    }

    componuntDidMount(){
        this._timer();
    }

    _timer(){
        console.log('timer start');
        setTimeout(
            this.setState({play : true, visible : 'hidden'}), 10*60*1000);
    }

    onEndhandle(){
        console.log('end audio');

        this.setState({
            visible : 'visible'
        });
    }

    render(){
        const { url, onChangehandle, answer, question} = this.props;
        const { onEndhandle } = this;

        return(
            <div className={cx('twriting')}>
                <div className={cx('listen')} visibility={this.state.visible}>
                    <ReactHowler
                        src={url}
                        playing={this.state.play}
                        preload={true}
                        onEnd={onEndhandle}
                    />
                    <div dangerouslySetInnerHTML={{__html : question}}></div>
                </div>
                <div className={cx('text')}>
                    <TextArea
                        onChange={onChangehandle}
                    >
                        {answer}
                    </TextArea>
                </div>
            </div>
        )
    }
}