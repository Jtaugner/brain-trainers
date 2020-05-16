import React  from 'react';
import './shultzGame.scss'
import GameWrapper from "../gameWrapper";
import {shuffle} from "../../../projectCommon";

class ShultzGame extends GameWrapper {
    width = this.props.levelInfo.width;
    lastNumber = this.width * this.width;

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
        const shultzClass = 'shultz-game shultz-width-' + this.width;
        return (
            <div className={shultzClass}
            >
                <div className="game-page__flex">
                    <div className="next-num">Следующее: {this.state.nowNumber}</div>
                    {this.state.timer ? <div className="timer">Время: {this.state.timer}</div> : ''}
                </div>

                <table
                >
                    <tbody>
                    {
                        this.state.table.map((arr, i) =>
                            <tr key={'shultz-tr' + i}>
                                {arr.map((num, q) =>
                                    <td key={'shultz-td' + q}
                                        className={this.state.goodAnswer === (i + '-' + q) ? 'right-answer' :
                                            this.state.badAnswer === (i + '-' + q) ? 'wrong-answer' : ''}
                                        onClick={() => {
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

export default ShultzGame;




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