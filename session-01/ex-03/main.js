/*CHALLENGE 3: Final Grade Calculation
A student receives three grades. The program calculates and displays the final average.
Example
Input: 
    First grade: 7.5
    Second grade: 8.5
    Third grade: 9.5
Output: 
    Final grade: 8.5
    */
console.log("main.js loaded...");

let firstNr = prompt("Input the first number");
firstNr = Number(firstNr);

let secondNr = prompt("Input the second number");
secondNr = Number(secondNr);

let thirdNr = prompt("Input the second number");
thirdNr = Number(thirdNr);

// suma/3 
alert('Final Grade is: ' + ((firstNr + secondNr + thirdNr) / 3));
// alert(`Final Grade is: ${(firstNr + secondNr + thirdNr) / 3}`);