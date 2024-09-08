import React, { useState } from 'react';

function Counter() {

    const [count, setCount] = useState(0);

   
    const handleClick = () => {
        setCount(count + 1);
    };

    return (
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={handleClick}>Increase</button>
        </div>
    );
}

export default Counter;


// State in React is a built-in object that is used to manage data or information within a component. 
// This data can change over time and affects how the component renders and behaves.