const display = document.getElementById("display");

// Agrega un valor al display
function appendValue(value) {
  display.value += value;
}

// Limpia el display
function clearDisplay() {
  display.value = "";
}

// Borra el último carácter
function deleteLast() {
  display.value = display.value.slice(0, -1);
}

// Calcula el resultado
function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}
