let intervalo;
let inicio;
let tiempoTranscurrido = 0;
let corriendo = false;

function iniciar() {
  if (corriendo) return; // Evita múltiples intervalos
  corriendo = true;
  inicio = Date.now() - tiempoTranscurrido;
  intervalo = setInterval(actualizarCronometro, 1000);
}

function detener() {
  clearInterval(intervalo);
  corriendo = false;
}

function reiniciar() {
  clearInterval(intervalo);
  corriendo = false;
  tiempoTranscurrido = 0;
  document.getElementById("cronometro").textContent = "00:00:00";
}

function actualizarCronometro() {
  tiempoTranscurrido = Date.now() - inicio;

  let horas = Math.floor(tiempoTranscurrido / 3600000);
  let minutos = Math.floor((tiempoTranscurrido % 3600000) / 60000);
  let segundos = Math.floor((tiempoTranscurrido % 60000) / 1000);

  document.getElementById("cronometro").textContent =
    horas.toString().padStart(2, '0') + ":" +
    minutos.toString().padStart(2, '0') + ":" +
    segundos.toString().padStart(2, '0');
}




