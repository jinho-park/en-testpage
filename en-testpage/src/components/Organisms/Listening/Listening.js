import React, { Component } from 'react';
import ReactHowler from 'react-howler';

class Listening extends Component{
    render(){
        const { url, onEndhanle } = this.props;
        return(
            <div>
                <ReactHowler
                    src={url}
                    playing={true}
                    onEnd={onEndhanle}
                />
            </div>
        )
    }
}

export default Listening;