import type { Guide } from '../../types/Guide'
import { useState } from 'react'
interface GuideListProps {
  guides: Guide[]
    // Función que recibe el número de guía y modifica su estado
  onChangeStatus: (numeroGuia: number) => void
}

function GuideList({ guides, onChangeStatus }: GuideListProps) {
    const [selectedGuide, setSelectedGuide] = useState<Guide | null>(null)//para usar una ventada para el historial de guias
    // Muestra los cambios de estado de una guía en un alert
   /* const showHistory = (guide: Guide) => {
        // Si la guía no tiene movimientos, mostramos un aviso
        if (guide.historial.length === 0) {
            alert('Esta guía no tiene actualizaciones')
            return
        }
        // Creamos el encabezado del mensaje
        let mensaje = `Historial de la guía: ${guide.numeroGuia}\n\n`
        // Recorremos cada movimiento guardado en el historial
        guide.historial.forEach((movimiento) => {
            mensaje += `Fecha: ${movimiento.fechaCambio}\n`
            mensaje += `De: ${movimiento.estadoAnterior}\n`
            mensaje += `A: ${movimiento.estadoNuevo}\n\n`
        })
        // Mostramos el historial completo
        alert(mensaje)
    }*/
    const showHistory = (guide: Guide) => {
        setSelectedGuide(guide)
    }
    return (
        <>
        <article id="lista-guias" className="container__guias">
            <form>
            <fieldset className="guias__lista">
                <legend>LISTA DE GUÍAS</legend>

                <table>
                <thead>
                    <tr>
                    <th>Número de guía</th>
                    <th>Estado actual</th>
                    <th>Destinatario</th>
                    <th>Origen</th>
                    <th>Destino</th>
                    <th>Última actualización</th>
                    <th colSpan={2}>Modificar Estado</th>
                    </tr>
                </thead>

                <tbody>
                    {/* Aquí se muestran las guías con React */}
                    {guides.map((guide) => (
                        <tr key={guide.numeroGuia}>
                        <td data-titulo="Número de guía">{guide.numeroGuia}</td>
                        <td data-titulo="Estado actual">{guide.estado}</td>
                        <td data-titulo="Destinatario">{guide.destinatario}</td>
                        <td data-titulo="Origen">{guide.origen}</td>
                        <td data-titulo="Destino">{guide.destino}</td>
                        <td data-titulo="Última actualización">{guide.fecha}</td>
                        {/* Icono para cambiar el estado de la guía */}
                        <td data-titulo="Modificar estado"><img src="/img/modificar.png" alt="Modificar estado" className="btnMod" onClick={() => onChangeStatus(guide.numeroGuia)}/> </td>
                        {/* Botón del historial: lo conectaremos después */}
                        <td data-titulo="Historial"><button type="button" className="btnHistorial" onClick={() => showHistory(guide)}>Mostrar historial</button></td>
                        </tr>
                    ))}
                </tbody>
                </table>

                <button type="button">Actualizar</button>
            </fieldset>
            </form>
        </article>  
    {selectedGuide && (
      <div className="historial-overlay">
        <div className="historial-modal">
          <h2>Historial de la guía: {selectedGuide.numeroGuia}</h2>

          {selectedGuide.historial.length === 0 ? (
            <p>Esta guía no tiene actualizaciones.</p>
          ) : (
            selectedGuide.historial.map((movimiento, index) => (
              <div key={index}>
                <p>Fecha: {movimiento.fechaCambio}</p>
                <p>De: {movimiento.estadoAnterior}</p>
                <p>A: {movimiento.estadoNuevo}</p>
              </div>
            ))
          )}

          <button type="button" onClick={() => setSelectedGuide(null)}>
            Cerrar
          </button>
        </div>
      </div>
    )}
  </>
)
}

export default GuideList