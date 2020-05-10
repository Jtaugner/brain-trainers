import React from 'react';
import './randomMenuGame.scss'
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {selectProgress} from "../../store/selectors";
import {changeRandomGame, chooseGame} from "../../store/ac";

function RandomMenuGame(props) {
    const {chooseGame, progress, getRandomGame} = props;
    const allRandGames = [];
    Object.keys(progress).forEach((key)=>{
        if(progress[key].gameOpen){
            allRandGames.push(key);
        }
    });
    const getRandGame = () => {
        const game = allRandGames
            [Math.floor(Math.random()*allRandGames.length)];
        console.log(allRandGames);
        console.log(game);
        chooseGame(game);
        getRandomGame();
    };
    return (
        <Link to={'/difficult'} onClick={getRandGame}>
            <div className={'menu-game'}
                 onClick={() => {
                     console.log('start rand game');
                 }}
            >
                <div
                    className={'menu-game__icon brain'}/>
                <div className="menu-game__additional">
                    <div className="game-name">Случайная игра</div>
                </div>
            </div>
        </Link>
    );
}

export default connect(
    (store) => ({
        progress: selectProgress(store)
    }),
    (dispatch, ownProps) => ({
        chooseGame: (game) => dispatch(chooseGame(game)),
        getRandomGame: ()=> dispatch(changeRandomGame(true))
    })
)(RandomMenuGame);
