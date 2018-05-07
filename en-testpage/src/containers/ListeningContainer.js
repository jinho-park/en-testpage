import React , { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as listeningActions from 'store/modules/listening';
import { QReading } from 'components';

class ListeningContainer extends Component{
    render(){
        const { listen } = this.props;

        return(
            {listen} ? <input/>: <QReading/>
        )
    }
}

export default connect(
    (state) => ({
        problem : state.listening.get('problem'),
        lNum : state.listening.get('lNum'),
        tNum : state.listening.get('tNum'),
        chooseAnswer : state.listening.get('chooseAnswer'),
        listen : state.listening.get('listen')
    }),
    (dispatch) => ({
        ListeningActions : bindActionCreators(listeningActions, dispatch)
    })
)(withRouter(ListeningContainer));