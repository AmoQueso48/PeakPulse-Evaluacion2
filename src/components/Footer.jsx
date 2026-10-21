export default function Footer() {
  return (
    <footer className="bg-light text-center text-muted py-3 mt-5 border-top">
      <div className="container">
        <p className="m-0 small">
          © {new Date().getFullYear()} Viaje Seguro — Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}