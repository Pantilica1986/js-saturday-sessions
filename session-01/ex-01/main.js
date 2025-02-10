/*
Programul preia de la utilizator o valoare numerică și afișează:
    1. Într-un singur mesaj, o secvență de text ce conține: numărului anterior, numărul primit, numărul succesiv (ex. 5 => "4, 5, 6")
    2. Opusul numărului (ex. 5 => "Opusul numărului 5 este -5" sau -3 => "Opusul numărului -3 este 3")
    3. Restul împărțirii la 2 (ex. 5 => "Restul împărțirii lui 5 la 2 este 1")
    4. 2 la puterea valorii introduse (ex. 3 => "2 la puterea 3 este 8")
*/

console.log('main.js loaded...');

let inputNr = prompt('Input a number')
inputNr = Number(inputNr);

let prevNr = inputNr - 1;
let nextNr = inputNr + 1; 

// Secvența numerelor: numărul anterior, numărul curent și numărul următor
alert('The numbers sequence: ' + prevNr + ', ' + inputNr + ', ' + nextNr);
// alert(`The numbers sequence: ${prevNr}, ${inputNr}, ${nextNr}`);

// Opozitul numărului
alert('The opposite of ' + inputNr + ' is: ' + -inputNr);
// alert(`The opposite of ${inputNr} is: ${-inputNr}`);

// Restul împărțirii la 2
alert('The remainder of ' + inputNr + ' divided by 2 is: ' + inputNr % 2);
// alert(`The remainder of ${inputNr} divided by 2 is: ${inputNr % 2}`);

// 2 la puterea numărului introdus
alert('2 to the power of ' + inputNr + ' equals: ' + 2 ** inputNr);
// alert(`2 to the power of ${inputNr} equals: ${2 ** inputNr}`);
