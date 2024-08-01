import { useState } from 'react'
import React, { useEffect } from 'react'

function Timer() {
    const [seconds, setSeconds] = useState(0)
    const [minutes, setMinutes] = useState(0)

    const [isActive, setIsActive] = useState(true)

    useEffect(() => {
        let timer;
        timer = setInterval(() => {
            if (isActive && seconds < 10) {
                setSeconds(prevSeconds => {
                    if (prevSeconds + 1 === 10) {
                        setMinutes(prevMins => {
                            return prevMins + 1
                        })
                        return 0;
                    } else {
                        return prevSeconds + 1;
                    }
                })
            } else if (minutes > 4) {
                setIsActive(false)
            }
        }, 1000)

        return () => clearInterval(timer);
    }, [seconds, minutes, isActive])

    return (
        <div>
            <h1>
                {minutes.toString().padStart(2, '0')}:
                {seconds.toString().padStart(2, '0')}
            </h1>
            {!isActive && <p>Time up!</p>}
        </div>
    )
}

export default Timer
