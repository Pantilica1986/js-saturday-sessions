/* CHALLENGE 6: Dice Roll Simulation
The program generates and displays a random number between 1 and 6, simulating the roll of a six-sided die. */

console.log("main.js loaded...");

// Generate a random number between 1 and 6
let diceRoll = Math.floor(Math.random() * 6) + 1;

// Output: Display the rolled number using string concatenation
alert("You rolled: " + diceRoll);

// Output: Display the rolled number using template literals
// alert(`You rolled: ${diceRoll}`);

/*Math.random(): Generează un număr aleator între 0 și 1.
Math.random() * 6: Extinde intervalul la [0, 6) (nu include 6).
Math.floor(): Rotunjește numărul în jos pentru a obține valori întregi între 0 și 5.
+ 1: Adaugă 1 pentru a obține un număr între 1 și 6.
alert(): Afișează rezultatul folosind concatenare sau template literals.*/
