import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Contador from './Contador';

describe('Componente Contador', () => {
  test('renderiza com valor inicial padrão', () => {
    render(<Contador />);
    const valorElement = screen.getByTestId('contador-valor');
    expect(valorElement).toHaveTextContent('0');
  });

  test('renderiza com valor inicial personalizado', () => {
    render(<Contador inicial={10} />);
    const valorElement = screen.getByTestId('contador-valor');
    expect(valorElement).toHaveTextContent('10');
  });

  test('incrementa o contador quando botão + é clicado', () => {
    render(<Contador />);
    const botaoIncrementar = screen.getByLabelText('Incrementar');
    const valorElement = screen.getByTestId('contador-valor');

    fireEvent.click(botaoIncrementar);
    expect(valorElement).toHaveTextContent('1');

    fireEvent.click(botaoIncrementar);
    expect(valorElement).toHaveTextContent('2');
  });

  test('decrementa o contador quando botão - é clicado', () => {
    render(<Contador inicial={5} />);
    const botaoDecrementar = screen.getByLabelText('Decrementar');
    const valorElement = screen.getByTestId('contador-valor');

    fireEvent.click(botaoDecrementar);
    expect(valorElement).toHaveTextContent('4');
  });

  test('reseta o contador para valor inicial', () => {
    render(<Contador inicial={5} />);
    const botaoIncrementar = screen.getByLabelText('Incrementar');
    const botaoResetar = screen.getByLabelText('Resetar');
    const valorElement = screen.getByTestId('contador-valor');

    // Incrementa algumas vezes
    fireEvent.click(botaoIncrementar);
    fireEvent.click(botaoIncrementar);
    expect(valorElement).toHaveTextContent('7');

    // Reseta
    fireEvent.click(botaoResetar);
    expect(valorElement).toHaveTextContent('5');
  });

  test('funciona com passo personalizado', () => {
    render(<Contador inicial={0} passo={5} />);
    const botaoIncrementar = screen.getByLabelText('Incrementar');
    const botaoDecrementar = screen.getByLabelText('Decrementar');
    const valorElement = screen.getByTestId('contador-valor');

    fireEvent.click(botaoIncrementar);
    expect(valorElement).toHaveTextContent('5');

    fireEvent.click(botaoIncrementar);
    expect(valorElement).toHaveTextContent('10');

    fireEvent.click(botaoDecrementar);
    expect(valorElement).toHaveTextContent('5');
  });

  test('todos os botões estão presentes', () => {
    render(<Contador />);

    expect(screen.getByLabelText('Incrementar')).toBeInTheDocument();
    expect(screen.getByLabelText('Decrementar')).toBeInTheDocument();
    expect(screen.getByLabelText('Resetar')).toBeInTheDocument();
  });
});
