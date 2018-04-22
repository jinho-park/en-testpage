import React, { Component } from 'react';
import { Header } from 'components';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as writingActions from 'store/modules/writing';

class WHeaderContainer extends Component{
    onClickNexthandle = () => {
        const { WritingActions } = this.props;
        const { rcNum, tNum } = this.props;

        if(tNum === (rcNum-1)){
            return;
        }

    }

    onClickNexthandle = () => {

    }

    render(){
        return(
            <Header/>
        );
    }
}

export default connect(
    (state) => ({
        rcNum : state.writing.get('cpNum'),
        tNum : state.writing.get('tNum')
    }),
    (dispatch) => ({
        WritingActions : bindActionCreators(writingActions, dispatch)
    })
)(withRouter(WHeaderContainer));