import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Boton from '../components/Boton';

// Datos de ejemplo. Más adelante se pueden reemplazar por datos reales de una API.
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

    alert('¡Reporte enviado con éxito!');
    // Limpiamos los campos del formulario
    setTipoNovedad('');
    setDescripcion('');
  };

  return (
    <>
      <Header />

      <main className="flex-grow-1">
        <div className="container container-viaje py-4">
          {/* ==================== TÍTULO ==================== */}
          <h1 className="h2 fw-semibold">Tu próximo viaje</h1>
          <p className="text-muted">
            Revisa el detalle de tu próxima orden de viaje y repórtanos cualquier novedad durante el trayecto
          </p>

          {/* ==================== ORDEN DE VIAJE + IMAGEN ==================== */}
          <div className="row g-4 align-items-center mt-1">
            <div className="col-md-6">
              <h2 className="h4 fw-semibold mb-3">Orden de viaje asignada</h2>
              <table className="table table-sm mb-0">
                <tbody>
                  {ordenDeViaje.map((fila) => (
                    <tr key={fila.etiqueta}>
                      <th scope="row" className="fw-normal text-muted">{fila.etiqueta}</th>
                      <td className="text-end fw-semibold">{fila.valor}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="col-md-6">
              {/* Para usar una imagen real: guárdala en src/assets/viaje.jpg,
                  impórtala arriba (import imagenViaje from '../assets/viaje.jpg')
                  y reemplaza este bloque por:
                  <img src={imagenViaje} alt="Ruta del viaje" className="img-fluid rounded" /> */}
              <div className="ratio ratio-1x1 bg-light border rounded">
                <div className="d-flex align-items-center justify-content-center text-muted">
                  Imagen del viaje
                </div>
              </div>
            </div>
          </div>

          {/* ==================== REPORTAR UNA NOVEDAD ==================== */}
          <section className="mt-5">
            <h2 className="h4 fw-semibold mb-3">Reportar una novedad</h2>
            <form onSubmit={handleReporteSubmit}>
              <div className="mb-3">
                <label htmlFor="tipoNovedad" className="form-label">Tipo de novedad</label>
                <select
                  id="tipoNovedad"
                  className="form-select w-auto"
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
                <label htmlFor="descripcion" className="form-label">Cuéntanos qué ocurrió</label>
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

              <Boton texto="Enviar reporte" type="submit" />
            </form>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}