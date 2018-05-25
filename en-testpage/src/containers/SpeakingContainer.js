import React , { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { QSpeaking } from 'components';
import * as speakingActions from 'store/modules/speaking';

class SpeakingContainer extends Component{
    onChange = (e) => {
        const { SpeakingActions } = this.props;
        const { recordData } = this.props;
        const { cpNum } = this.props;
        const user = localStorage.getItem('user');
        const myAudioData = e.audioData;
        console.log(e.target);
        var str = "";
        var reader = new FileReader();
        if(e.audioData !== null){
            reader.readAsDataURL(e.audioData);
            
            const url = window.URL.createObjectURL(e.audioData);
            const click = document.createEvent('Event');
            click.initEvent('click', true, true);

            const link = document.createElement('A');
            link.href = url;
            link.download = user+"_speaking_"+cpNum+".wav";
            link.dispatchEvent(click);
            link.click();
            e.target.onRemoveClick();
        }
        //서버로 전송은 되나, wav로 저장이 안됨..
        reader.onloadend = function() {
            str = reader.result;
            SpeakingActions.speakingPostAnswer({user, str});
        }
    }

    render(){
        const { SpeakingActions } = this.props;
        const { problem, cpNum } = this.props;
        const { total, start} = this.props;
        const { onChange } = this;
        console.log(cpNum);
        console.log(total);
        console.log(start);
        return(
            <QSpeaking
                question={problem[cpNum]}
                onChangehandle={onChange}
                total={60}
                start={new Date().getTime()}
                record={55}
            />
        )
    }
}

export default connect(
    (state) => ({
        cpNum : state.speaking.get('cpNum'),
        problem : state.speaking.get('problem'),
        recordData : state.speaking.get('recordData')
    }),
    (dispatch) => ({
        SpeakingActions : bindActionCreators(speakingActions, dispatch)
    })
)(withRouter(SpeakingContainer));