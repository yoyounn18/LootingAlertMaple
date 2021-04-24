import React, { useState, useEffect, useRef } from 'react';
import Audio from './Audio'
import StartBtn from './StartBtn';

const Count = ({ second, src, run, text, pause }) => {
    const [count, setCount] = useState(1);
    const [delay, setDelay] = useState(1000);
    const [isRunning, setIsRunning] = useState(true);

    useInterval(() => {
        isRunning && setDelay(1000)

        count + 1 === second && setDelay(2000)

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

    const handleIsRunningChange = () => {
        setIsRunning(!isRunning);
    }

    return (
        <>
            <div style={{ fontSize: '3rem', color: 'white', width: '30vw', height: '15vh', display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
                {/* <h4 style={{ color: "white", fontSize: "2.5rem", padding: '0' }}>{count}{text}</h4> */}
                {count}{text}
                {count % second === 0 && <Audio sound={src} />}
                {/* <input type="checkbox" checked={isRunning} onChange={handleIsRunningChange}></input> */}
                <div>
                    <StartBtn onClick={handleIsRunningChange} text={isRunning ? '||' : '▶'}></StartBtn>
                </div>
            </div>
        </>
    )
}

export default Count
