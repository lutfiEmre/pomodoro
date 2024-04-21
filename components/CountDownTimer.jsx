"use client"
import React, { useEffect, useRef, useState } from 'react';

import CountDownCard from './CountDownCard';

const CountDownTimer = (props) => {
    const { timer, setTimer } = props;
    // card ref
    const SecondsCardRef = useRef(null);
    const MinutesCardRef = useRef(null);
    // state
    const [minutes, setMinutes] = useState(timer.time);
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        setTimer({...timer, now: false})
        setMinutes(timer.time)
        setSeconds(0)

    },[timer.time])

    const System = () => {
        if (timer.now && seconds > 0) {
            setTimeout(() => {
                setSeconds(seconds - 1);
                SecondsCardRef.current.classList.toggle('rotate');
            }, 0);
        }
        if (timer.now && seconds === 0 && minutes > 0) {
            setMinutes(minutes - 1);
            setSeconds(60)
            MinutesCardRef.current.classList.toggle('rotate');
        }
    };

    useEffect(() => {
        let timerId;
        if (timer.now) {
            timerId = setTimeout(() => {
                System();
            }, 1000);
        }
        return () => clearTimeout(timerId);
    }, [seconds, minutes, timer.now]);

    useEffect(() => {
        if (!timer.now) {
            // Timer is paused, do nothing
            return;
        }

        if (seconds === 0 && minutes === 0) {
            // Timer has reached 00:00, stop the timer
            setTimer({ ...timer, now: false });
        }
    }, [seconds, minutes, timer, setTimer]);

    return (
        <div className="countdown__container flex flex-col items-center sm:flex-row flex-wrap">
            <CountDownCard label="minutes" number={minutes} cardRef={MinutesCardRef} />
            <CountDownCard label="seconds" number={seconds} cardRef={SecondsCardRef} />
        </div>
    );
};

export default CountDownTimer;

