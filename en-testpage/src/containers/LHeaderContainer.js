import React, { Component } from 'react';
import { Header } from 'components';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as listeningActions from 'store/modules/listening';

class LHeaderContainer extends Component{
    componentWillMount(){
        let sTime = localStorage.getItem("lStartTime");
        let {ListeningActions} = this.props;

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
        const { lNum, cNum, tNum, chooseAnswer } = this.props;
        const answer = chooseAnswer.toJS();
        const user = localStorage.getItem('user');
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
        chooseAnswer : state.listening.get('chooseAnswer')
    }),
    (dispatch) => ({
        ListeningActions : bindActionCreators(listeningActions, dispatch)
    })
)(withRouter(LHeaderContainer));