import React , { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as writingActions from 'store/modules/writing';
import { QWriting } from 'components';

class WIndepentContainer extends Component{
    onChange = (e) => {
        const { WritingActions } = this.props;
        const { cpNum } = this.props;
        const data = e.target.value;

        WritingActions.writingChangeAnswer({data, cpNum});
    }

    render(){
        const { problem, answer, cpNum } = this.props;
        const { WritingActions } = this.props;
        const { onChange } = this;

        const data = answer.toJS();

        if(data[cpNum] === undefined)
            WritingActions.writingInitialAnswer({cpNum});

        return(
            <QWriting
                question={data}
                onChangehandle={onChange}
                answer={data[cpNum]}
            />
        )
    }
}

export default connect(
    (state) => ({
        cond : state.writing.get('cond'),
        problem : state.writing.get('problem'),
        cpNum : state.writing.get('cpNum'),
        answer : state.writing.get('answer')
    }),
    (dispatch) => ({
        WritingActions : bindActionCreators(writingActions, dispatch)
    })
)(withRouter(WIndepentContainer));