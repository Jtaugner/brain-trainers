import React from 'react';
import './gift.scss'
import {connect} from "react-redux";

function Gift(props) {
    const {money} = props;
    let time = '13ч. 49м.';
    return (
        <div className="gift">
            <div className="gift__time">
                {time}
                <div className="gift-image" />
            </div>
        </div>
    );
}

export default connect()(Gift);
