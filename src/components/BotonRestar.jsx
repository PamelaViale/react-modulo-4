const BotonRestar = ({ setContador }) => {
  return (
    <button
      onClick={() => setContador(c => c - 1)}
      style={{
        margin: '5px',
        padding: '8px 12px',
        backgroundColor: '#f44336',
        color: 'white',
        border: 'none',
        borderRadius: '6px',
        cursor: 'pointer'
      }}
    >
      - Restar
    </button>
  )
}

export default BotonRestar
