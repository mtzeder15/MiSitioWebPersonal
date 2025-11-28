function dibujarPoligono() {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  const lados = parseInt(document.getElementById('lados').value);

  if (isNaN(lados) || lados < 3) {
    alert('Por favor, ingresa un número válido de lados (mínimo 3).');
    return;
  }

  const centroX = canvas.width / 2;
  const centroY = canvas.height / 2;
  const radio = 150; // tamaño del polígono
  const angulo = (2 * Math.PI) / lados;

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();

  for (let i = 0; i <= lados; i++) {
    const x = centroX + radio * Math.cos(i * angulo - Math.PI / 2);
    const y = centroY + radio * Math.sin(i * angulo - Math.PI / 2);

    if (i === 0) {
      ctx.moveTo(x, y);
    } else {
      ctx.lineTo(x, y);
    }
  }

  ctx.closePath();
  ctx.strokeStyle = '#000';
  ctx.lineWidth = 2;
  ctx.stroke();
}
