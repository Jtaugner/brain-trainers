import React from 'react';
import {connect} from "react-redux";
import {toggleSettings} from "../../store/ac";

function SettingsLink(props) {
    const {openSettings} = props;
    return (
            <div
            onClick={openSettings}
                className="bottom-menu__link bottom-menu__settings" />
    );
}

export default connect(null, (dispatch) => ({
    openSettings: () => dispatch(toggleSettings())
}))(SettingsLink);
