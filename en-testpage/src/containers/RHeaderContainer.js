import React, { Component } from 'react';
import { Header } from 'components';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as readingActions from 'store/modules/reading';

class RHeaderContainer extends Component{
    componentWillMount(){
        let sTime = localStorage.getItem("rStartTime");
        const { ReadingActions } = this.props;
        const { pNum } = this.props;
        const Num = pNum;

        ReadingActions.readingGetTotal();
        ReadingActions.readingGetMain({Num});
        ReadingActions.readingGetQuestion({Num});

        if(sTime === null){
            sTime = new Date().getTime();
            localStorage.setItem("rStartTime", sTime);
            ReadingActions.readingSetTime({sTime});
        }
        else{
            localStorage.setItem("rStartTime", sTime);
            ReadingActions.readingSetTime({sTime});
        }
    }
    
    onClickNexthandle = () => {
        const { ReadingActions } = this.props;
        const { cNum, tNum, history, chooseAnswer, ctNum, pNum } = this.props;
        const answer = chooseAnswer.toJS();
        const user = localStorage.getItem('user');
        const Num = pNum + 1;

        if(cNum+1 >= tNum){
            ReadingActions.readingPostAnswer({answer, user, pNum});
            ReadingActions.readingChangeMain(pNum+1);
            if(Num >= ctNum){
                history.push('./listening');
            }else {
                ReadingActions.readingGetMain({Num});
                ReadingActions.readingGetQuestion({Num});
            }
        }
        else{
            ReadingActions.readingChangeProblem(cNum+1);
        }
    }

    onClickPrevhandle = () => {
        const { ReadingActions } = this.props;
        const { cNum, pNum } = this.props;
        const Num = pNum -1;

        if(cNum)
            ReadingActions.readingChangeProblem(cNum-1);
        else{
            ReadingActions.readingChangeMain(pNum-1);
            ReadingActions.readingGetMain({Num});
            ReadingActions.readingGetQuestion({Num});
        }
    }

    render(){
        const { onClickNexthandle, onClickPrevhandle  } = this;

        return(
            <Header
                onNext={onClickNexthandle}
                onPrev={onClickPrevhandle}
                total = {60*60}
                startTime = {localStorage.getItem('rStartTime')}
            >
                Reading
            </Header>
        );
    }
}

export default connect(
    (state) => ({
        pNum : state.reading.get('pNum'),
        tNum : state.reading.get('tNum'),
        chooseAnswer : state.reading.get('chooseAnswer'),
        ctNum : state.reading.get('ctNum'),
        cNum : state.reading.get('cNum'),
    }),
    (dispatch) => ({
        ReadingActions : bindActionCreators(readingActions, dispatch)
    })
)(withRouter(RHeaderContainer));