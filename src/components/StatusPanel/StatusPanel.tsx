import type { Guide } from '../../types/Guide'
// Definimos los datos que recibirá el componente
interface StatusPanelProps {
  guides: Guide[]
}
// Recibimos el arreglo de guías desde App.tsx
function StatusPanel({ guides }: StatusPanelProps) {
  // Contamos todas las guías registradas
  const totalGuias = guides.length
  // Contamos las guías cuyo estado es "Pendiente"
  const guiasPendiente = guides.filter(
    (guide) => guide.estado === 'Pendiente'
  ).length
  // Contamos las guías cuyo estado es "En tránsito"
  const guiasTransito = guides.filter(
    (guide) => guide.estado === 'En tránsito'
  ).length
  // Contamos las guías cuyo estado es "Entregado"
  const guiasEntregadas = guides.filter(
    (guide) => guide.estado === 'Entregado'
  ).length
  return (
    <article id="estado-general" className="container__panel">
      <fieldset>
        <legend>PANEL DEL ESTADO GENERAL</legend>
        <label>Número total de guías activas:</label>
        <label id="guiaActiva">{totalGuias}</label>
        <br />
         <label>Guías Pendientes:</label>
        <label id="guiaPendiente">{guiasPendiente}</label>
        <br />
        <label>Guías en tránsito:</label>
        <label id="guiaTransito">{guiasTransito}</label>
        <br />
        <label>Guías entregadas:</label>
        <label id="guiaEntregada">{guiasEntregadas}</label>
      </fieldset>
    </article>
  )
}

export default StatusPanel