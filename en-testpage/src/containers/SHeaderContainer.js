import React, { Component } from 'react';
import { Header } from 'components';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as speakingActions from 'store/modules/speaking';

class SHeaderContainer extends Component{
    componentWillMount(){
        let sTime = localStorage.getItem("startTime");
        let {SpeakingActions} = this.props;

        if(sTime === null){
            sTime = new Date().getTime();
            localStorage.setItem("startTime", sTime);
            SpeakingActions.speakingSetTime({sTime});
            window.console.log("if null, start time = " + localStorage.getItem("startTime"));
        }
        else{
            localStorage.setItem("startTime", sTime);
            SpeakingActions.speakingSetTime({sTime});
            window.console.log("if not null, start time = " + localStorage.getItem("startTime"));
        }
        
    }

    onClickNexthandle = () => {
        const { SpeakingActions } = this.props;
        const { rcNum, tNum, history, chooseAnswer } = this.props;
        const data = chooseAnswer.toJS();

        console.log(data[rcNum]);

        if(rcNum+1 >= tNum){
            SpeakingActions.speakingPostAnswer({data});
            history.push('./listening');
        }
        else
            SpeakingActions.speakingNextProblem(rcNum+1);
    }

    onClickPrevhandle = () => {
        const { SpeakingActions } = this.props;
        const { rcNum } = this.props;

        if(rcNum)
            SpeakingActions.speakingPrevProblem(rcNum-1);
    }

    render(){
        const { onClickNexthandle, onClickPrevhandle } = this;

        return(
            <Header
                onNext={onClickNexthandle}
                onPrev={onClickPrevhandle}
            >
                Speaking
            </Header>
        );
    }
}

export default connect(
    (state) => ({
        rcNum : state.speaking.get('cpNum'),
        tNum : state.speaking.get('tNum'),
        chooseAnswer : state.speaking.get('chooseAnswer')
    }),
    (dispatch) => ({
        SpeakingActions : bindActionCreators(speakingActions, dispatch)
    })
)(withRouter(SHeaderContainer));