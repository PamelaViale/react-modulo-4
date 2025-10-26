import Tarea from './Tarea'

const ListaTareas = ({ tareas, eliminarTarea }) => {
  return (
    <div>
      {tareas.length === 0 && <p>No hay tareas aún</p>}
      {tareas.map(t => (
        <Tarea key={t.id} tarea={t} eliminarTarea={eliminarTarea} />
      ))}
    </div>
  )
}

export default ListaTareas
