export default function Boton({ texto, onClick, variant = 'primary', type = 'button', className = '' }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`btn btn-${variant} ${className}`}
    >
      {texto}
    </button>
  );
}