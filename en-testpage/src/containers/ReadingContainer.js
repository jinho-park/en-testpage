import React , { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as readingActions from 'store/modules/reading';
import { QReading } from 'components';

class ReadingContainer extends Component{
    onChange = (e) => {
        const { ReadingActions } = this.props;
        const { cNum } = this.props;

        ReadingActions.readingChooseAnswer({e, cNum});
    }

    render(){
        const { onChange } = this;
        const { cNum, problem, chooseAnswer, Main } = this.props;
        const data = chooseAnswer.toJS();

        return(
            <QReading
                Main={Main}
                question={problem[cNum]}
                onChangehandle={onChange}
                answer = {data[cNum]}
            />
        )
    }
}

export default connect(
    (state) => ({
        cNum : state.reading.get('cNum'),
        problem : state.reading.get('problem'),
        chooseAnswer : state.reading.get('chooseAnswer'),
        Main : state.reading.get('main')
    }),
    (dispatch) => ({
        ReadingActions : bindActionCreators(readingActions, dispatch)
    })
)(withRouter(ReadingContainer));