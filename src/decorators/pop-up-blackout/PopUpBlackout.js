import React from 'react'
import './index.scss'

function popUpBlackout(OriginalComponent) {
    return (props) => {
        return (
            <div className={'pop-up-anim'}>
                <div className={'blackout'} onClick={()=>{props.onClick()}}/>
                <div className="pop-up">
                    <OriginalComponent
                        {...props}
                    />
                </div>

            </div>
        )
    }

}

export default popUpBlackout