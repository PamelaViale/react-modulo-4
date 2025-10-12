// Ejercicio 1 Crear un componente Input con props placeholder y type.


const Input = ({ placeholder, type = "text" }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      style={{
        display: "block",
        width: "100%",
        marginBottom: "10px",
        padding: "8px",
        border: "1px solid #ccc",
        borderRadius: "6px",
      }}
    />
  );
};

export default Input;