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

        console.log('click next');

        if(rcNum+1 >= tNum){
            console.log('next');
            ReadingActions.readingPostAnswer({chooseAnswer});
            history.push('./writing');
        }
        else
            ReadingActions.readingNextProblem(rcNum+1);
    }

    onClickPrevhandle = () => {
        const { ReadingActions } = this.props;
        const { rcNum, tNum } = this.props;

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
        tNum : state.reading.get('tNum')
    }),
    (dispatch) => ({
        ReadingActions : bindActionCreators(readingActions, dispatch)
    })
)(withRouter(RHeaderContainer));