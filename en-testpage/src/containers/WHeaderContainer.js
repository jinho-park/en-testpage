import React, { Component } from 'react';
import { Header } from 'components';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as writingActions from 'store/modules/writing';

class WHeaderContainer extends Component{
    componentWillMount(){
        let sTime = localStorage.getItem("startTime");
        let {WritingActions} = this.props;

        if(sTime === null){
            sTime = new Date().getTime();
            localStorage.setItem("startTime", sTime);
            WritingActions.writingSetTime({sTime});
            window.console.log("if null, start time = " + localStorage.getItem("startTime"));
        }
        else{
            localStorage.setItem("startTime", sTime);
            WritingActions.writingSetTime({sTime});
            window.console.log("if not null, start time = " + localStorage.getItem("startTime"));
        }
        
    }
    onClickNexthandle = () => {
        const { WritingActions } = this.props;
        const { wcNum, tNum, answer } = this.props;
        const userAnswer = answer.toJS();
        const user = localStorage.getItem('user');

        if(wcNum+1 >= tNum){
            WritingActions.writingPostAnswer({userAnswer, user});
            //push finishs
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