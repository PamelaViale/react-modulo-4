
// Ejercicio 4 Combinar Card, Input y Button para crear LoginForm.
import Card from "./CardTemp";
import Input from "./Input";
import Button from "./ButtonTemp";

const LoginForm = () => {
  return (
    <Card>
      <h2>Login</h2>
      <Input type="email" placeholder="Email" />
      <Input type="password" placeholder="Contraseña" />
      <Button label="Iniciar sesión" />
    </Card>
  );
};

export default LoginForm;