import React from 'react';
import './findWordGame.scss'
import GameWrapper from "../gameWrapper";
const classNames = require('classnames');
let timeout;

class FindWordGame extends GameWrapper {
    selectedMode = false;
    componentWillUnmount() {
        clearTimeout(timeout);
    }

    constructor(props) {
        super(props);
        const [words, answers] =
            getFillWordAndPlacesWords(this.props.levelInfo.words, this.props.levelInfo.height);
        this.state = {
            arrWords: words,
            rightAnswersWords: answers,
            answersWords: [],
            doneCells: [],
            doneWords: [],
            selectedCells: [],
            timer: props.levelInfo.sec,
            isWin: false
        };
        if(this.state.timer){
            this.setTimer();
        }
    }

    testWord() {
        let word = '';
        let selectedCells = this.state.selectedCells;
        for(let i = 0; i < selectedCells.length; i++){
            let xy = selectedCells[i].split('-');
            let x = Number(xy[0]);
            let y = Number(xy[1]);
            word += this.state.arrWords[x][y];
        }
        word = word.toLowerCase();
        console.log(word);
        if (this.props.levelInfo.words.includes(word)) {
            let places = this.state.rightAnswersWords[word];
            for (let i = 0; i < selectedCells.length; i++) {
                this.setState({selectedCells: []});
                this.selectedMode = false;
                if(places[i] !== selectedCells[i]) return false;
            }
            let doneCells = [...this.state.doneCells, ...selectedCells];
            let doneWords = [...this.state.doneWords];
            doneWords.push(word);
            if(doneWords.length === this.props.levelInfo.words.length){
                timeout = setTimeout(()=>{
                    this.props.getWin();
                }, 500)
            }
            this.setState((state)=>({
                doneWords,
                doneCells
            }));
        }
        this.setState({selectedCells: []});
        this.selectedMode = false;
    };

    selectFirstCell(i, j) {
        const cell = i + '-' + j;
        if (this.state.doneCells.includes(cell)) return;
        if (!this.selectedMode) {
            this.addSelectedCell(i, j);
            this.selectedMode = true;
        }
    }

    selectFirstCellPhone(e, i, j) {
        if (e.touches.length === 1) {
            if (e.cancelable) {
                e.preventDefault();
            }
            this.selectFirstCell(i, j);
        }
    }
    addSelectedCell(i, j){
        let selectedCells = [...this.state.selectedCells];
        let cell = i + '-' + j;
        if(!selectedCells.includes(cell)){
            selectedCells.push(cell);
            this.setState({
                selectedCells
            })
        }
    }

    selectNextCell(i, j){
        const cell = i + '-' + j;
        if(this.state.doneCells.includes(cell)) return;
        if(this.selectedMode){
            let selectedCells = [...this.state.selectedCells];
            if (selectedCells.includes(cell)){
                let indexEl = selectedCells.indexOf(cell);
                if(indexEl !== selectedCells.length -1){
                    selectedCells.splice(indexEl+1, selectedCells.length-indexEl-1);
                    this.setState({
                        selectedCells
                    });
                }
            }else{
                let xy = selectedCells[selectedCells.length-1].split('-');
                let x = Number(xy[0]);
                let y = Number(xy[1]);
                if((i - 1 === x && j === y) ||
                    (i + 1 === x && j === y) ||
                    (j + 1 === y && i === x) ||
                    (j - 1 === y && i === x) )
                {
                    this.addSelectedCell(i, j)
                }
            }

        }
    }
    selectNextCellPhone(e){
        if(e.touches.length === 1){
            if(e.cancelable){
                e.preventDefault();
            }
            let x=e.touches[0].clientX;
            let y=e.touches[0].clientY;
            let el = document.elementFromPoint(x, y);
            if(el && el.classList.contains('findWord__cell')){
                el.click();
            }

        }
    }

    finishSelectCells() {
        console.log(this.state.selectedCells);
        this.testWord();
    }

    render() {
        return (
             <div className={'findWord-game'} onTouchEnd={()=>this.finishSelectCells()} onMouseUp={()=>this.finishSelectCells()}>
                 <div className="game-page__flex">
                     {this.state.timer ? <div className="timer">Время: {this.state.timer}</div> : ''}
                 </div>
                 <div className="findWord-game__done-words">
                     {this.props.levelInfo.words.map((word)=>{
                         return <span
                             key={word}
                         className={this.state.doneWords.includes(word) ? 'findWords__done-word' : ''}
                         >{word} </span>
                     })}
                 </div>
                <table className="findWord__field">
                    <tbody>
                    {
                        this.state.arrWords.map((row, rowIndex) =>
                            <tr key={'row' + rowIndex}>
                                {row.map((letter, colIndex) =>
                                    <td
                                        key={'col'+ rowIndex+'-'+colIndex}
                                        className={
                                            classNames({
                                                'findWord__cell': true,
                                                'findWord__cell_selected': this.state.selectedCells.includes(rowIndex + '-' + colIndex),
                                                'findWord__cell_done': this.state.doneCells.includes(rowIndex + '-' + colIndex)
                                            })
                                        }

                                        onMouseDown={()=>this.selectFirstCell(rowIndex, colIndex)}
                                        onTouchStart={(e)=>this.selectFirstCellPhone(e, rowIndex, colIndex)}

                                        onMouseOver={()=>this.selectNextCell(rowIndex, colIndex)}
                                        onTouchMove={(e)=>this.selectNextCellPhone(e)}
                                        onClick={()=>this.addSelectedCell(rowIndex, colIndex)}
                                    >
                                        {letter}
                                    </td>
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

export default FindWordGame;

let arr_RU = ['А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж', 'З', 'И', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ь', 'Ы', 'Ъ', 'Э', 'Ю', 'Я'];

function getFillWordAndPlacesWords(wordArray, height) {
    let fillWord = [];
    for (let i = 0; i < height; i++) {
        fillWord[i] = [];
        for (let j = 0; j < 5; j++) {
            fillWord[i].push(0);
        }
    }
    let allPlacesWords = {};
    for (let i = 0; i < wordArray.length; i++) {
        let arr = getWordsInArrAndPlaces(wordArray[i], fillWord);
        fillWord = arr[0];
        allPlacesWords[wordArray[i]] = arr[1];
    }
    //Заполнить буквы вокруг букв слов
    let letters = [];
    for (let i = 0; i < fillWord.length; i++) {
        for (let j = 0; j < fillWord[0].length; j++) {
            if (fillWord[i][j] !== 0) {
                let arr_RU = ['А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж', 'З', 'И', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ь', 'Ы', 'Ъ', 'Э', 'Ю', 'Я'];
                if (i !== 0) arr_RU.splice(arr_RU.indexOf(fillWord[i - 1][j]), 1);
                if (i !== fillWord.length - 1) arr_RU.splice(arr_RU.indexOf(fillWord[i + 1][j]), 1);
                if (j !== 0) arr_RU.splice(arr_RU.indexOf(fillWord[i][j - 1]), 1);
                if (j !== fillWord[0].length - 1) arr_RU.splice(arr_RU.indexOf(fillWord[i][j + 1]), 1);


                if (i !== 0 && fillWord[i - 1][j] === 0) {
                    letters.push([i - 1, j, arr_RU[Math.floor(Math.random() * arr_RU.length)].toUpperCase()]);
                }
                if (i !== fillWord.length - 1 && fillWord[i + 1][j] === 0) {
                    letters.push([i + 1, j, arr_RU[Math.floor(Math.random() * arr_RU.length)].toUpperCase()]);
                }
                if (j !== fillWord[0].length - 1 && fillWord[i][j + 1] === 0) {
                    letters.push([i, j + 1, arr_RU[Math.floor(Math.random() * arr_RU.length)].toUpperCase()]);
                }
                if (j !== 0 && fillWord[i][j - 1] === 0) {
                    letters.push([i, j - 1, arr_RU[Math.floor(Math.random() * arr_RU.length)].toUpperCase()]);
                }
            }
        }
    }
    for (let i = 0; i < letters.length; i++) {
        fillWord[letters[i][0]][letters[i][1]] = letters[i][2];
    }
    //Заполнить оставшиеся клетки случайными буквами
    for (let i = 0; i < fillWord.length; i++) {
        for (let j = 0; j < fillWord[0].length; j++) {
            if (fillWord[i][j] === 0) {
                fillWord[i][j] = arr_RU[Math.floor(Math.random() * arr_RU.length)].toUpperCase();
            }
        }
    }
    return [fillWord, allPlacesWords];
}

function getWordsInArrAndPlaces(word, arr) {
    let emptyCells = getAllEmptyCells(arr);
    word = word.toUpperCase();
    let copyArr = [];
    for (let i = 0; i < arr.length; i++) {
        copyArr.push(arr[i].slice(0));
    }
    let startCell = emptyCells[Math.floor(Math.random() * emptyCells.length)];
    //Выбираем направление слова
    // 0 - вверх; 1 - вправо; 2 - вниз; 3 - влево
    let thatRow = startCell[0];
    let thatCol = startCell[1];

    copyArr[thatRow][thatCol] = word[0];
    let placesLetters = [];
    placesLetters.push(thatRow + '-' + thatCol);
    for (let i = 1; i < word.length; i++) {
        let directions = [0, 1, 2, 3];
        let isLetterInCell = false;
        for (let q = 0; q < 4; q++) {
            let rand = Math.floor(Math.random() * directions.length);
            let randDirection = directions[rand];
            directions.splice(rand, 1);
            if (randDirection === 0) {
                if (thatRow !== 0 && copyArr[thatRow - 1][thatCol] === 0) {
                    copyArr[thatRow - 1][thatCol] = word[i];
                    thatRow--;
                    isLetterInCell = true;
                    break;
                }
            } else if (randDirection === 1) {
                if ((thatCol !== copyArr[0].length - 1) && copyArr[thatRow][thatCol + 1] === 0) {
                    copyArr[thatRow][thatCol + 1] = word[i];
                    thatCol++;
                    isLetterInCell = true;
                    break;
                }
            } else if (randDirection === 2) {
                if ((thatRow !== copyArr.length - 1) && copyArr[thatRow + 1][thatCol] === 0) {
                    copyArr[thatRow + 1][thatCol] = word[i];
                    thatRow++;
                    isLetterInCell = true;
                    break;
                }
            } else {
                if ((thatCol !== 0) && copyArr[thatRow][thatCol - 1] === 0) {
                    copyArr[thatRow][thatCol - 1] = word[i];
                    thatCol--;
                    isLetterInCell = true;
                    break;
                }
            }
        }
        placesLetters.push(thatRow + '-' + thatCol);
        if (!isLetterInCell) {
            return getWordsInArrAndPlaces(word, arr);
        }
    }
    return [copyArr, placesLetters];
}

function getAllEmptyCells(arr) {
    //Получить массив незанятых ячеек (нет буквы)
    let emptyCells = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[0].length; j++) {
            if (arr[i][j] === 0) {
                emptyCells.push([i, j]);
            }
        }
    }
    return emptyCells;
}