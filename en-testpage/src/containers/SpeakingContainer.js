import React , { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { QSpeaking } from 'components';
import * as speakingActions from 'store/modules/speaking';

class SpeakingContainer extends Component{
    onChange = (e) => {
        const { SpeakingActions } = this.props;
        const { recordData } = this.props;

        console.log(e);
    }

    render(){
        const { SpeakingActions } = this.props;
        const { problem, cpNum } = this.props;
        const { onChange } = this;

        return(
            <QSpeaking
                question={problem[cpNum]}
                onChangehandle={onChange}
            />
        )
    }
}

export default connect(
    (state) => ({
        cpNum : state.speaking.get('cpNum'),
        problem : state.speaking.get('problem'),
        recordData : state.speaking.get('recordData')
    }),
    (dispatch) => ({
        SpeakingActions : bindActionCreators(speakingActions, dispatch)
    })
)(withRouter(SpeakingContainer));