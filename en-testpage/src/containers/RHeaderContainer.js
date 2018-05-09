import React, { Component } from 'react';
import { Header } from 'components';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as readingActions from 'store/modules/reading';

class RHeaderContainer extends Component{
    componentWillMount(){
        let sTime = localStorage.getItem("startTime");
        let {ReadingActions} = this.props;

        if(sTime === null){
            sTime = new Date().getTime();
            localStorage.setItem("startTime", sTime);
            ReadingActions.readingSetTime({sTime});
            window.console.log("if null, start time = " + localStorage.getItem("startTime"));
        }
        else{
            localStorage.setItem("startTime", sTime);
            ReadingActions.readingSetTime({sTime});
            window.console.log("if not null, start time = " + localStorage.getItem("startTime"));
        }
        
    }
    
    onClickNexthandle = () => {
        const { ReadingActions } = this.props;
        const { rcNum, tNum, history, chooseAnswer } = this.props;
        const answer = chooseAnswer.toJS();
        const user = localStorage.getItem('user');

        if(rcNum+1 >= tNum){
            ReadingActions.readingPostAnswer({answer, user});
            history.push('./listening');
        }
        else
            ReadingActions.readingNextProblem(rcNum+1);
    }

    onClickPrevhandle = () => {
        const { ReadingActions } = this.props;
        const { rcNum } = this.props;

        if(rcNum)
            ReadingActions.readingPrevProblem(rcNum-1);
    }

    render(){
        const { onClickNexthandle, onClickPrevhandle } = this;

        return(
            <Header
                onNext={onClickNexthandle}
                onPrev={onClickPrevhandle}
            >
                Reading
            </Header>
        );
    }
}

export default connect(
    (state) => ({
        rcNum : state.reading.get('cpNum'),
        tNum : state.reading.get('tNum'),
        chooseAnswer : state.reading.get('chooseAnswer')
    }),
    (dispatch) => ({
        ReadingActions : bindActionCreators(readingActions, dispatch)
    })
)(withRouter(RHeaderContainer));