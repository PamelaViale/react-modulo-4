import { useState } from 'react'
import InputMensaje from './InputMensaje'
import MostrarMensaje from './MostrarMensaje'

const Padre = () => {
  const [mensaje, setMensaje] = useState('')

  return (
    <div style={{ textAlign: 'center', marginTop: '40px' }}>
      <h2>Actividad 1: Mensaje compartido</h2>
      <InputMensaje mensaje={mensaje} setMensaje={setMensaje} />
      <MostrarMensaje mensaje={mensaje} />
    </div>
  )
}

export default Padre
