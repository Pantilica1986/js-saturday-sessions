/* CHALLENGE 5: Currency Conversion
The user enters an amount in one currency and an exchange rate. 
The program calculates and displays the converted amount. */

console.log('main.js loaded...');

// Input: Amount in the initial currency
let amount = prompt('Input the amount to convert');
amount = Number(amount);

// Input: Exchange rate to the target currency
let exchangeRate = prompt('Input the exchange rate');
exchangeRate = Number(exchangeRate);

// Calculate the converted amount
let convertedAmount = amount * exchangeRate;

// Output: Display the converted amount using string concatenation
alert('The converted amount is: ' + convertedAmount);

// Output: Display the converted amount using template literals
// alert(`The converted amount is: ${convertedAmount}`);

/*
prompt(): Preia suma și cursul de schimb de la utilizator.
Number(): Convertește inputul de tip string la numere.
convertedAmount: Calculăm suma convertită folosind formula: amount * exchangeRate.
alert(): Afișăm rezultatul folosind două metode: concatenare și template literals.

Dacă vrei să adaugi formatarea rezultatului (de exemplu, la două zecimale), poți folosi:
alert('The converted amount is: ' + convertedAmount.toFixed(2));
alert(`The converted amount is: ${convertedAmount.toFixed(2)}`);
*/ 