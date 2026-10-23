import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="pp-footer mt-5 py-4">
      <div className="container">
        <div className="row g-4 small">
          <div className="col-md-4">
            <h2 className="h6 fw-semibold">Viaje Seguro</h2>
            <p className="text-muted mb-0">
              Transporte escolar, turístico y corporativo en la Región Metropolitana desde 2012
            </p>
          </div>

          <div className="col-md-4">
            <h2 className="h6 fw-semibold">Contacto</h2>
            <ul className="list-unstyled mb-0">
              <li><a href="mailto:contacto@viajeseguro.cl">contacto@viajeseguro.cl</a></li>
              <li><a href="tel:+56912132211">+56 9 1213 2211</a></li>
              <li className="text-muted">Santiago, Región Metropolitana</li>
            </ul>
          </div>

          <div className="col-md-4">
            <h2 className="h6 fw-semibold">Accesos</h2>
            <ul className="list-unstyled mb-0">
              <li><Link to="/cliente">Portal cliente</Link></li>
              <li><Link to="/conductor">Portal conductor</Link></li>
              <li><Link to="/admin">Panel administración</Link></li>
            </ul>
          </div>
        </div>

        <p className="text-muted small text-center mt-4 mb-0">
          © {new Date().getFullYear()} Viaje Seguro — Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}