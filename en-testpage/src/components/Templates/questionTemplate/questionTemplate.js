import React from 'react';
import { Header } from 'components';

const questionTemplate = ({children, header}) => {
    return(
        <div>
            <div>
                <header>
                    {header}
                </header>
            </div>
            <main>
                {children}
            </main>
        </div>
    )
}

export default questionTemplate;