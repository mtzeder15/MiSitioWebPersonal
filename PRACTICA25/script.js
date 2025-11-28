function updatePreview() {
    const htmlCode = document.getElementById('htmlEditor').value;
    const cssCode = document.getElementById('cssEditor').value;
    const previewArea = document.getElementById('previewArea');

    // Combina el HTML y los estilos CSS dentro de la vista previa
    previewArea.innerHTML = <style>${cssCode}</style>${htmlCode};
}

// Llama a la función al cargar la página para inicializar
window.onload = updatePreview;