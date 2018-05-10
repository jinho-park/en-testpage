import React , { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as skipActions from 'store/modules/skip';
import { Header } from 'components';

class SkipContainer extends Component{
    componentWillMount(){
        let sTime = localStorage.getItem("startTime");
        let {SkipActions} = this.props;

        if(sTime === null){
            sTime = new Date().getTime();
            localStorage.setItem("startTime", sTime);
            SkipActions.skipSetTime({sTime});
            window.console.log("if null, start time = " + localStorage.getItem("startTime"));
        }
        else{
            localStorage.setItem("startTime", sTime);
            SkipActions.skipSetTime({sTime});   
            window.console.log("if not null, start time = " + localStorage.getItem("startTime"));
        }
    }
    render(){
        const { onClickNexthandle, onClickPrevhandle } = this;
        return(
            <Header
                onNext={onClickNexthandle}
                onPrev={onClickPrevhandle}
                total = {5*60}
                startTime = {localStorage.getItem('lStartTime')}
            >
                Skip
            </Header>
        )
    }
}

export default connect(
    (state) => ({
        
    }),
    (dispatch) => ({
        SkipActions : bindActionCreators(skipActions, dispatch)
    })
)(withRouter(SkipContainer));