import React, { Component } from 'react';
import { Header } from 'components';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as speakingActions from 'store/modules/speaking';

class SHeaderContainer extends Component{
    componentWillMount(){
        let sTime = localStorage.getItem("sStartTime");
        const { SpeakingActions, history } = this.props;

        if(sTime === null){
            sTime = new Date().getTime();
            localStorage.setItem("sStartTime", sTime);
            SpeakingActions.speakingSetTime({sTime});
            window.console.log("if null, speaking start time = " + localStorage.getItem("sStartTime"));
        }
        else{
            localStorage.setItem("sStartTime", sTime);
            SpeakingActions.speakingSetTime({sTime});
            window.console.log("if not null, speaking start time = " + localStorage.getItem("sStartTime"));
        }
        
    }

    onClickNexthandle = () => {
        const { SpeakingActions } = this.props;
        const { cNum, tNum, history, recordData } = this.props;
        const file = recordData;
        console.log("onClickNexthandle...");
        console.log(cNum);
        console.log(tNum);
        if(cNum+1 >= tNum){
            history.push('./writing');
        }
        else{
            //SpeakingActions.speakingPostAnswer({file});
            SpeakingActions.speakingNextProblem(cNum+1);
        }
    }

    onClickPrevhandle = () => {
        const { SpeakingActions } = this.props;
        const { cNum } = this.props;

        if(cNum)
            SpeakingActions.speakingPrevProblem(cNum-1);
    }

    render(){
        const { onClickNexthandle, onClickPrevhandle } = this;

        return(
            <Header
                onNext={onClickNexthandle}
                onPrev={onClickPrevhandle}
                total = {20*60}
                startTime = {localStorage.getItem('sStartTime')}
            >
                Speaking
            </Header>
        );
    }
}

export default connect(
    (state) => ({
        cNum : state.speaking.get('cNum'),
        tNum : state.speaking.get('tNum'),
        recordData : state.speaking.get('recordData')
    }),
    (dispatch) => ({
        SpeakingActions : bindActionCreators(speakingActions, dispatch)
    })
)(withRouter(SHeaderContainer));