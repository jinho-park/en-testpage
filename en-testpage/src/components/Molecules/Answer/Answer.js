import React from 'react';
import { RadioButton } from 'components';

const Answer = ({data}) => {
    return(
        <div>
            <form>
                <label><RadioButton value="1" checked="true"/></label>
                <label><RadioButton value="2"/></label>
                <RadioButton value="3"/>
                <RadioButton value="4"/>
            </form>
        </div>
    )
}

export default Answer;