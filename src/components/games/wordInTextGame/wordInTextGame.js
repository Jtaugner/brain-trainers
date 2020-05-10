import React from 'react';
import './wordInTextGame.scss'
import GameWrapper from "../gameWrapper";
let timeout;
let timeoutGame;

class WordInTextGame extends GameWrapper {
    words = this.props.levelInfo.text.split(' ');
    rounds = this.props.levelInfo.rounds;
    doneWords = [];
    componentWillUnmount() {
        clearTimeout(timeoutGame);
        clearTimeout(timeout);
        this.clearTimer();
    }

    constructor(props) {
        super(props);
        this.state = {
            nowWord: deleteNonLetters(getWord(this.words)),
            rightWordIndex: -1,
            wrongWordIndex: -1,
            rightAnswers: 0,
            timer: props.levelInfo.sec
        };
        if(this.state.timer){
            this.setTimer();
        }
    }

    getRandWord(){
        let newWord = deleteNonLetters(getWord(this.words));
        if(this.doneWords.includes(newWord) || newWord === '' || newWord === '-'){
            this.getRandWord();
        }else{
            this.doneWords.push(newWord);
            this.setState({
                nowWord: newWord
            });
        }

    }
    testWord(e){
        if(e.target && e.target.tagName === 'SPAN'){
            let index = Number(e.target.getAttribute('data-index'));
            let rightAnswers = this.state.rightAnswers;
            let rightAnswer = false;
            if(isAnswerRight(this.state.nowWord, e.target.innerText)){
                rightAnswers++;
                rightAnswer = true;
                this.setState({rightWordIndex: index, rightAnswers})
            }else{
                this.setState({wrongWordIndex: index})
            }
            if(rightAnswers === this.props.levelInfo.rounds){
                timeout = setTimeout(()=>{
                    this.props.getWin();
                }, 200);
            }else{
                timeout = setTimeout(()=>{
                    if(rightAnswer) this.getRandWord();
                    this.setState({
                        wrongWordIndex: -1,
                        rightWordIndex: -1
                    });
                }, 200);
            }


        }
    }



    render() {
        return (
             <div className={'wordInText-game'}>
                 <div className="game-page__flex">
                     <div className="game-page__rounds">Слово: {this.state.rightAnswers}/{this.props.levelInfo.rounds}</div>
                     {this.state.timer ? <div className="timer">Время: {this.state.timer}</div> : ''}
                 </div>

                 <div className="wordInText-game__word">{this.state.nowWord.toLowerCase()}</div>
                 <div
                      className="wordInText-game__text"
                      onClick={(e)=>{this.testWord(e)}}
                 >
                     {
                         this.words.map((word, index)=>{
                             return <span
                                 key={'w' + index}
                                 data-index={index}
                                    className={this.state.rightWordIndex === index
                                            ? 'right-word' : this.state.wrongWordIndex === index
                                            ? 'wrong-word' : ''
                                    }
                                >{word} </span>
                         })
                     }
                 </div>

            </div>

        );
    }

}

export default WordInTextGame;
function getWord(words) {
   let word = deleteNonLetters(words[Math.floor(Math.random()*words.length)]);
   console.log(word);
   if(word.length >= 4){
       return word;
   }else{
       return getWord(words);
   }
}
function deleteNonLetters(word){
    return word.replace(/[.|,|\s|'|"|;|?|!|«|»]/g, '')
}
function isAnswerRight(str1, str2){
    str1 = deleteNonLetters(str1).toLowerCase();
    str2 = deleteNonLetters(str2).toLowerCase();
    return str1 === str2;
}