import React, {useState, useEffect} from 'react';
import TimeList from './TimeList';
import Button from './UI/button/Button';
import { formateTime } from '../helpers/formateTime';
import './UI/button/_Button.scss';
import '../styles/_App.scss';

let timerId = null;

function Timer() {
	const [time, setTime] = useState(0);
	const [timeList, setTimeList] = useState([]);
	const [isActiveTimer, setIsActiveTimer] = useState(false);
	const [isDisableButton, setIsDisableButton] = useState(false);

	useEffect(() => {
        localStorage.getItem('times') && setTimeList(JSON.parse(localStorage.getItem('times')))
	}, []);

	useEffect(() => {
		localStorage.setItem('times', JSON.stringify(timeList));
	}, [timeList]);

	const startTimer = () => {
		const startTime = isActiveTimer ? Date.now() - time : Date.now();

        timerId = setInterval(() => {
			setTime(Date.now() - startTime);
		}, 0);

		isActiveTimer ? setIsActiveTimer(!isActiveTimer) : setIsDisableButton(!isDisableButton);
	};

	const stopTimer = () => {
		setIsActiveTimer(true);
		clearInterval(timerId);
		setTimeList([...timeList, formatedTime]);
	};

	const resetTimer = () => {
		setIsActiveTimer(false);
		setIsDisableButton(false);
		clearInterval(timerId);
		setTimeList([...timeList, formatedTime]);
		setTime(0);
	};

	const formatedTime = formateTime(time);

	return (
		<div className="timer">
			<h2 className="timer__title">{formatedTime.hours}:{formatedTime.minutes}:{formatedTime.seconds}:{formatedTime.milliseconds}</h2>
			<div className="timer__button-block">
                <Button 
                    style={{background: !isActiveTimer ? '#1e847f' : '#26495c'}} 
                    onClick={startTimer} disabled={!isActiveTimer && isDisableButton}
                >
                    {!isActiveTimer ? 'Start' : 'Continue'}
                </Button>

                <Button 
                    style={{background: '#b85042'}} 
                    onClick={stopTimer} disabled={!isDisableButton || isActiveTimer}
                >
                    Stop
                </Button>

                <Button 
                    style={{background: '#e0a96d'}} 
                    onClick={resetTimer} disabled={!isActiveTimer && !isDisableButton}
                >
                    Reset
                </Button>
            </div>
			<TimeList times={timeList} />
		</div>
	);
}


export default Timer;