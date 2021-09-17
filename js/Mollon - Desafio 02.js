let number = parseInt(prompt('Ingrese un numero, por favor.'));
let text = prompt ('Ingrese un texto');
let number1 = parseInt(prompt('Ingrese un numero entre 10 y 50'))

let welcome = (text === "Hola") ? console.log('¡Bienvenido a la consola!') : document.writeln('Primero podria saludar, no?');
let eval = (number > 1000) ? alert('Su numero es mayor a mil.') : document.writeln('El numero es muy chico.');
let eval1 = (number1 > 10 && number1 < 50) ? alert('El input es valido.') : document.writeln('Intente de nuevo. Recargue la pagina');
