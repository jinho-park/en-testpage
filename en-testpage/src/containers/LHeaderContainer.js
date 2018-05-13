import React, { Component } from 'react';
import { Header } from 'components';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as listeningActions from 'store/modules/listening';

class LHeaderContainer extends Component{
    componentWillMount(){
        let sTime = localStorage.getItem("lStartTime");
        const { ListeningActions, history } = this.props;
        const listening = localStorage.getItem('listening');

        ListeningActions.listeningGetList();

        if(listening != null)
            history.push('./skip');

        if(sTime === null){
            sTime = new Date().getTime();
            localStorage.setItem("lStartTime", sTime);
            ListeningActions.listeningSetTime({sTime});
            window.console.log("if null, listening start time = " + localStorage.getItem("lStartTime"));
        }
        else{
            localStorage.setItem("lStartTime", sTime);
            ListeningActions.listeningSetTime({sTime});
            window.console.log("if not null, listening start time = " + localStorage.getItem("lStartTime"));
        }
        
    }

    onClickNexthandle = () => {
        const { ListeningActions } = this.props;
        const { lNum, cNum, tNum, chooseAnswer, tlNum, history, listen } = this.props;
        const answer = chooseAnswer.toJS();
        const user = localStorage.getItem('user');

        console.log(tNum);

        if(cNum+1 > tNum){
            if(lNum + 1 >= tlNum){
                ListeningActions.listeningPostAnswer({answer, user});
                //localStorage.setItem('listening', true);
                history.push('./skip');
            }else{
                ListeningActions.listeningNextListen(lNum+1);
            }
        }else{
            if(listen) ListeningActions.listeningPlaySet();
            else ListeningActions.listeningNextProblem(cNum+1);
        }
    }

    onClickPrevhandle = () => {
        const { ListeningActions } = this.props;
        const { cNum } = this.props;

        if(cNum)
            ListeningActions.listeningPrevProblem(cNum-1);
    }

    render(){
        const { onClickNexthandle, onClickPrevhandle } = this;

        return(
            <Header
                onNext={onClickNexthandle}
                onPrev={onClickPrevhandle}
                total = {30*60}
                startTime = {localStorage.getItem('lStartTime')}
            >
                Listening
            </Header>
        );
    }
}

export default connect(
    (state) => ({
        lNum : state.listening.get('lNum'),
        tNum : state.listening.get('tNum'),
        cNum : state.listening.get('cNum'),
        chooseAnswer : state.listening.get('chooseAnswer'),
        tlNum : state.listening.get('tlNum'),
        listen : state.listening.get('listen')
    }),
    (dispatch) => ({
        ListeningActions : bindActionCreators(listeningActions, dispatch)
    })
)(withRouter(LHeaderContainer));