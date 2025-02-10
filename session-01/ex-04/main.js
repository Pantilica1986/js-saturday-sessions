/* CHALLENGE 4: Next Term in Arithmetic Progression
The user enters two numbers in an arithmetic sequence. 
The program calculates and displays the next number in the sequence. */

console.log('main.js loaded...');

let firstNumber = prompt('Input the first number');
firstNumber = Number(firstNumber);

let secondNumber = prompt('Input the second number');
secondNumber = Number(secondNumber);

// Calculate the difference (common difference in arithmetic progression)
let commonDifference = secondNumber - firstNumber;

// Calculate the next term in the sequence
let nextNumber = secondNumber + commonDifference;

// Output: Display the next number in the sequence using string concatenation
alert('The next number in the sequence is: ' + nextNumber);

// Output: Display the next number using template literals
// alert(`The next number in the sequence is: ${nextNumber}`);
/*
prompt(): Preia cele două numere de la utilizator.
Number(): Convertește inputul de tip string la numere.
commonDifference: Calculăm diferența comună între cele două numere.
nextNumber: Calculăm următorul termen adunând la al doilea număr diferența comună.
alert(): Afișăm rezultatul folosind două metode: concatenare și template literals
/*