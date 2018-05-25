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
            total : this.props.total,
            start : this.props.start,
            record : this.props.record,
        }
        var recorderRef = null;
    }
    componentDidMount(){
        console.log("Qspeaking didMount...");
        console.log(this.recorderRef);
    }
    startRecord(){
        this.recorderRef.startRecording();
    }
    stopRecord(){
        if(this.recorderRef.state.isRecording) this.recorderRef.stopRecording();
    }
    render(){
        return(
            <div className={cx('qspeaking')}>
                <div className={cx('question')}>
                    <Question>
                        {this.state.question}
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
                        total={this.state.total}
                        chapter={this.state.start}
                        record={this.state.record}
                        startRecord={this.startRecord.bind(this)}
                        stopRecord={this.stopRecord.bind(this)}
                    />
                </div>
            </div>
        );
    }
}
// const QSpeaking = ({question, onChangehandle, total, start, record}) => {
//     console.log(question);
//     var myRef;
//     return(
//         <div className={cx('qspeaking')}>
//             <div className={cx('question')}>
//                 <Question>
//                     {question}
//                 </Question>
//             </div>
//             <div className={cx('answer')}>
//                 <AudioRecorder
//                     ref={ref => { this.myRef = ref }}
//                     onChange={(e)=>{
//                         e.target = this.myRef;
//                         onChangehandle(e);
//                     }}
//                 />
//                 <SpeakingTimer
//                     total={total}
//                     chapter={start}
//                     record={record}
//                     recorder={this.myRef}
//                 />
//             </div>
//         </div>
//     );
// }

export default QSpeaking;