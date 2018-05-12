import React, { Component } from 'react';
import { Header } from 'components';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as writingActions from 'store/modules/writing';

class WHeaderContainer extends Component{
    componentWillMount(){
        let sTime = localStorage.getItem("wStartTime");
        let {WritingActions} = this.props;

        if(sTime === null){
            sTime = new Date().getTime();
            localStorage.setItem("wStartTime", sTime);
            WritingActions.writingSetTime({sTime});
            window.console.log("if null, writing start time = " + localStorage.getItem("wStartTime"));
        }
        else{
            localStorage.setItem("wStartTime", sTime);
            WritingActions.writingSetTime({sTime});
            window.console.log("if not null, writing start time = " + localStorage.getItem("wStartTime"));
        }
        
    }
    onClickNexthandle = () => {
        const { WritingActions } = this.props;
        const { wcNum, tNum, answer, history } = this.props;
        const userAnswer = answer.toJS();
        const user = localStorage.getItem('user');

        if(wcNum+1 >= tNum){
            WritingActions.writingPostAnswer({userAnswer, user});
            history.push('./finish');
        }else
            WritingActions.writingNextProblem(wcNum+1);
    }

    onClickPrevhandle = () => {
        const { WritingActions } = this.props;
        const { wcNum } = this.props;

        if(wcNum)
            WritingActions.writingPrevProblem(wcNum-1);
    }

    render(){
        const { onClickNexthandle, onClickPrevhandle } = this;
        return(
            <Header
                onNext={onClickNexthandle}
                onPrev={onClickPrevhandle}
                total = {50*60}
                startTime = {localStorage.getItem('wStartTime')}
            >
                Writing
            </Header>
        );
    }
}

export default connect(
    (state) => ({
        wcNum : state.writing.get('cpNum'),
        tNum : state.writing.get('tNum'),
        answer : state.writing.get('answer')
    }),
    (dispatch) => ({
        WritingActions : bindActionCreators(writingActions, dispatch)
    })
)(withRouter(WHeaderContainer));