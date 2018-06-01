import React from 'react';
import { Question } from 'components';
import styles from './QSpeaking.scss';
import classNames from 'classnames/bind';
import AudioRecorder from 'react-audio-recorder';
import {SpeakingTimer} from 'components';
const cx = classNames.bind(styles);
class QSpeaking extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            question : this.props.question,
            onChangehandle : this.props.onChangehandle,
        }
        var recorderRef = null;
    }
    startRecord(){
        this.recorderRef.startRecording();
    }
    stopRecord(){
        if(this.recorderRef.state.isRecording) this.recorderRef.stopRecording();
    }
    render(){
        const { main, question, onChangehandle } = this.props;
        return(
            <div className={cx('qspeaking')}>
                <div className={cx('question')}>
                    <Question>
                        {main}
                    </Question>
                </div>
                <div className={cx('question')}>
                    <Question>
                        {question}
                    </Question>
                </div>
                <div className={cx('answer')}>
                    <AudioRecorder
                        ref={ref => { this.recorderRef = ref }}
                        onChange={(e)=>{
                            e.target = this.recorderRef;
                            this.state.onChangehandle(e);
                        }}
                    />
                    <SpeakingTimer
                        total={this.props.total}
                        start={this.props.start}
                        record={this.props.record}
                        startRecord={this.startRecord.bind(this)}
                        stopRecord={this.stopRecord.bind(this)}
                    />
                </div>
            </div>
        );
    }
}

export default QSpeaking;