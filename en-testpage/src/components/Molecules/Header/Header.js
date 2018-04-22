import React from 'react';
import { Button } from 'components';

const Header = ({onNext, onPrev, children}) => {
    return(
        <div>
            <div>
                <div>
                    {children}
                </div>
                <div>
                    <Button onClick={onPrev}>이전</Button>
                    <Button onClick={onNext}>다음</Button>
                </div>
            </div>
        </div>
    )
}

export default Header;