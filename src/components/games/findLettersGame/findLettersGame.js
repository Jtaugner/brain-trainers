import React from 'react';
import './findLettersGame.scss'
import GameWrapper from "../gameWrapper";

let timeout;

class FindLettersGame extends GameWrapper {
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
        const {field, answers, answerLetter} = createFieldLetters(this.rows, this.amount, this.useSmallLetters);
        this.answers = answers;
        this.state = {
            round: 1,
            answerLetter,
            timer: props.levelInfo.sec,
            field,
            rightLetters: [],
            wrongLetter: -1
        };
        if (this.state.timer) this.setTimer();
    }

    startRound() {
        this.mistakes = 0;
        timeout = setTimeout(() => {
            const {field, answers, answerLetter} = createFieldLetters(this.rows, this.amount, this.useSmallLetters);
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
            <div className={'findLetter-game'}>
                <div className="game-page__flex">
                    <div className="game-page__rounds">Этап: {this.state.round}/{this.props.levelInfo.rounds}</div>
                    {this.state.timer ? <div className="timer">Время: {this.state.timer}</div> : ''}
                </div>
                <div className="letterToFind">Поиск: {this.state.answerLetter}</div>
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
                                {this.state.rightLetters.includes(index) ? '' :  letter}
                            </div>
                        )
                    }
                </div>
            </div>

        );
    }

}

export default FindLettersGame;

let arr_ru = ['а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ь', 'ы', 'ъ', 'э', 'ю', 'я'];
let arr_RU = ['А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж', 'З', 'И', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ь', 'Ы', 'Ъ', 'Э', 'Ю', 'Я'];
function getRandLetter(useSmallWords) {
    if(useSmallWords && Math.random() > 0.5) {
        return arr_ru[Math.floor(Math.random() * arr_ru.length)];
    }
    return arr_RU[Math.floor(Math.random() * arr_RU.length)];
}
function createFieldLetters(height, amount, useSmallWords) {
    const field = [];
    const lettersPlaces = [];
    let length = height * 4;
    while (lettersPlaces.length < amount) {
        const randPlace = Math.floor(Math.random() * length);
        if (!lettersPlaces.includes(randPlace)) lettersPlaces.push(randPlace)
    }
    let answerLetter = getRandLetter(useSmallWords);
    let index = 0;
    while(field.length < length){
        let randLetter = getRandLetter(useSmallWords);
        if(lettersPlaces.includes(index)){
            field.push(answerLetter);
            index++;
        }else{
            if(answerLetter !== randLetter){
                index++;
                field.push(randLetter);
            }
        }


    }
    return {field, answers: lettersPlaces, answerLetter};

}