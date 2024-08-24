import React from 'react';
import Greeting from './components/Greeting';
import Counter from './components/Counter';
import NamesList from './components/NamesList';

// Main App Component
const App = () => {
    return (

        <div className="max-w-xl mx-auto p-6 bg-gray-100 text-gray-800 rounded-lg shadow-md">
        {/* Task 1: Greeting Component */}
        <Greeting name="Bob"/>

        {/* Task 2: Counter Component */}
            <Counter />

            {/* Task 3: Names List Component */}
            <NamesList />
        </div>
    );
};

export default App;
