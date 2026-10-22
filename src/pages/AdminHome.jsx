import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function AdminHome() {
  // Estados para los tres selectores de asignación
  const [viaje, setViaje] = useState('');
  const [vehiculo, setVehiculo] = useState('');
  const [conductor, setConductor] = useState('');

  // -------------------------------------------------------------
  // VALIDACIÓN CON JAVASCRIPT
  // -------------------------------------------------------------
  const handleAsignar = (e) => {
    e.preventDefault();

    // Validar que se hayan seleccionado las 3 opciones
    if (!viaje || !vehiculo || !conductor) {
      alert('⚠️ Error: Debes seleccionar un viaje, un vehículo y un conductor.');
      return;
    }

    // Si todo está completo
    alert('¡Vehículo y conductor asignados correctamente al viaje! 🚌✨');

    // Reiniciar selecciones
    setViaje('');
    setVehiculo('');
    setConductor('');
  };

  return (
    <div className="d-flex flex-column min-vh-100 bg-light">
      {/* Encabezado */}
      <Header />

      {/* Banner Principal: Panel de Administración */}
      <div
        className="text-white text-center py-5 mb-4 shadow-sm"
        style={{
          background: 'linear-gradient(135deg, #1de9b6 0%, #00b4d8 100%)'
        }}
      >
        <div className="container">
          <h1 className="fw-bold mb-2">Panel de administración</h1>
          <p className="lead m-0 opacity-75">
            Visión general de la operación: uso de la flota, estado de los vehículos y asignación de recursos
          </p>
        </div>
      </div>

      <div className="container flex-grow-1">
        {/* ================= TARJETAS DE ESTADÍSTICAS ================= */}
        <div className="row g-3 mb-5 text-center">
          <div className="col-md-3">
            <div className="card border-0 shadow-sm p-3">
              <h2 className="display-5 fw-normal text-dark mb-1">72%</h2>
              <span className="text-muted small">Utilización actual de la flota</span>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card border-0 shadow-sm p-3">
              <h2 className="display-5 fw-normal text-dark mb-1">18%</h2>
              <span className="text-muted small">Viajes con retraso</span>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card border-0 shadow-sm p-3">
              <h2 className="display-5 fw-normal text-dark mb-1">+15%</h2>
              <span className="text-muted small">Aumento en costo de combustible</span>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card border-0 shadow-sm p-3">
              <h2 className="display-5 fw-normal text-dark mb-1">22%</h2>
              <span className="text-muted small">Vehículos fuera de servicio</span>
            </div>
          </div>
        </div>

        {/* ================= FORMULARIO E IMAGEN ================= */}
        <div className="row g-4 align-items-center mb-5">
          {/* Columna Izquierda: Formulario de Asignación */}
          <div className="col-lg-6">
            <div className="card p-4 shadow-sm border-0 border-top border-4 border-info">
              <h3 className="text-center mb-4 fw-semibold text-secondary">
                Asignar vehículo y conductor
              </h3>

              <form onSubmit={handleAsignar}>
                <div className="mb-3">
                  <label className="form-label text-muted small fw-bold">Viaje pendiente</label>
                  <select
                    className="form-select"
                    value={viaje}
                    onChange={(e) => setViaje(e.target.value)}
                  >
                    <option value="">Selecciona un viaje solicitado</option>
                    <option value="1">Providencia ➔ Aeropuerto SCL (10:00 AM)</option>
                    <option value="2">Santiago Centro ➔ Viña del Mar (14:30 PM)</option>
                    <option value="3">Las Condes ➔ Rancagua (18:00 PM)</option>
                  </select>
                </div>

                <div className="row mb-3">
                  <div className="col-md-6">
                    <label className="form-label text-muted small fw-bold">Vehículo disponible</label>
                    <select
                      className="form-select"
                      value={vehiculo}
                      onChange={(e) => setVehiculo(e.target.value)}
                    >
                      <option value="">Selecciona un vehículo</option>
                      <option value="bus-01">Bus MAN VIP #A41</option>
                      <option value="bus-02">Mercedes-Benz Sprinter #B12</option>
                      <option value="bus-03">Volvo B11R #C05</option>
                    </select>
                  </div>

                  <div className="col-md-6">
                    <label className="form-label text-muted small fw-bold">Conductor</label>
                    <select
                      className="form-select"
                      value={conductor}
                      onChange={(e) => setConductor(e.target.value)}
                    >
                      <option value="">Selecciona un conductor</option>
                      <option value="c1">Juan Pérez</option>
                      <option value="c2">Carlos Gómez</option>
                      <option value="c3">María González</option>
                    </select>
                  </div>
                </div>

                <button type="submit" className="btn btn-primary px-4 mt-2 shadow-sm">
                  Asignar
                </button>
              </form>
            </div>
          </div>

          {/* Columna Derecha: Imagen del Bus */}
          <div className="col-lg-6">
            <div className="card shadow-sm border-0 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=800&q=80"
                alt="Bus de transporte"
                className="card-img-top object-fit-cover"
                style={{ height: '360px' }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Pie de página */}
      <Footer />
    </div>
  );
}