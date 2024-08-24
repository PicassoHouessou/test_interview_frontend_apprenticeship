// Task 1: Array Manipulation
function getEvenNumbers(numbers) {
    return numbers.filter(number => number % 2 === 0);
}

const array = [1, 2, 3, 4, 5, 6, 31, 99, 100, 300];
const evenNumbers = getEvenNumbers(array);
console.log(evenNumbers); // Output: [2, 4, 6, 100, 300]

// Task 2: DOM Interaction
const button = document.getElementById('changeTextButton');
button.addEventListener('click', function() {
    const textElement = document.getElementById('myText');
    textElement.textContent = 'Hello, Check!';
});

// Task 3: Basic Fetch
fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(todos => {
        const ul = document.getElementById('todoList');
        todos.slice(0, 5).forEach(todo => {
            const li = document.createElement('li');
            li.textContent = todo.title;
            ul.appendChild(li);
        });
    })
    .catch(error => console.error('Error fetching data:', error));
