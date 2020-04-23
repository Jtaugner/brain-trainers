import React, {useState} from 'react';
import './shultzGame.scss'
import {connect} from "react-redux";
import {selectDifficult, selectGame, selectGameLevel} from "../../../store/selectors";
import {getLevelsInfoByGameDiffAndLevel} from "../../../gamesCommon";


function ShultzGame(props) {
    console.log("SDD SHUTLZ REDNER");
    const {levelInfo, getWin} = props;
    const width = levelInfo.width;
    const lastNumber = width * width;
    let [nowNumber, changeNumber] = useState(1);
    let [table] = useState(createShultz(width));
    const testNumber = (num)=>{
      if(num === nowNumber){
          if(num === lastNumber){
              getWin();
          }else{
              changeNumber(num+1);
          }

      }
    };
    const tableSize = (window.innerWidth > 650) ? 650 : window.innerWidth - 5;
    return (
        <div className={'shultz-game ' + ('shultz-width-' + width)}
        >
            <div className="next-num">Следующее: {nowNumber}</div>
            <table
                style={{width: tableSize, height: tableSize}}
            >
                <tbody>
                {
                    table.map((arr, i)=>
                        <tr key={'shultz-tr' + i}>
                            {arr.map((num,q)=>
                                <td key={'shultz-td' + q}
                                    onClick={()=>{testNumber(num)}}
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

export default connect(
    (store)=>({
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
    for(let i = 0; i < width*width; i++){
        randNumbers.push(i+1);
    }
    shuffle(randNumbers);
    let table = [];
    for(let i = 0; i < width; i++){
        table.push([]);
        for(let q = 0; q < width; q++){
            table[i].push(getAndDeleteRandElement(randNumbers));
        }
    }
    return table;
}