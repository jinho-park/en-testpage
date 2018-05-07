import React, { Component } from 'react';
import { Header } from 'components';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as readingActions from 'store/modules/reading';

class RHeaderContainer extends Component{
    onClickNexthandle = () => {
        const { ReadingActions } = this.props;
        const { rcNum, tNum, history, chooseAnswer } = this.props;
        const data = chooseAnswer.toJS();

        console.log(data[rcNum]);

        /*if(data[rcNum] === undefined){
            console.log('inital');
            ReadingActions.readingInitialAnswer({rcNum});
        }*/

        if(rcNum+1 >= tNum){
            ReadingActions.readingPostAnswer({data});
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