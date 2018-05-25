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
        const { answer, history, type, wcNum } = this.props;
        const userAnswer = answer.toJS();
        const user = localStorage.getItem('user');

        if(type){
            WritingActions.writingPostAnswer({user, userAnswer});
            history.push('./finish');
        }else{
            WritingActions.writingChangeType();
            WritingActions.writingNextProblem(wcNum+1);
        }
    }

    onClickPrevhandle = () => {
        const { WritingActions } = this.props;
        const { type } = this.props;

        if(type)
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
        answer : state.writing.get('answer'),
        type : state.writing.get('type')
    }),
    (dispatch) => ({
        WritingActions : bindActionCreators(writingActions, dispatch)
    })
)(withRouter(WHeaderContainer));