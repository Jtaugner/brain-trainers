import React from 'react'
import './index.scss'
import { disableBodyScroll, enableBodyScroll} from 'body-scroll-lock';

function popUpBlackout(OriginalComponent) {
    //В onClick должна приходить функция закрытия модального окна
    return (props) => {
        disableBodyScroll();
        const enableScrollAndExit = () => {
            enableBodyScroll();
            props.onClick();
        };
        return (
            <div className={'pop-up-anim'}>
                <div className={'blackout'} onClick={enableScrollAndExit}/>
                <div className="pop-up">
                    <OriginalComponent
                        {...props}
                        onClick={enableScrollAndExit}
                    />
                </div>

            </div>
        )
    }

}

export default popUpBlackout