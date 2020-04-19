import React from 'react';
import './settings.scss'
import {connect} from "react-redux";
import {toggleSettings, toggleSounds} from "../../store/ac";
import {selectSounds} from "../../store/selectors";

function Settings(props) {
    const {closeSettings, toggleSounds,
        sounds} = props;
    return (
        <>
            <div className="blackout settings__blackout" onClick={closeSettings}/>
            <div className="settings">
                <div className="settings__header">Настройки</div>
                <ul>
                    <li>
                            <input type="checkbox"
                                   onChange={toggleSounds}
                                   checked={sounds}
                                   id="musicCheckbox" className="musicCheckbox" />
                            <label
                                htmlFor="musicCheckbox">
                                <div className="settings__icon settings__music"/>
                                Звук
                            </label>
                    </li>
                    <li>
                        <div className="settings__icon settings__share"/>
                        <p className="settings__name">Поделиться ВК</p>
                    </li>
                </ul>
            </div>
        </>

    );
}

export default connect((store)=>({
    sounds: selectSounds(store)
}), (dispatch)=>({
    closeSettings: () => dispatch(toggleSettings()),
    toggleSounds: () => dispatch(toggleSounds())
}))(Settings);
