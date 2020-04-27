import React, {Component} from 'react';
import './findWordGame.scss'

let timeout;

const numbers = [0,1,2,3,4,5,6,7,8,9];
class FindWordGame extends Component {
    size = this.props.levelInfo.size;
    componentWillUnmount() {
        clearInterval(timeout);
    }

    constructor(props) {
        super(props);
        let arr = [];
        for(let i = 0; i < this.size; i++){
            arr.push('')
        }
        this.state = {
            arrNumbers: arr,
            enteredNumbers: [],
            showNumber: false,
            isWin: false,
            round: 0,
            showAnswer: false
        };
        this.startGame();
    }

    startGame(){
        timeout = setTimeout(()=>{

        }, this.props.levelInfo.time)
    }
    testWords(){

    };



    render() {
        return (
            <div className={'findWord-game '}>

            </div>

        );
    }

}

export default FindWordGame;

let arr_RU = ['А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж', 'З', 'И', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Э', 'Ю', 'Я'];

function getFillWordAndPlacesWords(wordArray, height) {
    let fillWord = [];
    //12 строк
    for (let i = 0; i < 10; i++) {
        fillWord[i] = [];
        for(let j = 0; j < 5; j++){
            fillWord[i].push(0);
        }
    }
    let allPlacesWords = {};
    for(let i = 0; i < wordArray.length; i++){
        let arr = getWordsInArrAndPlaces(wordArray[i], fillWord);
        fillWord = arr[0];
        allPlacesWords[wordArray[i]] = arr[1];
    }
    //Заполнить буквы вокруг букв слов
    let letters = [];
    for(let i = 0; i < fillWord.length; i++){
        for(let j = 0; j < fillWord[0].length; j++){
            if(fillWord[i][j] !== 0){
                let arr_RU = ['А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж', 'З', 'И', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Э', 'Ю', 'Я'];
                if(i !== 0) arr_RU.splice(arr_RU.indexOf(fillWord[i-1][j]), 1);
                if(i !== fillWord.length-1) arr_RU.splice(arr_RU.indexOf(fillWord[i+1][j]), 1);
                if(j !== 0) arr_RU.splice(arr_RU.indexOf(fillWord[i][j-1]), 1);
                if(j !== fillWord[0].length-1) arr_RU.splice(arr_RU.indexOf(fillWord[i][j+1]), 1);


                if(i !== 0 && fillWord[i-1][j] === 0) {
                    letters.push([i-1, j, arr_RU[Math.floor(Math.random() * arr_RU.length)].toUpperCase()]);
                }
                if(i !== fillWord.length-1 &&fillWord[i+1][j] === 0) {
                    letters.push([i+1, j, arr_RU[Math.floor(Math.random() * arr_RU.length)].toUpperCase()]);
                }
                if(j !== fillWord[0].length-1 && fillWord[i][j+1] === 0) {
                    letters.push([i, j+1, arr_RU[Math.floor(Math.random() * arr_RU.length)].toUpperCase()]);
                }
                if(j !== 0 && fillWord[i][j-1] === 0) {
                    letters.push([i, j-1, arr_RU[Math.floor(Math.random() * arr_RU.length)].toUpperCase()]);
                }
            }
        }
    }
    for(let i = 0; i < letters.length; i++){
        fillWord[letters[i][0]][letters[i][1]] = letters[i][2];
    }
    //Заполнить оставшиеся клетки случайными буквами
    for(let i = 0; i < fillWord.length; i++){
        for(let j = 0; j < fillWord[0].length; j++){
            if(fillWord[i][j] === 0){
                fillWord[i][j] = arr_RU[Math.floor(Math.random() * arr_RU.length)].toUpperCase();
            }
        }
    }
    return [fillWord, allPlacesWords];
}
function getWordsInArrAndPlaces(word, arr){
    let emptyCells = getAllEmptyCells(arr);
    word = word.toUpperCase();
    let copyArr = [];
    for(let i = 0; i < arr.length; i++){
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
    for(let i = 1; i < word.length; i++){
        let directions = [0,1,2,3];
        let isLetterInCell = false;
        for(let q = 0; q < 4; q++){
            let rand = Math.floor(Math.random() * directions.length);
            let randDirection = directions[rand];
            directions.splice(rand, 1);
            if(randDirection === 0){
                if(thatRow !== 0 && copyArr[thatRow-1][thatCol] === 0){
                    copyArr[thatRow-1][thatCol] = word[i];
                    thatRow--;
                    isLetterInCell = true;
                    break;
                }
            }else if(randDirection === 1){
                if((thatCol !== copyArr[0].length - 1) && copyArr[thatRow][thatCol+1] === 0){
                    copyArr[thatRow][thatCol+1] = word[i];
                    thatCol++;
                    isLetterInCell = true;
                    break;
                }
            }
            else if(randDirection === 2){
                if((thatRow !== copyArr.length - 1) && copyArr[thatRow+1][thatCol] === 0){
                    copyArr[thatRow+1][thatCol] = word[i];
                    thatRow++;
                    isLetterInCell = true;
                    break;
                }
            }else{
                if((thatCol !== 0) && copyArr[thatRow][thatCol-1] === 0){
                    copyArr[thatRow][thatCol-1] = word[i];
                    thatCol--;
                    isLetterInCell = true;
                    break;
                }
            }
        }
        placesLetters.push(thatRow + '-' + thatCol);
        if(!isLetterInCell){
            return getWordsInArrAndPlaces(word, arr);
        }
    }
    return [copyArr, placesLetters];
}
function getAllEmptyCells(arr){
    //Получить массив незанятых ячеек (нет буквы)
    let emptyCells = [];
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr[0].length; j++){
            if(arr[i][j] === 0){
                emptyCells.push([i, j]);
            }
        }
    }
    return emptyCells;
}