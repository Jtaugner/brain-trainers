import React, {Component} from 'react';
import './rememberNumbersGame.scss'

let timeout;

const numbers = [0,1,2,3,4,5,6,7,8,9];
class RememberNumbersGame extends Component {
    size = this.props.levelInfo.size;
    componentWillUnmount() {
        clearTimeout(timeout);
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
            this.showNumber();
        }, 500)
    }
    showNumber(){
        this.setState({
            arrNumbers: createArrNumbers(this.size),
            enteredNumbers: [],
            showNumber: true,
        });
        timeout = setTimeout(()=>{
            this.setState({
                showNumber: false
            })
        }, this.props.levelInfo.time)

    }
    testNumber(){
        let key = true;
        this.setState({
           showAnswer: true
        });
        for(let i = 0; i < this.state.arrNumbers.length; i++){
            if(this.state.arrNumbers[i] !== this.state.enteredNumbers[i]){
               key = false;
            }
        }
        if(key){
            this.setState((state) =>
                ({
                    round: state.round + 1
                }));
        }else if(this.props.difficult > 0){
            return this.props.getLose(false)
        }
        timeout = setTimeout(()=>{
            this.setState({
                enteredNumbers: [],
                showAnswer: false
            });
            if(this.state.round === this.props.levelInfo.rounds){
                    this.props.getWin();
                    this.setState({
                        isWin: true
                    })
            }else{
                timeout = setTimeout(()=> {
                    this.showNumber();
                }, 800);
            }

        }, 1000);

    };
    addNumber(num){
        if(this.state.showNumber || this.state.showAnswer || this.state.isWin) return;
        let enteredNumbers = this.state.enteredNumbers;
        if(enteredNumbers.length === this.size) return;
        enteredNumbers.push(num);
        this.setState({
            enteredNumbers
        });
        if(enteredNumbers.length === this.size){
           this.testNumber();
        }
    }
    deleteNumber(){
        if(this.state.showNumber || this.state.showAnswer || this.state.isWin) return;
        let enteredNumbers = this.state.enteredNumbers;
        if(enteredNumbers.length > 0){
            enteredNumbers.length = enteredNumbers.length-1;
            this.setState({
                enteredNumbers
            });
        }

    }


    render() {
        return (
            <div className={'rememberNumbers-game ' + ('remember-width' + this.props.levelInfo.size)}>
                <div className="game-page__rounds">Этап: {this.state.round}/{this.props.levelInfo.rounds}</div>
                <div className="rememberNumbers__numbers">
                    {
                        this.state.arrNumbers.map((num, index)=>{
                            return <div
                                key={index}
                                className={'rememberNumbers__number '
                                + (this.state.showAnswer && this.state.enteredNumbers[index] !== undefined ?
                                    this.state.enteredNumbers[index] === num ?
                                        'right-answer' : 'wrong-answer'
                                    : '')}>
                                {this.state.showNumber ? num :
                                this.state.enteredNumbers[index] !== undefined ?
                                    this.state.enteredNumbers[index] : ''
                                }
                            </div>
                        })
                    }
                </div>
                <div className="rememberNumbers__enter">
                    {
                        [1,2,3,4,5,6,7,8,9].map((num)=>
                            <div
                                key={'rememberNumbers' + num}
                                className={'rememberNumbers__enter__number'}
                                onClick={()=>{this.addNumber(num)}}
                            >
                                {num}
                            </div>)

                    }
                    <div
                        className={'rememberNumbers__enter__number' +
                        ' rememberNumbers__enter__number_null'}
                        onClick={()=>{this.addNumber(0)}}
                    >
                        0
                    </div>
                    <div
                        className={'rememberNumbers__enter__number' +
                        ' rememberNumbers__enter__number_delete'}
                        onClick={()=>{this.deleteNumber()}}
                    />
                </div>
            </div>

        );
    }

}

export default RememberNumbersGame;

function createArrNumbers(length) {
    let arr = [];
    for(let i = 0; i < length; i++){
        arr.push(numbers[Math.floor(Math.random()*numbers.length)]);
    }
    return arr;
}