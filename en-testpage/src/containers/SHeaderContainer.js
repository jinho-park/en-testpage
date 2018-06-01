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

        SpeakingActions.speakingGetList();

        if(sTime === null){
            sTime = new Date().getTime();
            localStorage.setItem("sStartTime", sTime);
            SpeakingActions.speakingSetTime({sTime});
        }
        else{
            localStorage.setItem("sStartTime", sTime);
            SpeakingActions.speakingSetTime({sTime});
        }
        
    }

    onClickNexthandle = () => {
        const { SpeakingActions } = this.props;
        const { cNum, tNum, history, recordData } = this.props;
        const file = recordData;

        if(cNum+1 >= tNum){
            history.push('./writing');
        }
        else{
            console.log(cNum);
            if(parseInt((cNum+1)/2) == 1) {
                SpeakingActions.speakingGetMain({cNum});
            }else{
                SpeakingActions.speakingSetMain();
            }
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
        recordData : state.speaking.get('recordData'),
        listen : state.listening.get('listen')
    }),
    (dispatch) => ({
        SpeakingActions : bindActionCreators(speakingActions, dispatch)
    })
)(withRouter(SHeaderContainer));