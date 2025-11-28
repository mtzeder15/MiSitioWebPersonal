let numero = Math.floor(Math.random() * 100) + 1;

function AdivinaNumero() {
  const input = document.getElementById("numUsuario");
  const guess = parseInt(input.value);
  const resultado = document.getElementById("resultado");

  //entrada
  if (isNaN(guess) || guess < 1 || guess > 100) {
    resultado.innerHTML = "⚠️ Ingresa un número entre 1 y 100.";
    return;
  }

  if (guess === numero) {
    resultado.innerHTML = "🎉 ¡Felicidades! Adivinaste el número.";
    document.getElementById("btnReiniciar").style.display = "block";
    input.disabled = true;
  } else if (guess > numero) {
    resultado.innerHTML = "⬇️ El número es menor que " + guess + ".";
  } else {
    resultado.innerHTML = "⬆️ El número es mayor que " + guess + ".";
  }

  input.value = "";
  input.focus();
}

//presionar Enter
document.getElementById("numUsuario").addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    AdivinaNumero();
  }
});

//reiniciar
function reiniciarJuego() {
  numero = Math.floor(Math.random() * 100) + 1;
  document.getElementById("resultado").innerHTML = "";
  document.getElementById("btnReiniciar").style.display = "none";
  const input = document.getElementById("numUsuario");
  input.disabled = false;
  input.value = "";
  input.focus();
}
