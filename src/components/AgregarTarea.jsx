import { useState } from 'react'

const AgregarTarea = ({ setTareas }) => {
  const [nuevaTarea, setNuevaTarea] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    if (!nuevaTarea.trim()) return
    setTareas(prev => [...prev, { id: Date.now(), texto: nuevaTarea }])
    setNuevaTarea('')
  }

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <input
        type='text'
        placeholder='Nueva tarea...'
        value={nuevaTarea}
        onChange={e => setNuevaTarea(e.target.value)}
        style={{
          padding: '8px',
          borderRadius: '6px',
          border: '1px solid #ccc',
          marginRight: '10px'
        }}
      />
      <button
        type='submit'
        style={{
          backgroundColor: '#1976d2',
          color: 'white',
          border: 'none',
          borderRadius: '6px',
          padding: '8px 12px',
          cursor: 'pointer'
        }}
      >
        Agregar
      </button>
    </form>
  )
}

export default AgregarTarea
