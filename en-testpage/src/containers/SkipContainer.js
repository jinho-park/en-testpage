import React , { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class SkipContainer extends Component{
    render(){
        return(
            <div></div>
        )
    }
}

export default connect(
    (state) => ({
        
    }),
    (dispatch) => ({
        
    })
)(withRouter(SkipContainer));