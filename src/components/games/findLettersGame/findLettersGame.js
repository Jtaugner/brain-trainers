import React from 'react';
import FindSomethingGameWrapper from "../findSomethinGameWrapper";
import './findLettersGame.scss'

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
    let isUpperCase = answerLetter.toUpperCase()===answerLetter;
    let index = 0;
    while(field.length < length){
        if(lettersPlaces.includes(index)){
            field.push(answerLetter);
            index++;
        }else{
            let randLetter = getRandLetter(useSmallWords);
            if(useSmallWords && Math.random() < 0.20){
                if(isUpperCase){
                    field.push(answerLetter.toLowerCase());
                }else{
                    field.push(answerLetter.toUpperCase());
                }
                index++;
            }else if(answerLetter !== randLetter){
                field.push(randLetter);
                index++;
            }
        }


    }
    return {field, answers: lettersPlaces, answerLetter};

}
function findLettersGame(OriginalComponent) {
    return (props) => {
        return (
            <OriginalComponent
                {...props}
                mainClass={'findLetters-game'}
                createField={createFieldLetters}
                findLetter={true}

            />
        )
    }

}
export default findLettersGame(FindSomethingGameWrapper);

