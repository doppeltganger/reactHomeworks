import React, { useState, useRef } from 'react';
import formateTime from '../helpers/formateTime';

const useTimer = function () {
    const [isStoppedTimer, setIsStoppedTimer] = useState(false);
    
    const timerId = useRef();
    
    const [time, setTime] = useState({
        timeOnBoard: '00:00:00',
        counter: 0,
    });

    const startTime = () => {
        if (timerId.current) {
            return;
        }

        const interval = setInterval(() => {
            setTime((prop) => {
                let time = formateTime(prop.counter);
                return {
                    timeOnBoard: time,
                    counter: prop.counter + 1,
                };
            });
        }, 1000);

        timerId.current = interval;
    }

    const stopTime = () => {
        if (!time.counter) {
            return;
        }
        
        clearInterval(timerId.current);
        timerId.current = '';
        setIsStoppedTimer(true);
    }

    const resetTime = () => {
        stopTime();
        setIsStoppedTimer(false);
        setTime({ 
            timeOnBoard: '00:00:00', 
            counter: 0 
        });
    }

    return { startTime, stopTime, resetTime, time, isStoppedTimer };
};

export default useTimer;