import React, { Component } from 'react';
import ReactHowler from 'react-howler';

class Listening extends Component{
    render(){
        const { url, onEndhanle } = this.props;
        console.log(ReactHowler);
        return(
            <div>
                <ReactHowler
                    src={url}
                    playing={true}
                    onEnd={onEndhanle}
                />
                listening
            </div>
        )
    }
}

export default Listening;