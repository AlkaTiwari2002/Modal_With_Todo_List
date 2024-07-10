// useCallback is a React hook that helps you avoid creating new functions every time your component re-renders.
//  Instead, it remembers the function you wrote, so it only changes when it needs to.


import { useState, useCallback } from 'react';

export function Callback() {
    const [Increment, setIncrement] = useState(0);
    const [Decrement, setDecrement] = useState(0);
    const [count, setCount] = useState(0);

    const calculateSquare = useCallback((value) => { 
        console.log("Calculating Square");
        return value * value;
    }, []); 

    const handleIncrement = useCallback(() => { 
        setIncrement(count => {
            const newValue = count + 1;
            setCount(calculateSquare(newValue));
            return newValue;
        });
    }, [calculateSquare]); 

    const handleDecrement = useCallback(() => { 
        setDecrement(count => {
            const newValue = count - 1;
            setCount(calculateSquare(newValue));
            return newValue;
        });
    }, [calculateSquare]); 
    return (
        <>
            <h1>Callback</h1>
            <h1>Increment : {Increment}</h1>
            <h1>Decrement : {Decrement}</h1>
            <button onClick={handleIncrement}>Increment</button> 
            <button onClick={handleDecrement}>Decrement</button> 
            <h2>Result of Calculation : {count}</h2>
        </>
    );
}
