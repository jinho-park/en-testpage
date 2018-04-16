import React from 'react';
import { Button } from 'components';

const Header = ({children}) => {
    return(
        <div>
            <div>
                <div>
                    {children}
                </div>
                <div>
                    <Button>이전</Button>
                    <Button>다음</Button>
                </div>
            </div>
        </div>
    )
}

export default Header;