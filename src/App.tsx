import { useEffect, useState } from 'react'
import Header from './components/Header/Header'
import GuideForm from './components/GuideForm/GuideForm'
import type { Guide } from './types/Guide'
import GuideList from './components/GuideList/GuideList'
import StatusPanel from './components/StatusPanel/StatusPanel'
import Footer from './components/Footer/Footer'
function App() {
const [guides, setGuides] = useState<Guide[]>(() => {
const savedGuides = localStorage.getItem('hound-guides')
  return savedGuides ? JSON.parse(savedGuides) : []
})
useEffect(() => {
  localStorage.setItem('hound-guides', JSON.stringify(guides))
}, [guides])
  const addGuide = (guide: Guide) => {
      setGuides([...guides, guide])//toma todas las guias que existen y agrega una nueva  
  }
  // console.log(guides)
    // Cambia el estado de una guía usando su número
  const changeGuideStatus = (numeroGuia: number) => {
    // Actualizamos el arreglo de guías
    // previousGuides contiene las guías que tenemos actualmente
    setGuides((previousGuides) =>
      // Recorremos todas las guías para encontrar la que queremos modificar
      previousGuides.map((guide) => {
        // Si no es la guía buscada, la dejamos igual
        // También evitamos modificar una guía que ya fue entregada
        if (guide.numeroGuia !== numeroGuia || guide.estado === 'Entregado') {
          return guide
        }
        // Definimos el siguiente estado:
        // Pendiente → En tránsito
        // En tránsito → Entregado
        const nuevoEstado =
          guide.estado === 'Pendiente' ? 'En tránsito' : 'Entregado'
        // Guardamos la fecha y hora del cambio
        const fechaCambio = new Date().toLocaleString()
        // Devolvemos una copia de la guía con los datos actualizados
        return {
          ...guide, // Conservamos las propiedades que no cambiaron
          estado: nuevoEstado, // Actualizamos el estado
          fecha: fechaCambio, // Actualizamos la fecha
          // Conservamos el historial anterior y agregamos el nuevo movimiento
          historial: [
            ...guide.historial,//copia todas las propiedades de guide en un objeto nuevo y actualiza las que se indican
            {
              fechaCambio, // Cuándo ocurrió el cambio
              estadoAnterior: guide.estado, // Estado antes del cambio
              estadoNuevo: nuevoEstado, // Estado después del cambio
            },
          ],
        }
      }),
    )
  }
  return (
    // Fragment:<></> agrupa elementos sin crear un div extra en el HTML.
  <>
  <Header />
  <main>
  {/* Contenedor del formulario y el panel de estado */}
    <section className="container">
      <GuideForm guides={guides} onAddGuide={addGuide} />
      <StatusPanel guides={guides} />
    </section>
    <GuideList
    guides={guides}
    onChangeStatus={changeGuideStatus}
    />
  </main>
  <Footer />
  </>
  )
}

export default App