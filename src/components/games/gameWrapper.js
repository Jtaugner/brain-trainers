import {Component} from 'react';

let interval;
class GameWrapper extends Component{

    setTimer(){
        interval = setInterval(()=>{
            if(this.state.timer - 1 < 1){
                clearInterval(interval);
                this.props.getLose('К сожалению, вы не уложились в нужное время');
            }else{
                this.setState((state) => {
                    return {timer: state.timer - 1};
                });
            }
        }, 1000)

    }
    componentWillUnmount() {
        clearInterval(interval);
    }
}

export default GameWrapper