// Función para obtener los valores de los inputs
function obtenerNumeros() {
    const num1 = Number(document.getElementById('num1').value);
    const num2 = Number(document.getElementById('num2').value);
    return [num1, num2];
}

// Función para mostrar el resultado
function mostrarResultado(valor) {
    document.getElementById('resultado').textContent = valor;
}

// Funciones de operaciones
function sumar() {
    const [num1, num2] = obtenerNumeros();
    mostrarResultado(num1 + num2);
}

function restar() {
    const [num1, num2] = obtenerNumeros();
    mostrarResultado(num1 - num2);
}

function multiplicar() {
    const [num1, num2] = obtenerNumeros();
    mostrarResultado(num1 * num2);
}

function dividir() {
    const [num1, num2] = obtenerNumeros();
    if (num2 === 0) {
        mostrarResultado("No se puede dividir entre 0");
    } else {
        mostrarResultado(num1 / num2);
    }
}
