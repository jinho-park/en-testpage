import React , { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as readingActions from 'store/modules/reading';
import { QReading } from 'components';

class ReadingContainer extends Component{
    onChange = (e) => {
        const { ReadingActions } = this.props;
        const { cpNum } = this.props;

        ReadingActions.readingChooseAnswer({e, cpNum});
    }

    render(){
        const { onChange } = this;
        const { cpNum, problem, chooseAnswer, Main } = this.props;
        const { ReadingActions } = this.props;
        const data = chooseAnswer.toJS();

        if(data[cpNum] === undefined)
            ReadingActions.readingInitialAnswer({cpNum});

        return(
            <QReading
                Main={Main}
                question={problem[cpNum]}
                onChangehandle={onChange}
                answer = {data[cpNum]}
            />
        )
    }
}

export default connect(
    (state) => ({
        cpNum : state.reading.get('cpNum'),
        problem : state.reading.get('problem'),
        chooseAnswer : state.reading.get('chooseAnswer'),
        Main : state.reading.get('main')
    }),
    (dispatch) => ({
        ReadingActions : bindActionCreators(readingActions, dispatch)
    })
)(withRouter(ReadingContainer));