import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe, test, expect } from 'vitest';
import AdminHome from './AdminHome';

describe('Pruebas en la página AdminHome', () => {
  test('Debe mostrar el panel de administración y las métricas de la flota', () => {
    render(
      <BrowserRouter>
        <AdminHome />
      </BrowserRouter>
    );

    expect(screen.getByText('Panel de administración')).toBeInTheDocument();
    expect(screen.getByText('Utilización actual de la flota')).toBeInTheDocument();
    expect(screen.getByText('Asignar vehículo y conductor')).toBeInTheDocument();
  });
});