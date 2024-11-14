const nota = parseInt(prompt("Ingresa una nota"));

if (nota >= 11 && nota <= 20) {
    console.log("APROBADO")
} else if (nota > 0 && nota < 11) {
    console.log("DESAPROBADO")
} else {
    console.log("Por favor ingresa un valor entre 1 y 20")
}