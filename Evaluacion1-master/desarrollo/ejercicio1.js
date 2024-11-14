const puntaje = [23, 4, 6, 7, 99, 12, 19, 8, 43, 21, 65];

let total = puntaje.reduce((a, b) => a + b, 0);
console.log(total)