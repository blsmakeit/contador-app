import React from 'react';
import './App.css';
import Contador from './components/Contador';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>🎯 Minha App de Testes</h1>
        <p>Pipeline CI/CD com GitHub Actions</p>
      </header>
      <main>
        <Contador inicial={0} passo={1} />
        <div className="info-section">
          <h3>🔧 Ferramentas Utilizadas:</h3>
          <ul>
            <li>✅ ESLint - Verificação de código</li>
            <li>🎨 Prettier - Formatação</li>
            <li>🧪 Jest - Testes unitários</li>
            <li>🚀 GitHub Actions - CI/CD</li>
          </ul>
        </div>
      </main>
    </div>
  );
}

export default App;