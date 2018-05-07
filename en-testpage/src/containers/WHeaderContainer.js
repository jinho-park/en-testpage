import React, { Component } from 'react';
import { Header } from 'components';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as writingActions from 'store/modules/writing';

class WHeaderContainer extends Component{
    onClickNexthandle = () => {
        const { WritingActions } = this.props;
        const { wcNum, tNum, answer } = this.props;
        const data = answer.toJS();

        if(wcNum+1 >= tNum){
            WritingActions.writingPostAnswer({data});
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
        const { onClickNexthandle, onCliPrevhandle } = this;
        return(
            <Header
                onNext={onClickNexthandle}
                onPrev={this.onClickPrevhandle}
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