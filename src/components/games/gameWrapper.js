import {Component} from 'react';

let interval;
class GameWrapper extends Component{
    setTimer(){
        interval = setInterval(()=>{
            console.log('interval', this.props.gameDone);
            if(this.props.gameDone){
                clearInterval(interval);
                return;
            }
            this.setState((state) => {
                return {timer: state.timer - 1};
            });
            if(this.state.timer - 1 < 1){
                clearInterval(interval);
                this.props.getLose('К сожалению, вы не уложились в нужное время');

            }
        }, 1000)

    }
    clearTimer(){
        clearInterval(interval)
    }
    componentWillUnmount() {
        console.log('unmount');
        clearInterval(interval);
    }
}

export default GameWrapper