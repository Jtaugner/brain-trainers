import React from 'react';
import './chetGame.scss'
import GameWrapper from "../gameWrapper";

let timeout;

class ChetGame extends GameWrapper {
    rounds = this.props.levelInfo.rounds;
    rows = this.props.levelInfo.rows;
    numberLength = this.props.levelInfo.numberLength;
    amount = this.props.levelInfo.amount;
    answers;
    mistakes = 0;


    componentWillUnmount() {
        clearTimeout(timeout);
    }

    constructor(props) {
        super(props);
        const {field, answers} = createField(this.rows, this.amount, this.numberLength);
        this.answers = answers;
        this.state = {
            round: 1,
            timer: props.levelInfo.sec,
            field,
            rightNumbers: [],
            wrongNumber: -1
        };
        if (this.state.timer) {
            this.setTimer();
        }
    }

    startRound() {
        this.mistakes = 0;
        timeout = setTimeout(() => {
            const {field, answers} = createField(this.rows, this.amount, this.numberLength);
            let round = this.state.round;
            if(round === this.rounds){
                return this.props.getWin();
            }
            this.answers = answers;
            this.setState({
                field,
                rightNumbers: [],
                round: round + 1
            });
        }, 300);
    }

    chooseNumber(index) {
        if (this.answers.includes(index)) {
            console.log(this.answers);
            const rightNumbers = this.state.rightNumbers;
            rightNumbers.push(index);
            this.setState({
                rightNumbers
            });
            //Победа
            if (rightNumbers.length === this.answers.length) {
                this.startRound();
            }
        } else {
            this.mistakes++;
            this.setState({
                wrongNumber: index
            });
            timeout = setTimeout(() => {
                this.setState({
                    wrongNumber: -1
                });
                if (this.props.difficult > 0 && this.mistakes >= 3) {
                    return this.props.getLose('Вы слишком много раз выбрали неверное число')
                }
            }, 200)
        }
    }


    render() {
        return (
            <div className={'chet-game ' + ('chet-length' + this.numberLength)}>
                <div className="game-page__flex">
                    <div className="game-page__rounds">Этап: {this.state.round}/{this.props.levelInfo.rounds}</div>
                    {this.state.timer ? <div className="timer">Время: {this.state.timer}</div> : ''}
                </div>
                <div className="findSomething-game__numbers">
                    {
                        this.state.field.map((num, index) =>
                            <div
                                className={"findSomething-game__numbers__num "
                                + (this.state.rightNumbers.includes(index) ? 'right-number' :
                                    this.state.wrongNumber === index ? 'wrong-number' : '')
                                }
                                key={'num' + index}
                                onClick={() => this.chooseNumber(index)}

                            >
                                {num}
                            </div>
                        )
                    }
                </div>
            </div>

        );
    }

}

export default ChetGame;

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const chetNumbers = [2, 4, 6, 8];
const notChetNumbers = [1, 3, 5, 7, 9];

function getRandNum(numbers) {
    return numbers[Math.floor(Math.random() * numbers.length)];
}

function createStringNumber(length, isChet) {
    let string = '';
    string += getRandNum(numbers);
    while (string.length + 1 < length) {
        string += getRandNum(numbers);
    }
    if (isChet) {
        string += getRandNum(chetNumbers);
    } else {
        string += getRandNum(notChetNumbers);
    }
    return string;
}

function createField(height, chetAmount, numberLength) {
    const field = [];
    const chetPlaces = [];
    let length = height * 4;
    while (chetPlaces.length < chetAmount) {
        const randPlace = Math.floor(Math.random() * length);
        if (!chetPlaces.includes(randPlace)) chetPlaces.push(randPlace)
    }
    for (let i = 0; i < length; i++) {
        let num;
        if (chetPlaces.includes(i)) {
            num = createStringNumber(numberLength, true)
        } else {
            num = createStringNumber(numberLength, false)
        }
        field.push(num)
    }
    return {field, answers: chetPlaces};
}