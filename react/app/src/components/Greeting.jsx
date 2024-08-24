import React from 'react';

// Task 1: Greeting Component
const Greeting = ({ name }) => {
    return <h1 className="text-2xl font-bold mb-4">Hello, {name}!</h1>;
};

export default Greeting;