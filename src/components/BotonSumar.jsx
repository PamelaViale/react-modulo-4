const BotonSumar = ({ setContador }) => {
  return (
    <button
      onClick={() => setContador(c => c + 1)}
      style={{
        margin: '5px',
        padding: '8px 12px',
        backgroundColor: '#4caf50',
        color: 'white',
        border: 'none',
        borderRadius: '6px',
        cursor: 'pointer'
      }}
    >
      + Sumar
    </button>
  )
}

export default BotonSumar
