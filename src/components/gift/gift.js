import React, {Component} from 'react';
import './gift.scss'
import {connect} from "react-redux";
import {selectGiftTime} from "../../store/selectors";
import ConfettiGenerator from "confetti-js";
import {changeCanOpenGift} from "../../store/ac";

const msInHour = 60 * 60 * 1000;
const msInMin = 60 * 1000;

function getTime(ms) {
    if (ms > msInHour) {
        const hours = Math.floor(ms / (msInHour));
        const minutes = Math.floor(ms % (msInHour) / (msInMin));
        return hours + "ч. " + minutes + 'м. '
    } else if (ms < 60 * 1000) {
        const sec = Math.floor(ms / (1000));
        return sec + 'с. '
    } else {
        const minutes = Math.floor(ms / (msInMin));
        const sec = Math.floor(ms % (msInMin) / (1000));
        return minutes + "м. " + sec + 'с. '
    }
}

let interval;
class Gift extends Component {
    componentWillUnmount() {
        clearInterval(interval);
    }
    constructor(props){
        super(props);
        this.startTimer();
        this.state = {
            time: this.getTime()
        }
    }
    getTime(){
        let time = this.props.giftTime - (+new Date());
        if(time <= 0){
            time = 0;
            this.props.doCanOpenGift();
        }
        return time;
    }

    componentDidMount() {
        if(this.state.time <= 0){
            const confettiSettings = {
                target: 'gift-done',
                clock: 15,
                size: 2,
                colors: [
                    [233, 196, 95],
                    [137, 128, 230],


                ]
            };
            const confetti = new ConfettiGenerator(confettiSettings);
            confetti.render();
        }
    }

    startTimer(){
        interval = setInterval(()=>{
            const time = this.getTime();
            this.setState({
                time
            });

        }, 1000)
    }

    render() {
        return (
            <div className={"gift " + (this.state.time <= 0 ? 'gift_done' : '')} onClick={this.props.onClick}>
                <div className="gift__time">
                    {this.state.time <= 0 ? 'Открыть' : getTime(this.state.time)}
                    <div className="gift-image">
                        <canvas id="gift-done" />
                    </div>
                </div>
            </div>
        );
    }

}

export default connect(
    (store) => ({
        giftTime: selectGiftTime(store)
    }),
    (dispatch)=>({
        doCanOpenGift: ()=>dispatch(changeCanOpenGift(true))
    })
)(Gift);
