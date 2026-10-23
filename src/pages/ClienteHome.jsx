import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function ClienteHome() {
  // Estados para los campos del formulario de viaje
  const [origen, setOrigen] = useState('');
  const [destino, setDestino] = useState('');
  const [pasajeros, setPasajeros] = useState('');
  const [servicio, setServicio] = useState('');
  const [fechaHora, setFechaHora] = useState('');

  // -------------------------------------------------------------
  // VALIDACIÓN CON JAVASCRIPT
  // -------------------------------------------------------------
  const handleSolicitarViaje = (e) => {
    e.preventDefault();

    // 1. Validar que ningún campo esté vacío
    if (!origen.trim() || !destino.trim() || !pasajeros || !servicio || !fechaHora) {
      alert('⚠️ Error: Por favor, completa todos los campos obligatorios del formulario.');
      return;
    }

    // 2. Validar que el número de pasajeros esté entre 1 y 50
    const numPasajeros = parseInt(pasajeros, 10);
    if (isNaN(numPasajeros) || numPasajeros < 1 || numPasajeros > 50) {
      alert('⚠️ Error: El número de pasajeros debe ser un valor entre 1 y 50.');
      return;
    }

    // Si todo es correcto
    alert('¡Viaje solicitado con éxito! 🚗💨');
    
    // Limpiar formulario
    setOrigen('');
    setDestino('');
    setPasajeros('');
    setServicio('');
    setFechaHora('');
  };

  return (
    <div className="d-flex flex-column min-vh-100 bg-light">
      {/* Componente Header reutilizable */}
      <Header />

      {/* Banner Superior con degradado */}
      <div 
        className="pp-hero mb-5"
      >
        <div className="container">
          <h1 className="fw-bold mb-2">¿Dónde decidirás viajar el día de hoy?</h1>
          <p className="lead m-0 opacity-75">
            Solicita un viaje, revisa en qué etapa va y califica el servicio una vez finalizado
          </p>
        </div>
      </div>

      {/* Contenido principal: Imagen y Formulario */}
      <div className="container flex-grow-1 mb-5">
        <div className="row g-4 align-items-center">
          
          {/* Columna Izquierda: Imagen de referencia */}
          <div className="col-lg-6">
            <div className="card shadow-sm border-0 overflow-hidden h-100">
              <img 
                src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80" 
                alt="Paradero de bus" 
                className="card-img-top object-fit-cover"
                style={{ height: '380px' }}
              />
            </div>
          </div>

          {/* Columna Derecha: Tarjeta con Formulario */}
          <div className="col-lg-6">
            <div className="card p-4 shadow-sm pp-card-accent">
              <h3 className="mb-4 fw-bold">Solicitar un viaje</h3>
              
              <form onSubmit={handleSolicitarViaje}>
                <div className="row mb-3">
                  <div className="col-md-6">
                    <label className="form-label text-muted small fw-bold">Origen</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      placeholder="Ej: Providencia"
                      value={origen}
                      onChange={(e) => setOrigen(e.target.value)}
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label text-muted small fw-bold">Destino</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      placeholder="Ej: Aeropuerto SCL"
                      value={destino}
                      onChange={(e) => setDestino(e.target.value)}
                    />
                  </div>
                </div>

                <div className="row mb-3">
                  <div className="col-md-6">
                    <label className="form-label text-muted small fw-bold">N° de pasajeros</label>
                    <input 
                      type="number" 
                      className="form-control" 
                      placeholder="1 a 50"
                      min="1"
                      max="50"
                      value={pasajeros}
                      onChange={(e) => setPasajeros(e.target.value)}
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label text-muted small fw-bold">Tipo de servicio</label>
                    <select 
                      className="form-select"
                      value={servicio}
                      onChange={(e) => setServicio(e.target.value)}
                    >
                      <option value="">Selecciona un servicio</option>
                      <option value="estandar">Estándar</option>
                      <option value="ejecutivo">Ejecutivo</option>
                      <option value="grupal">Grupal</option>
                    </select>
                  </div>
                </div>

                <div className="mb-4">
                  <label className="form-label text-muted small fw-bold">Fecha y hora del viaje</label>
                  <input 
                    type="datetime-local" 
                    className="form-control"
                    value={fechaHora}
                    onChange={(e) => setFechaHora(e.target.value)}
                  />
                </div>

                <button type="submit" className="btn btn-primary w-100 py-2 fw-semibold shadow-sm">
                  Solicitar viaje
                </button>
              </form>

            </div>
          </div>

        </div>
      </div>

      {/* Componente Footer reutilizable */}
      <Footer />
    </div>
  );
}