import { render, screen } from '@testing-library/react';
import App from './App';

test('renderiza o título principal', () => {
  render(<App />);
  const titulo = screen.getByText(/Minha App de Testes/i);
  expect(titulo).toBeInTheDocument();
});

test('renderiza o componente Contador', () => {
  render(<App />);
  const contadorTitulo = screen.getByText(/Contador Simples/i);
  expect(contadorTitulo).toBeInTheDocument();
});

test('renderiza a lista de ferramentas', () => {
  render(<App />);
  expect(screen.getByText(/ESLint/i)).toBeInTheDocument();
  expect(screen.getByText(/Prettier/i)).toBeInTheDocument();
  expect(screen.getByText(/Jest/i)).toBeInTheDocument();
  
  // Usar getAllByText em vez de getByText para múltiplos elementos
  const githubActionsElements = screen.getAllByText(/GitHub Actions/i);
  expect(githubActionsElements.length).toBeGreaterThan(0);
});