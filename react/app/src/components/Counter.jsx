import React, { useState } from 'react';

// Task 2: Counter Component
const Counter = () => {
    // useState hook to manage count state
    const [count, setCount] = useState(0);

    // Function to increment the count
    const incrementCount = () => {
        setCount(prev =>++prev);
    };

    // Function to decrement the count
    const decrementCount = () => {
        setCount(prev =>--prev);
    };

    return (
        <div className="p-4 bg-white rounded-lg shadow-md mb-4">
            <h2 className="text-xl font-bold mb-2">Counter: {count}</h2>
            <button
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 mr-2"
                onClick={incrementCount}
            >
                Increment
            </button>
            <button
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                onClick={decrementCount}
            >
                Decrement
            </button>
        </div>
    );
};

export default Counter;
