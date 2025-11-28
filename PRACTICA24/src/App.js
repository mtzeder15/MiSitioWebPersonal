import React, { useState } from 'react';
import './App.css'; 

function App() {
  const [inputValue, setInputValue] = useState('');
  const [listItems, setListItems] = useState([]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddItem = () => {
    if (inputValue.trim() !== '') {
      setListItems([...listItems, inputValue]);
      setInputValue('');
    }
  };

  const deleteElement = (index) => {
    const updatedList = listItems.filter((item, i) => i !== index);
    setListItems(updatedList);
  };

  return (
    <div className="list-container">
      <h1>Lista de Elementos</h1>
      <div className="input-section">
        <input 
          type="text" 
          value={inputValue} 
          onChange={handleInputChange} 
          placeholder="Ingresar nuevo dato"
        />
        <button onClick={handleAddItem}>Agregar</button>
      </div>

      <ol>
        {listItems.map((item, index) => (
          <div className="container-datos" key={index}>
            <div className="datos">
              <li>{item}</li>
            </div>
            <div className="boton">
              <button
                className="btn-delete"
                onClick={() => deleteElement(index)}
              >
                Borrar Dato
              </button>
            </div>
          </div>
        ))}
      </ol>
    </div>
  );
}

export default App;