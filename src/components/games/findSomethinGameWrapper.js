import React from 'react';
import './findSomethinGameWrapper.scss'
import GameWrapper from "./gameWrapper";

let timeout;

class FindSomethingGameWrapper extends GameWrapper {
    rounds = this.props.levelInfo.rounds;
    rows = this.props.levelInfo.rows;
    amount = this.props.levelInfo.amount;
    useSmallLetters = this.props.difficult > 0;
    answers = [];
    mistakes;


    componentWillUnmount() {
        clearTimeout(timeout);
    }

    constructor(props) {
        super(props);
        const {field, answers, answerLetter} = this.props.createField(this.rows, this.amount, this.useSmallLetters);
        this.answers = answers;
        this.state = {
            round: 1,
            answerLetter,
            timer: props.levelInfo.sec,
            field,
            rightLetters: [],
            wrongLetter: -1
        };
        console.log(field);
        if (this.state.timer) this.setTimer();
    }

    startRound() {
        this.mistakes = 0;
        timeout = setTimeout(() => {
            const {field, answers, answerLetter} = this.props.createField(this.rows, this.amount, this.useSmallLetters);
            let round = this.state.round;
            if(round === this.rounds) return this.props.getWin();
            this.answers = answers;
            this.setState({
                answerLetter,
                field,
                rightLetters: [],
                round: round + 1
            });
        }, 300);
    }

    chooseLetter(index) {
        if (this.answers.includes(index)) {
            const rightLetters = this.state.rightLetters;
            rightLetters.push(index);
            this.setState({
                rightLetters
            });
            if (rightLetters.length === this.answers.length) {
                this.startRound();
            }
        } else {
            this.mistakes++;
            if (this.props.difficult > 0 && this.mistakes >= 3) {
                return this.props.getLose('Вы слишком много раз нажали на неверную букву')
            }
            this.setState({
                wrongLetter: index
            });
            timeout = setTimeout(() => {
                this.setState({
                    wrongLetter: -1
                })
            }, 200)
        }
    }


    render() {
        return (
            <div className={'findSomething-game ' + (this.props.mainClass ? this.props.mainClass : '')}>
                <div className="game-page__flex">
                    <div className="game-page__rounds">Этап: {this.state.round}/{this.props.levelInfo.rounds}</div>
                    {this.state.timer ? <div className="timer">Время: {this.state.timer}</div> : ''}
                </div>
                <div className="letterToFind">
                    {
                        this.props.findLetter ? 'Поиск: ' + this.state.answerLetter : ''
                    }
                </div>
                <div className="findSomething-game__numbers">
                    {
                        this.state.field.map((letter, index) =>
                            <div
                                className={"findSomething-game__numbers__num "
                                + (this.state.wrongLetter === index ? 'wrong-letter' : '')
                                }
                                key={'num' + index}
                                onClick={() => this.chooseLetter(index)}

                            >
                                {this.state.rightLetters.includes(index) ? '' :
                                    this.props.findLetter ? letter :
                                    <>
                                        <p>{letter[0]}</p>
                                        <p>{letter[1]}</p>
                                    </>

                                }
                            </div>
                        )
                    }
                </div>
            </div>

        );
    }

}

export default FindSomethingGameWrapper;

