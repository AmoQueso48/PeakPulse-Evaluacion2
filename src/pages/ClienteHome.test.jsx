import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe, test, expect } from 'vitest';
import ClienteHome from './ClienteHome';

describe('Pruebas en la página ClienteHome', () => {
  test('Debe mostrar el banner principal y el formulario de solicitud', () => {
    render(
      <BrowserRouter>
        <ClienteHome />
      </BrowserRouter>
    );

    expect(screen.getByText('¿Dónde decidirás viajar el día de hoy?')).toBeInTheDocument();
    expect(screen.getByText('Solicitar un viaje')).toBeInTheDocument();
  });
});