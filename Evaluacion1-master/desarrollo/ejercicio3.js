const grados = parseInt(prompt("Ingrese un numero de °C"));

function gradosCelcius(celcius) {
    const fahenreit = (celcius * 9 / 5) + 32;
    return fahenreit
}

const fahenreit = gradosCelcius(grados);
console.log(`${fahenreit}`);
console.log(gradosCelcius(20));
console.log(gradosCelcius(25));
console.log(gradosCelcius(30));