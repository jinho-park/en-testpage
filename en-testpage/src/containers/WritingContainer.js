import React , { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { QReading } from 'components';

class WritingContainer extends Component{
    onChange = () => {
        const { WritingActions } = this.props;
    }

    render(){
        const { onChange } = this;
        //const {tNum, cpNum, problem, Answer } = this.props;
        return(
            <QReading
                onChangehandle={onChange}
            />
        )
    }
}

export default connect(
    (state) => ({
        
    }),
    (dispatch) => ({
        
    })
)(withRouter(WritingContainer));