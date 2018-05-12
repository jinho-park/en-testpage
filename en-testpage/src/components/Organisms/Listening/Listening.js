import React, { Component } from 'react';
import ReactHowler from 'react-howler';

class Listening extends Component{
    render(){
        const { url, onEndhanle } = this.props;
        console.log(ReactHowler);
        return(
            <div>
                <ReactHowler
                    src='http://localhost:4000/api/v1.0/listening/get/listening/file_1.mp3'
                    playing={true}
                    onEnd={onEndhanle}
                />
            </div>
        )
    }
}

export default Listening;