import React, {Component, useState} from 'react';
import './shultzGame.scss'
import {connect} from "react-redux";
import {selectDifficult, selectGame, selectGameLevel} from "../../../store/selectors";
import {getLevelsInfoByGameDiffAndLevel} from "../../../gamesCommon";

let interval;

function setTimer(timer, changeTimer, getLose) {
    interval = setInterval(() => {
        console.log('interval secs');
        if (timer - 1 < 0) {
            console.log('interval');
            getLose();
            clearInterval(interval);
        } else {
            changeTimer(timer - 1);
        }
    }, 1000)
}

class ShultzGame extends Component {
    width = this.props.levelInfo.width;
    lastNumber = this.width * this.width;
    interval;
    setTimer(){
        interval = setInterval(()=>{
            console.log('interval');
            if(this.state.timer - 1 < 0){
                clearInterval(interval);
                this.props.getLose();
            }else{
                this.setState((state) => {
                    return {timer: state.timer - 1};
                });
            }
        }, 1000)
    }
    componentWillUnmount() {
        clearInterval(interval);
    }

    constructor(props) {
        super(props);
        this.state = {
            nowNumber: 1,
            badAnswer: -1,
            goodAnswer: -1,
            isWin: false,
            timer: props.levelInfo.sec,
            table: createShultz(props.levelInfo.width)
        };
        if(this.state.timer){
            this.setTimer();
        }
    }

    testNumber(num, i, q) {
        if (this.state.isWin) return;
        if (num === this.state.nowNumber) {
            if (num === this.lastNumber) {
                this.props.getWin();
                this.setState({
                    isWin: true
                });
            } else {
                this.setState((state) => {
                    return {nowNumber: state.nowNumber + 1};
                });
            }
            this.setState({
                goodAnswer: i + '-' + q
            });
        } else {
            this.setState({
                badAnswer: i + '-' + q
            });
        }
        setTimeout(() => {
            this.setState({
                goodAnswer: -1,
                badAnswer: -1
            });
        }, 100)
    };

    render() {
        const tableSize = (window.innerWidth > 650) ? 650 : window.innerWidth - 5;
        return (
            <div className={'shultz-game ' + ('shultz-width-' + this.width)}
            >
                <div className="shultz-game__flex">
                    <div className="next-num">Следующее: {this.state.nowNumber}</div>
                    {this.state.timer ? <div className="timer">Время: {this.state.timer}</div> : ''}
                </div>

                <table
                    style={{width: tableSize, height: tableSize}}
                >
                    <tbody>
                    {
                        this.state.table.map((arr, i) =>
                            <tr key={'shultz-tr' + i}>
                                {arr.map((num, q) =>
                                    <td key={'shultz-td' + q}
                                        className={this.state.goodAnswer === (i + '-' + q) ? 'right-answer' :
                                            this.state.badAnswer === (i + '-' + q) ? 'wrong-answer' : ''}
                                        onMouseUp={() => {
                                            console.log("ds");
                                            this.testNumber(num, i, q)
                                        }}
                                        onTouchEnd={() => {
                                            this.testNumber(num, i, q)
                                        }}
                                    >{num}</td>
                                )}
                            </tr>
                        )
                    }
                    </tbody>

                </table>
            </div>

        );
    }

}

export default connect(
    (store) => ({
        levelInfo:
            getLevelsInfoByGameDiffAndLevel(
                selectGame(store),
                selectDifficult(store),
                selectGameLevel(store)
            ),
    })
)(ShultzGame);


function shuffle(arr) {
    let j, temp;
    for (let i = arr.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
    }
    return arr;
}

function getAndDeleteRandElement(arr) {
    const rand = Math.floor(Math.random() * arr.length);
    let el = arr[rand];
    arr.splice(rand, 1);
    return el;
}

function createShultz(width) {
    const randNumbers = [];
    for (let i = 0; i < width * width; i++) {
        randNumbers.push(i + 1);
    }
    shuffle(randNumbers);
    let table = [];
    for (let i = 0; i < width; i++) {
        table.push([]);
        for (let q = 0; q < width; q++) {
            table[i].push(getAndDeleteRandElement(randNumbers));
        }
    }
    return table;
}