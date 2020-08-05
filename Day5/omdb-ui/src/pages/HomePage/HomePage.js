import React, { useState } from 'react';

function Button(props) {
    return <button onClick={props.incrementCounter}> Click me! </button>
}

function Counter(props) {
    return <p> Count = {props.value} </p>
}

export default function HomePage() {
    // useState -> A function provided by react
    // Input to useState -> Initial value of counter
    // Returns an array of 2 items
    // 1st is counter
    // 2nd is function to set value of counter
    // Long syntax
    // const returnArr = useState(0);
    // const counter = returnArr[0];
    // const setCounter = returnArr[1];
    const [counter, setCounter] = useState(0);
    const incrementCounter = () => { setCounter(counter + 1); }
    return (
        <>
            <p> Hello World </p>
            <Button incrementCounter={incrementCounter} />
            <Counter value={counter} />
        </>
    )
}