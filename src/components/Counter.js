// Simple Counter
import React, { useState } from 'react';

function Counter () {
    const [count, setCount] = useState(0);
    
    const increment = () => {
        // Increment the count by 1 
        setCount(prevCount => prevCount + 1);
    };

    const decrement = () => {
        // Decrement the count by 1 if the count is greater than 0
        if (count > 0) {
            setCount(prevCount => prevCount - 1);
        }
    };

    return (
        <div className='task'>
            <p>Count: {count}</p>
            <button className='Button' onClick={increment}>Increment</button>
            <button className='Button' onClick={decrement}>Decrement</button>
        </div>
    )
}

export default Counter;