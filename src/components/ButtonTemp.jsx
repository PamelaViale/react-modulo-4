// Ejercicio 2 Crear un Button con prop disabled y cambiar el color si está desactivado.

// const Button = ({ label = "Enviar", disabled = false }) => {
//   return (
//     <button
//       disabled={disabled}
//       style={{
//         backgroundColor: disabled ? "#999" : "#007bff",
//         color: "white",
//         padding: "8px 16px",
//         border: "none",
//         borderRadius: "6px",
//         cursor: disabled ? "not-allowed" : "pointer",
//         width: "100%",
//       }}
//     >
//       {label}
//     </button>
//   );
// };

// export default Button;

// Ejercicio 5 Agregar una prop variant al botón con estilos distintos (primary, secondary, danger).

const Button = ({ label = "Enviar", disabled = false, variant = "primary" }) => {
  const colors = {
    primary: "#007bff",
    secondary: "#6c757d",
    danger: "#dc3545",
  };

  const backgroundColor = disabled ? "#999" : colors[variant] || colors.primary;

  return (
    <button
      disabled={disabled}
      style={{
        backgroundColor,
        color: "white",
        padding: "8px 16px",
        border: "none",
        borderRadius: "6px",
        cursor: disabled ? "not-allowed" : "pointer",
        width: "100%",
      }}
    >
      {label}
    </button>
  );
};

export default Button;