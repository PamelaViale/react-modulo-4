const Tarea = ({ tarea, eliminarTarea }) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '10px',
        marginBottom: '8px'
      }}
    >
      <span>{tarea.texto}</span>
      <button
        onClick={() => eliminarTarea(tarea.id)}
        style={{
          backgroundColor: '#e53935',
          color: 'white',
          border: 'none',
          borderRadius: '6px',
          padding: '4px 8px',
          cursor: 'pointer'
        }}
      >
        Eliminar
      </button>
    </div>
  )
}

export default Tarea
