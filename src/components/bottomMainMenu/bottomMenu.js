import React from 'react';
import BottomMenu from "../bottomMenu";
import HomeLink from "../bottomMenu/homeLink";
import CartLink from "../bottomMenu/cartLink";
import SettingsLink from "../bottomMenu/settingsLink";

function BottomMainMenu() {
    return (
        <BottomMenu>
            <HomeLink/>
            <CartLink/>
            <SettingsLink/>
        </BottomMenu>
    );
}

export default BottomMainMenu;
