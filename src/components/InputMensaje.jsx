const InputMensaje = ({ mensaje, setMensaje }) => {
  return (
    <input
      type='text'
      placeholder='Escribí un mensaje...'
      value={mensaje}
      onChange={e => setMensaje(e.target.value)}
      style={{
        padding: '8px',
        borderRadius: '6px',
        border: '1px solid #ccc',
        marginBottom: '10px',
        width: '220px'
      }}
    />
  )
}

export default InputMensaje