import React, { Component } from 'react';
import { Header } from 'components';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as readingActions from 'store/modules/reading';

class RHeaderContainer extends Component{
    onClickNexthandle = () => {
        const { ReadingActions } = this.props;
        const { rcNum, tNum } = this.props;

        if(tNum == rcNum-1){
            return;
        }

    }

    onClickPrevhandle = () => {

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