// Función que se llama cuando se hace clic en "Agregar"
function addItem() {
    const input = document.getElementById('itemInput');
    const newItemText = input.value.trim();

    if (newItemText !== '') {
        const list = document.getElementById('itemList');
        
        // Crear nuevo elemento de lista (li)
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <span>${newItemText}</span>
            <button class="btn-delete" onclick="deleteItem(this)">Borrar Dato</button>
        `;
        
        list.appendChild(listItem);
        input.value = ''; // Limpiar el input
    }
}

// Función que se llama cuando se hace clic en "Borrar Dato"
function deleteItem(buttonElement) {
    // Sube al elemento padre (li) y lo elimina de su lista (ul)
    const listItem = buttonElement.parentElement;
    listItem.remove();
}