import React , { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { QSpeaking, Listening } from 'components';
import * as speakingActions from 'store/modules/speaking';

class SpeakingContainer extends Component{
    componentWillMount(){
        const { SpeakingActions } = this.props;
        SpeakingActions.speakingGetQuestion();
    }

    onChange = (e) => {
        const { SpeakingActions } = this.props;
        const { recordData } = this.props;
        const { cNum } = this.props;
        const user = localStorage.getItem('user');
        const myAudioData = e.audioData;
        var str = "";
        var reader = new FileReader();
        if(e.audioData !== null){
            reader.readAsDataURL(e.audioData);
            
            const url = window.URL.createObjectURL(e.audioData);
            const click = document.createEvent('Event');
            click.initEvent('click', true, true);

            const link = document.createElement('A');
            link.href = url;
            link.download = user+"_speaking_"+cNum+".wav";
            link.dispatchEvent(click);
            link.click();
            e.target.onRemoveClick();
        }
        //서버로 전송은 되나, wav로 저장이 안됨..
        // reader.onloadend = function() {
        //     str = reader.result;
        //     SpeakingActions.speakingPostAnswer({user, str});
        // }
    }
    
    onEndhandle = () => {
        const { SpeakingActions } = this.props;
        console.log('audio end');
        SpeakingActions.speakingPlaySet();
    }

    render(){
        const { SpeakingActions } = this.props;
        const { problem, cNum, tNum, listen, listening, total, start, main } = this.props;
        const { onChange, onEndhandle } = this;
        const thisUrl = localStorage.getItem('thisUrl');
        const requestUrl = thisUrl+"api/v1.0/speaking/get/speaking/"+listening[cNum];
        const imageUrl = thisUrl+"api/v1.0/speaking/get/image/"+(cNum+1)+'.jpg';
        
        return(
            <QSpeaking
                main={main}
                question={[<Listening url={requestUrl} onEndhandle={onEndhandle}/>, problem[cNum]]}
                onChangehandle={onChange}
                total={total[cNum]}
                start={new Date().getTime()}
                record={start[cNum]}
            />
        )
    }
}

export default connect(
    (state) => ({
        cNum : state.speaking.get('cNum'),
        problem : state.speaking.get('problem'),
        recordData : state.speaking.get('recordData'),
        tNum : state.speaking.get('tNum'),
        listen : state.speaking.get('listen'),
        listening : state.speaking.get('listening'),
        total : state.speaking.get('total'),
        start : state.speaking.get('start'),
        main : state.speaking.get('main')
    }),
    (dispatch) => ({
        SpeakingActions : bindActionCreators(speakingActions, dispatch)
    })
)(withRouter(SpeakingContainer));