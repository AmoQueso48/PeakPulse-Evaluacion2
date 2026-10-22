import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe, test, expect } from 'vitest';
import Login from './Login';

describe('Pruebas en la página de Login', () => {
  test('Debe renderizar los títulos de inicio de sesión y registro', () => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );

    // Verificar que existan los encabezados principales
    expect(screen.getByText('Inicio de sesión')).toBeInTheDocument();
    expect(screen.getByText('Registro de usuario')).toBeInTheDocument();
  });

  test('Debe mostrar las opciones del selector de perfiles', () => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );

    // Verificar las opciones de ingreso
    expect(screen.getByText('Cliente')).toBeInTheDocument();
    expect(screen.getByText('Conductor')).toBeInTheDocument();
    expect(screen.getByText('Administrador / Supervisor')).toBeInTheDocument();
  });
});