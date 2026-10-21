import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-primary text-white p-3 mb-4 shadow-sm">
      <div className="container d-flex justify-content-between align-items-center">
        <h1 className="h4 m-0 fw-bold">Viaje Seguro</h1>
        <nav>
          <Link to="/" className="btn btn-outline-light btn-sm">
            Cerrar Sesión / Volver
          </Link>
        </nav>
      </div>
    </header>
  );
}