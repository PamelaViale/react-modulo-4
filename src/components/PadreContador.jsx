import { useState } from 'react'
import BotonSumar from './BotonSumar'
import BotonRestar from './BotonRestar'
import MostrarContador from './MostrarContador'

const PadreContador = () => {
  const [contador, setContador] = useState(0)

  return (
    <div style={{ textAlign: 'center', marginTop: '40px' }}>
      <h2>Actividad 2: Contador compartido</h2>
      <MostrarContador contador={contador} />
      <div style={{ marginTop: '10px' }}>
        <BotonSumar setContador={setContador} />
        <BotonRestar setContador={setContador} />
      </div>
    </div>
  )
}

export default PadreContador
