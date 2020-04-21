import React, {useState} from 'react';
import './mainPage.scss'
import {connect} from "react-redux";
import PlayerLevel from "../playerLevel/playerLevel";
import Premium from "../premium/premium";
import Money from "../money/money";
import TopMenu from "../topMenu/topMenu";
import MenuGameLevel from "../menuGameLevel/menuGameLevel";
import {gamesNames} from "../../projectCommon";
import Gift from "../gift";
import CloseGame from "../close-game";
import {getGameLevelOpenCosts, getGameLevelOpenLevel} from '../../projectCommon'
import RandomMenuGame from '../randomMenuGame/randomMenuGame'
import {chooseGame} from "../../store/ac";
import BottomMainMenu from "../bottomMainMenu/bottomMenu";
let indexGame = 0;
let gamesClosedName = [];
function MainPage(props) {
    const {chooseGame} = props;
    const [gameClosed, changeGameClosed] = useState(false);
    return (
        <div className={'mainPage'}>
            <TopMenu>
                <PlayerLevel/>
                <Premium/>
                <Money/>
            </TopMenu>
            <div className="top-tip">
                <div className="top-tip__name">Упражнения</div>
                <Gift/>
            </div>
            <RandomMenuGame />
            {Object.keys(gamesNames).map((key, index) =>
                <MenuGameLevel key={key}
                          name={gamesNames[key]}
                          gameClass={key}
                          onClick={() => {
                              changeGameClosed(true);
                              gamesClosedName = key;
                              indexGame = index;
                                    }
                          }
                />
            )
            }
            {gameClosed ? <CloseGame gameClass={gamesClosedName}
                                     name={gamesNames[gamesClosedName]}
                                            onClick={()=>{changeGameClosed(false)}}
                                           money={getGameLevelOpenCosts(indexGame)}
                                           level={getGameLevelOpenLevel(indexGame)}

            /> : ''}
            <BottomMainMenu/>
        </div>
    );
}

export default connect((store, ownProps) => ({})
)(MainPage);
