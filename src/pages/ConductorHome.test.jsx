import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe, test, expect } from 'vitest';
import ConductorHome from './ConductorHome';

describe('Pruebas en la página ConductorHome', () => {
  test('Debe mostrar la orden de viaje asignada y la sección de reportar novedades', () => {
    render(
      <BrowserRouter>
        <ConductorHome />
      </BrowserRouter>
    );

    expect(screen.getByText('Tu próximo viaje')).toBeInTheDocument();
    expect(screen.getByText('Orden de viaje asignada')).toBeInTheDocument();
    expect(screen.getByText('Reportar una novedad')).toBeInTheDocument();
  });
});