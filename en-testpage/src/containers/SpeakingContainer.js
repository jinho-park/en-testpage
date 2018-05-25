import React , { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { QSpeaking } from 'components';
import * as speakingActions from 'store/modules/speaking';

class SpeakingContainer extends Component{
    componentWillMount(){
        const { SpeakingActions } = this.props;
        SpeakingActions.speakingGetQuestion();
        console.log("speakingGetQuestion called");
    }

    onChange = (e) => {
        const { SpeakingActions } = this.props;
        const { recordData } = this.props;
        const { cNum } = this.props;
        const user = localStorage.getItem('user');
        const myAudioData = e.audioData;
        //console.log(e.target);
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
        reader.onloadend = function() {
            str = reader.result;
            SpeakingActions.speakingPostAnswer({user, str});
        }
    }

    render(){
        const { SpeakingActions } = this.props;
        const { problem, cNum, tNum } = this.props;
        const { total, start} = this.props;
        const { onChange } = this;
        console.log("SpeakingContainer...problem");
        console.log(problem);
        console.log(cNum);
        console.log(problem[cNum]);
        return(
            <QSpeaking
                question={problem[cNum]}
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
        cNum : state.speaking.get('cNum'),
        problem : state.speaking.get('problem'),
        recordData : state.speaking.get('recordData'),
        tNum : state.speaking.get('tNum')
    }),
    (dispatch) => ({
        SpeakingActions : bindActionCreators(speakingActions, dispatch)
    })
)(withRouter(SpeakingContainer));