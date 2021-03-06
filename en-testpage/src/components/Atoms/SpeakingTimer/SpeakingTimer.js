import React from 'react';

class Timer extends React.Component{
    constructor(props){
        super(props);
        this.state = { 
            timer : null,
            elapsed : 0,
            hour : 0,
            minute : 0, 
            seconds : 0,
        };
    }
    getInitialState(){
        return { elapsed: 0 };
    }

    componentDidMount(){
        console.log(this.props.total);
        console.log(this.props.start);
        console.log(this.props.record);
        this.setState({timer : setInterval(() => {
            this.setState({
                elapsed: Math.round(this.props.total - (new Date().getTime() - this.props.start) / 1000),
                hour: Math.floor(this.state.elapsed / 3600),
                minute: Math.floor(this.state.elapsed / 60 % 60),
                seconds : Math.floor(this.state.elapsed % 60)
            });
            if(this.state.elapsed === this.props.record - 1){
                this.props.startRecord();
            }
            if(this.state.elapsed < 0){
                this.props.stopRecord();
                this.setState({elapsed : 0});
            } 
                
        }, 1000)});
    }

    componentWillUnmount(){
        clearInterval(this.timer);
    }
    
    render() {
        //var elapsed = Math.round(this.state.elapsed / 100);
        return <b>remain time = {this.state.hour} : {this.state.minute} : {this.state.seconds}</b>;
    }
};


export default Timer;