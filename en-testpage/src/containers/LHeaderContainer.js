import React, { Component } from 'react';
import { Header } from 'components';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as listeningActions from 'store/modules/listening';

class RHeaderContainer extends Component{
    onClickNexthandle = () => {

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
                Listening
            </Header>
        );
    }
}

export default connect(
    (state) => ({
        lNum : state.listening.get('lNum'),
        tNum : state.listening.get('tNum'),
        chooseAnswer : state.listening.get('chooseAnswer')
    }),
    (dispatch) => ({
        ListeningActions : bindActionCreators(listeningActions, dispatch)
    })
)(withRouter(RHeaderContainer));