import React from 'react';
import './mainPage.scss'
import {connect} from "react-redux";
import PlayerLevel from "../playerLevel/playerLevel";
import Premium from "../premium/premium";
import Money from "../money/money";
import TopMenu from "../topMenu/topMenu";
import MenuGame from "../menuGame";
import {gamesNames} from "../../projectCommon";
import Gift from "../gift";


function MainPage(props) {
    const {} = props;
    return (
        <div className={'mainPage'}>
            <TopMenu>
                <PlayerLevel />
                <Premium/>
                <Money/>
            </TopMenu>
            <div className="top-tip">
                <div className="trainers">Упражнения</div>
                <Gift/>
            </div>

            {gamesNames.map((arr)=>
                <MenuGame key={arr[1]}
                          name={arr[0]} gameClass={arr[1]}/>
            )
            }
        </div>
    );
}

export default connect((store, ownProps) => ({


    })
)(MainPage);
