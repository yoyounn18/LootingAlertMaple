import React, { useState, useEffect, useRef } from 'react';
import Audio from './Audio'

const Count = ({ second, src, run }) => {
    const [count, setCount] = useState(1);
    const [delay, setDelay] = useState(1000);
    const [isRunning, setIsRunning] = useState(true);

    useInterval(() => {
        setCount(count + 1)
        count === second && setCount(1)
    }, isRunning ? delay : null)

    function useInterval(callback, delay) {
        const savedCallback = useRef();

        useEffect(() => {
            savedCallback.current = callback;
        }, [callback]);

        useEffect(() => {
            function tick() {
                savedCallback.current();
            }
            if (delay !== null) {
                let id = setInterval(tick, delay);
                return () => clearInterval(id);
            }
        }, [delay]);
    }

    const handleIsRunningChange = (e) => {
        setIsRunning(e.target.checked);
    }

    return (
        <>
            <h1>{count}</h1>
            {count % second === 0 && <Audio sound={src} />}
            <input type="checkbox" checked={isRunning} onChange={handleIsRunningChange} />
        </>
    )
}

export default Count
