import React , { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as writingActions from 'store/modules/writing';
import { TWriting } from 'components';

class WTotalContainer extends Component{
    onChange = (e) => {
        const { WritingActions } = this.props;
        const { cpNum } = this.props;
        const data = e.target.value;

        WritingActions.writingChangeAnswer({data, cpNum});
    }

    render(){
        const { cond, answer, problem, list, cpNum } = this.props;
        const { WritingActions } = this.props;
        const { onChange } = this;
        const thisUrl = localStorage.getItem('thisUrl');
        const url = thisUrl + 'api/v1.0/writing/get/audio/' + list[cpNum];

        const data = answer.toJS();

        if(data[cpNum] === undefined)
            WritingActions.writingInitialAnswer({cpNum});

        return(
            <TWriting
                url={url}
                onChangehandle={onChange}
                answer={data[cpNum]}
                question={problem}
            />
        )
    }
}

export default connect(
    (state) => ({
        type : state.writing.get('type'),
        cpNum : state.writing.get('cpNum'),
        list : state.writing.get('list'),
        answer : state.writing.get('answer'),
        problem : state.writing.get('problem')
    }),
    (dispatch) => ({
        WritingActions : bindActionCreators(writingActions, dispatch)
    })
)(withRouter(WTotalContainer));