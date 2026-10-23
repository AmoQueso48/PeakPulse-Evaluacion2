import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Boton from '../components/Boton';
import imagenViaje from '../assets/viaje.jpg';

// Datos de ejemplo
const ordenDeViaje = [
  { etiqueta: 'Vehículo', valor: 'AB1234 · Mercedes BUS 400' },
  { etiqueta: 'Cliente', valor: 'Colegio San Andrés' },
  { etiqueta: 'Origen', valor: 'Las Condes' },
  { etiqueta: 'Destino', valor: 'Farellones' },
  { etiqueta: 'Horario', valor: 'Sábado 10:00 hrs' },
  { etiqueta: 'Servicio', valor: 'Transporte escolar (SR001)' },
];

const tiposDeNovedad = [
  'Retraso',
  'Falla mecánica',
  'Accidente o incidente',
  'Problema con pasajeros',
  'Otro',
];

export default function ConductorHome() {
  // -------------------------------------------------------------
  // ESTADOS DEL FORMULARIO DE NOVEDAD
  // -------------------------------------------------------------
  const [tipoNovedad, setTipoNovedad] = useState('');
  const [descripcion, setDescripcion] = useState('');

  // Función al enviar el reporte
  const handleReporteSubmit = (e) => {
    e.preventDefault();

    if (!tipoNovedad || !descripcion.trim()) {
      alert('⚠️ Por favor completa todos los campos para enviar el reporte.');
      return;
    }

    alert('¡Reporte enviado con éxito!');
    // Limpiamos los campos del formulario
    setTipoNovedad('');
    setDescripcion('');
  };

  return (
    <div className="d-flex flex-column min-vh-100 bg-light">
      <Header />

      {/* ==================== TÍTULO ==================== */}
      <div className="pp-hero mb-4">
        <div className="container">
          <h1 className="fw-bold mb-2">Tu próximo viaje</h1>
          <p className="lead m-0">
            Revisa el detalle de tu próxima orden de viaje y repórtanos cualquier novedad durante el trayecto
          </p>
        </div>
      </div>

      <main className="flex-grow-1">
        <div className="container pb-4">

          {/* ==================== ORDEN DE VIAJE + IMAGEN ==================== */}
          <div className="row g-4 align-items-center mt-1">
            <div className="col-md-6">
              <div className="card p-4 shadow-sm pp-card-accent">
                <h2 className="h4 fw-bold mb-3">Orden de viaje asignada</h2>
                <table className="table table-sm mb-0 pp-ticket">
                  <tbody>
                    {ordenDeViaje.map((fila) => (
                      <tr key={fila.etiqueta}>
                        <th scope="row" className="fw-normal text-muted py-2">{fila.etiqueta}</th>
                        <td className="text-end fw-semibold py-2">{fila.valor}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Imagen de Farellones / Cordillera */}
            <div className="col-md-6">
              <div className="card shadow-sm border-0 overflow-hidden">
                <img 
                  src={imagenViaje} 
                  alt="Vista de la cordillera desde la ventana del bus" 
                  className="card-img-top object-fit-cover"
                  style={{ height: '320px' }}
                />
              </div>
            </div>
          </div>

          {/* ==================== REPORTAR UNA NOVEDAD ==================== */}
          <section className="mt-5">
            <div className="card p-4 shadow-sm border-0">
              <h2 className="h4 fw-semibold mb-3">Reportar una novedad</h2>
              <form onSubmit={handleReporteSubmit}>
                <div className="mb-3">
                  <label htmlFor="tipoNovedad" className="form-label fw-medium">Tipo de novedad</label>
                  <select
                    id="tipoNovedad"
                    className="form-select"
                    value={tipoNovedad}
                    onChange={(e) => setTipoNovedad(e.target.value)}
                    required
                  >
                    <option value="" disabled>Selecciona una opción</option>
                    {tiposDeNovedad.map((tipo) => (
                      <option key={tipo} value={tipo}>{tipo}</option>
                    ))}
                  </select>
                </div>

                <div className="mb-3">
                  <label htmlFor="descripcion" className="form-label fw-medium">Cuéntanos qué ocurrió</label>
                  <textarea
                    id="descripcion"
                    className="form-control"
                    rows={3}
                    value={descripcion}
                    onChange={(e) => setDescripcion(e.target.value)}
                    placeholder="Describe brevemente la situación"
                    required
                  />
                </div>

                <Boton texto="Enviar reporte" type="submit" variant="danger" />
              </form>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}