// Ejercicio 3 Usar children para crear un componente Card que contenga cualquier contenido.

const Card = ({ children }) => {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "20px",
        borderRadius: "10px",
        width: "300px",
        margin: "50px auto",
        boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
      }}
    >
      {children}
    </div>
  );
};

export default Card;