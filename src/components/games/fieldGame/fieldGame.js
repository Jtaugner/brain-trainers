import React from 'react';
import './fieldGame.scss'
import GameWrapper from "../gameWrapper";
import GameProgressLine from "../gameProgressLine/gameProgressLine";
let interval;
let timeout;
let arr_RU = ['А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж', 'З', 'И', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ь', 'Ы', 'Ъ', 'Э', 'Ю', 'Я'];
function getRandomLetter(notThatLetter) {
    let arr = arr_RU;
    if(notThatLetter){
        arr = [...arr_RU];
        arr.splice(arr.indexOf(notThatLetter), 1);
    }
    let randLetter = arr[Math.floor(Math.random()*arr.length)];
    return randLetter;
}

class FieldGame extends GameWrapper {
    rounds = this.props.levelInfo.rounds;
    time = this.props.levelInfo.time;
    rows = this.props.levelInfo.rows;
    cols = this.props.levelInfo.cols;
    isClicked = false;
    gameStart = false;
    mistakes = getMistakesArray(this.rounds, this.props.levelInfo.mistakes);

    allClickedMistakes = 0;
    rightClickedMistakes = 0;

    wasMistake = false;

    lettersForChange = [
      [0, Math.floor(this.cols/2)],
      [Math.floor(this.rows/2), 0],
      [Math.floor(this.rows/2), this.cols-1],
      [this.rows-1, Math.floor(this.cols/2)]
    ];
    doneWords = [];


    componentWillUnmount() {
        clearInterval(interval);
        clearTimeout(timeout);
    }

    constructor(props) {
        super(props);
        let field = createField(this.rows, this.cols);
        this.lettersForChange.forEach((a)=>{
            field[a[0]][a[1]] = '.';
        });
        this.state = {
            field,
            round: 0
        };
        this.startGame();
    }
    mistake(){
        if(!this.gameStart || this.isClicked) return;
        this.allClickedMistakes++;
        this.isClicked = true;
        if(this.wasMistake){
            this.rightClickedMistakes++;
        }
    }
    startGame(){
        timeout = setTimeout(()=>{
            this.gameStart = true;
            this.changeLetters();
            interval = setInterval(()=>{
                this.gameStart = true;
                if(this.state.round === this.rounds){
                    //Конец игры
                    this.end();
                    clearInterval(interval);
                    return;
                }
                this.changeLetters();
            }, this.time)
        }, 1000);

    }
    end(){
        const coefByDiff = [0.6, 0.8, 1, 1];
        let coef = coefByDiff[this.props.difficult];
        let allMistakes = this.mistakes.length;
        let gameCoef = this.rightClickedMistakes / allMistakes;
        let allClickedCoef = this.allClickedMistakes - this.rightClickedMistakes;
        if(gameCoef >= coef){
            if(
                (this.props.difficult === 0 && allClickedCoef <= 3) ||
                (this.props.difficult === 1 && allClickedCoef <= 2) ||
                (this.props.difficult >= 2 && allClickedCoef <= 1)

                ){
                this.props.getWin();
            }else{
                this.props.getLose('Вы слишком много раз ответили неправильно (' +
                    (this.allClickedMistakes-this.rightClickedMistakes)+')');
            }
        }else{
            this.props.getLose('Вы не набрали нужное количество верных ответов (' +this.rightClickedMistakes+ '/' + allMistakes+')');
        }
    }
    changeLetters(){
        let field = [...this.state.field];
        let letter = getRandomLetter();
        let randPlace, mistakeLetter;
        if(this.mistakes.includes(this.state.round)){
            //Дать с ошибкой
             randPlace = Math.floor(Math.random()*this.lettersForChange.length);
             mistakeLetter = getRandomLetter(letter);
             this.wasMistake = true;
        }else{
            this.wasMistake = false;
        }
        this.isClicked = false;
        this.lettersForChange.forEach((a, index)=>{
            if(mistakeLetter && index === randPlace){
                field[a[0]][a[1]] = mistakeLetter;
            }else{
                field[a[0]][a[1]] = letter;
            }

        });
        this.setState((state)=>({
            field,
            round: state.round + 1

        }))
    }

    render() {
        let cols = this.cols > this.rows ? this.cols : this.rows;
        return (
             <div className={'field-game field-game-cols'+cols}>
                    <GameProgressLine round={this.state.round} rounds={this.rounds}/>
                 <table>
                     <tbody>
                 {
                     this.state.field.map((row, index)=>
                         <tr key={'row'+index}>
                             {row.map((letter, index2)=>
                                 <td key={'col'+index2+letter}>{letter}</td>
                             )}
                         </tr>
                     )
                 }
                     </tbody>
                 </table>
                 <button
                     className="field-game__mistake-button"
                     onClick={()=>this.mistake()}
                 >Ошибка</button>
            </div>

        );
    }

}

export default FieldGame;

function getMistakesArray(rounds, mistakes) {
    let arrMistakes = [];
    while(arrMistakes.length < mistakes){
        let rand = Math.floor(Math.random() * rounds);
        if(!arrMistakes.includes(rand)) arrMistakes.push(rand);
    }
    return arrMistakes;
}

function createField(rows, cols) {
    let arr = [];
    for(let i = 0; i < rows; i++){
        arr.push([]);
        for(let q = 0; q < cols; q++){
            arr[i].push(getRandomLetter())
        }
    }
    return arr;
}
