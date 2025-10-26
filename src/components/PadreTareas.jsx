import { useState } from 'react'
import AgregarTarea from './AgregarTarea'
import ListaTareas from './ListaTareas'

const PadreTareas = () => {
  const [tareas, setTareas] = useState([])

  const eliminarTarea = id => {
    setTareas(prev => prev.filter(t => t.id !== id))
  }

  return (
    <div style={{ textAlign: 'center', marginTop: '40px' }}>
      <h2>Actividad 3: Lista de tareas</h2>
      <AgregarTarea setTareas={setTareas} />
      <ListaTareas tareas={tareas} eliminarTarea={eliminarTarea} />
    </div>
  )
}

export default PadreTareas
