import React from 'react';

// Task 3: NamesList Component
const NamesList = () => {
    const names = ['Alice', 'Bob', 'Charlie', 'David'];

    return (
        <div className="p-4 bg-white rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-2">Names List:</h2>
            <ul className="list-disc list-inside">
                {names.map((name, index) => (
                    <li key={index} className="text-lg">{name}</li>
                ))}
            </ul>
        </div>
    );
};

export default NamesList;
