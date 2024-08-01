import React, { useEffect, useState } from 'react'

function CountdownTimer({onTimerEnd}) {
    const [seconds, setSeconds] = useState(5);
    const [isActive, setIsActive] = useState(true);

    console.log("Timer running now")

    useEffect(() => {
        let timer; //to store the interval id
        if (isActive && seconds > 0) {
            timer = setInterval(() => {
                    setSeconds(prevSeconds => prevSeconds - 1)
                    }, 1000)
        } else if (seconds === 0) {
            setIsActive(false);
            onTimerEnd();
        }
        return () => clearInterval(timer);
    }, [isActive, seconds])

    return (
        <div>
            <h1>{seconds > 0 ? seconds : 'Start!'}</h1>
        </div>
    )
}

export default CountdownTimer
