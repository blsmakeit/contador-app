import React, { useState } from 'react';
import './Contador.css';

const Contador = ({ inicial = 0, passo = 1 }) => {
  const [contador, setContador] = useState(inicial);

  const incrementar = () => {
    setContador(contador + passo);
  };

  const decrementar = () => {
    setContador(contador - passo);
  };

  const resetar = () => {
    setContador(inicial);
  };

  return (
    <div className="contador-container">
      <h2>Contador Simples</h2>
      <div className="contador-display">
        <h1 data-testid="contador-valor">{contador}</h1>
      </div>
      <div className="contador-botoes">
        <button 
          onClick={decrementar} 
          aria-label="Decrementar"
          className="btn btn-decrementar"
        >
          -
        </button>
        <button 
          onClick={resetar} 
          aria-label="Resetar"
          className="btn btn-resetar"
        >
          Reset
        </button>
        <button 
          onClick={incrementar} 
          aria-label="Incrementar"
          className="btn btn-incrementar"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Contador;