import React, { Component } from 'react';
import { Header} from 'components';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class HeaderContainer extends Component{
    return(){
        return(
            <Header/>
        )
    }
}

export default connect(
    (state) => ({

    }),
    (dispatch) => ({

    })
)(withRouter(HeaderContainer));