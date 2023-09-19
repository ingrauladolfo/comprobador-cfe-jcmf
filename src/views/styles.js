// Importa el componente "Link" de la biblioteca "react-router-dom" para crear enlaces de navegación.
import { Link } from "react-router-dom";

// Importa la biblioteca "styled-components" para crear componentes con estilos personalizados.
import styled from "styled-components";

// Define el componente del Logo con estilos personalizados.
export const Logo = styled.img`
  max-width: 200px; /* Ajusta el tamaño del logo según tus necesidades */
`;

// Define el componente del Texto de Bienvenida con estilos personalizados.
export const WelcomeText = styled.p`
  font-size: 24px;
  text-align: center;
`;

// Define el componente de contenedor de botones con estilos personalizados.
export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

// Define el componente de botón "Register" con estilos personalizados.
export const ButtonRegister = styled.button`
  padding: 10px 20px;
  font-size: 18px;
  background-color: #007bff; /* Color de fondo */
  color: white; /* Color de texto */
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #007bff; /* Cambia el color de fondo en hover */
  }
`;

// Define el componente de botón "Validation" con estilos personalizados.
export const ButtonValidation = styled.button`
  padding: 10px 20px;
  font-size: 18px;
  background-color: #008e60; /* Color de fondo */
  color: white; /* Color de texto */
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #006644; /* Cambia el color de fondo en hover */
  }
`;

// Define el componente de enlace personalizado con estilos.
export const StyledLink = styled(Link)`
  text-decoration: none; /* Quitamos la subrayado predeterminado */
  color: white; /* Cambiamos el color de fuente a negro */
  font-size: 16px;
  &:hover {
    /* Cambiamos el color cuando el enlace está en hover */
    color: black; /* Puedes ajustar el color hover según tus preferencias */
    cursor: pointer;
  }
`;
