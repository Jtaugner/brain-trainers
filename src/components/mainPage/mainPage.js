import React, {useState} from 'react';
import './mainPage.scss'
import {connect} from "react-redux";
import PlayerLevel from "../playerLevel/playerLevel";
import Premium from "../premium/premium";
import Money from "../money/money";
import TopMenu from "../topMenu/topMenu";
import MenuGame from "../menuGame";
import {gamesNames} from "../../projectCommon";
import Gift from "../gift";
import BottomMenu from "../bottomMenu";
import CloseGame from "../close-game";
import {getGameLevelOpenCosts, getGameLevelOpenLevel} from '../../projectCommon'
import BottomMainMenu from "../bottomMainMenu/bottomMenu";
let indexGame = 0;
let gameClass = '';
function MainPage(props) {
    const {} = props;
    const [gameClosed, changeGameClosed] = useState(false);
    return (
        <div className={'mainPage'}>
            <TopMenu>
                <PlayerLevel/>
                <Premium/>
                <Money/>
            </TopMenu>
            <div className="top-tip">
                <div className="trainers">Упражнения</div>
                <Gift/>
            </div>

            {gamesNames.map((arr, index) =>
                <MenuGame key={arr[1]}
                          name={arr[0]}
                          gameClass={arr[1]}
                          onClick={() => {
                              changeGameClosed(true);
                              gameClass = arr[1];
                              indexGame = index;
                                    }
                          }
                />
            )
            }
            {gameClosed ? <CloseGame gameClass={gameClass}
                                            onClick={()=>{console.log('dasd');changeGameClosed(false)}}
                                           money={getGameLevelOpenCosts(indexGame)}
                                           level={getGameLevelOpenLevel(indexGame)}

            /> : ''}
        </div>
    );
}

export default connect((store, ownProps) => ({})
)(MainPage);
