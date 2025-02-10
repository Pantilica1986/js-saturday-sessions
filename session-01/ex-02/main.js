/*The user enters two numeric values. The program displays:
Their sum,
Their difference,
Their product,
Their division,
Their arithmetic mean,
The remainder of the division of the first number by the second,
The first number raised to the power of the second.
*/

console.log('main.js loaded...');

let firstNr = prompt('Input the first number');
firstNr = Number(firstNr);

let secondNr = prompt('Input the second number');
secondNr = Number(secondNr);

// Their Sum
alert('Their Sum is: ' + (firstNr + secondNr));
// alert(`Their Sum is: ${firstNr + secondNr}`);

// Their Difference
alert('Their Difference is: ' + (firstNr - secondNr));
// alert(`Their Difference is: ${firstNr - secondNr}`);

// Their Product
alert('Their Product is: ' + (firstNr * secondNr));
// alert(`Their Product is: ${firstNr * secondNr}`);

// Their Division
alert('Their Division is: ' + (firstNr / secondNr));
// alert(`Their Division is: ${firstNr / secondNr}`);

// Their Arithmetic Mean
alert('Their Arithmetic Mean is: ' + ((firstNr + secondNr) / 2));
// alert(`Their Arithmetic Mean is: ${(firstNr + secondNr) / 2}`);

// The remainder of the division
alert('The Remainder of the division of the first number by the second is: ' + (firstNr % secondNr));
// alert(`The Remainder of the division of the first number by the second is: ${firstNr % secondNr}`);

// The first number raised to the power of the second
alert('The first number raised to the power of the second is: ' + (firstNr ** secondNr));
// alert(`The first number raised to the power of the second is: ${firstNr ** secondNr}`);

/*Suma: firstNr + secondNr adună cele două numere.
Diferența: firstNr - secondNr calculează diferența.
Produsul: firstNr * secondNr calculează produsul celor două numere.
Împărțirea: firstNr / secondNr efectuează împărțirea.
Media aritmetică: (firstNr + secondNr) / 2 calculează media aritmetică.
Restul împărțirii: firstNr % secondNr returnează restul împărțirii.
Ridicarea la putere: firstNr ** secondNr calculează puterea primului număr ridicat la al doilea.*/