import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  // -------------------------------------------------------------
  // ESTADOS DEL FORMULARIO DE INICIO DE SESIÓN
  // -------------------------------------------------------------
  const [emailLogin, setEmailLogin] = useState('');
  const [passwordLogin, setPasswordLogin] = useState('');
  const [perfil, setPerfil] = useState('cliente');

  // -------------------------------------------------------------
  // ESTADOS DEL FORMULARIO DE REGISTRO DE USUARIO
  // -------------------------------------------------------------
  const [nombreRegistro, setNombreRegistro] = useState('');
  const [emailRegistro, setEmailRegistro] = useState('');
  const [passwordRegistro, setPasswordRegistro] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const navigate = useNavigate();

  // Función al enviar el Inicio de Sesión
  const handleLoginSubmit = (e) => {
    e.preventDefault();

    // Redirección según el perfil elegido en el select
    if (perfil === 'cliente') {
      navigate('/cliente');
    } else if (perfil === 'conductor') {
      navigate('/conductor');
    } else if (perfil === 'admin') {
      navigate('/admin');
    }
  };

  // Función al enviar el Registro de Usuario
  const handleRegistroSubmit = (e) => {
    e.preventDefault();

    if (passwordRegistro !== confirmPassword) {
      alert('Las contraseñas no coinciden. Por favor verifica.');
      return;
    }

    alert('¡Usuario registrado con éxito!');
    // Limpiamos los campos del registro
    setNombreRegistro('');
    setEmailRegistro('');
    setPasswordRegistro('');
    setConfirmPassword('');
  };

  return (
    <div className="pp-login">
      <div className="container py-5">
      <div className="row g-4 justify-content-center">
        
        {/* ==================== COLUMNA IZQUIERDA: INICIO DE SESIÓN ==================== */}
        <div className="col-md-5">
          <div className="card p-4 shadow-sm h-100">
            <h3 className="text-center mb-4 fw-bold">Inicio de sesión</h3>
            <form onSubmit={handleLoginSubmit}>
              
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  value={emailLogin}
                  onChange={(e) => setEmailLogin(e.target.value)}
                  placeholder="mosquito@gmail.com"
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Contraseña</label>
                <input
                  type="password"
                  className="form-control"
                  value={passwordLogin}
                  onChange={(e) => setPasswordLogin(e.target.value)}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Ingresar como</label>
                <select
                  className="form-select"
                  value={perfil}
                  onChange={(e) => setPerfil(e.target.value)}
                >
                  <option value="cliente">Cliente</option>
                  <option value="conductor">Conductor</option>
                  <option value="admin">Administrador / Supervisor</option>
                </select>
              </div>

              <button type="submit" className="btn btn-primary w-100 mt-2">
                Ingresar
              </button>
            </form>
          </div>
        </div>

        {/* ==================== COLUMNA DERECHA: REGISTRO DE USUARIO ==================== */}
        <div className="col-md-5">
          <div className="card p-4 shadow-sm h-100">
            <h3 className="text-center mb-4 fw-bold">Registro de usuario</h3>
            <form onSubmit={handleRegistroSubmit}>
              
              <div className="mb-3">
                <label className="form-label">Nombre completo</label>
                <input
                  type="text"
                  className="form-control"
                  value={nombreRegistro}
                  onChange={(e) => setNombreRegistro(e.target.value)}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  value={emailRegistro}
                  onChange={(e) => setEmailRegistro(e.target.value)}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Contraseña</label>
                <input
                  type="password"
                  className="form-control"
                  value={passwordRegistro}
                  onChange={(e) => setPasswordRegistro(e.target.value)}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Confirma tu contraseña</label>
                <input
                  type="password"
                  className="form-control"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>
              <button
                type="submit"
                className="btn btn-dark w-100 mt-2"
              >
                Registrarse
              </button>
            </form>
          </div>
        </div>

      </div>
    </div>
    </div>
  );
}