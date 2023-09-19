// Importa el componente "Link" de la biblioteca "react-router-dom" para crear enlaces de navegación.
import { Link } from "react-router-dom";

// Importa la biblioteca "styled-components" para crear componentes con estilos personalizados.
import styled from "styled-components";

// Define el componente NavbarWrapper con estilos personalizados para la barra de navegación.
export const NavbarWrapper = styled.nav`
  background-color: #008e60; /* Color de fondo de la barra de navegación */
  color: white; /* Color de texto de la barra de navegación */
  position: fixed; /* Fija la barra de navegación en la parte superior de la pantalla */
  top: 0; /* Coloca la barra de navegación en la parte superior de la pantalla */
  left: 0; /* Coloca la barra de navegación en la parte izquierda de la pantalla */
  right: 0; /* Coloca la barra de navegación en la parte derecha de la pantalla */
  padding: 10px 20px; /* Espaciado interno de la barra de navegación */
  display: flex; /* Usa un diseño flexible */
  justify-content: space-between; /* Distribuye el espacio entre los elementos a lo largo del eje principal */
  align-items: center; /* Centra verticalmente los elementos dentro de la barra de navegación */
  z-index: 1; /* Establece la capa z para controlar la superposición */
`;

// Define el componente Logo con estilos personalizados para el logotipo en la barra de navegación.
export const Logo = styled.img`
  max-width: 100px; /* Ajusta el tamaño máximo del logotipo */
`;

// Define el componente NavOptions con estilos personalizados para la lista de opciones de navegación.
export const NavOptions = styled.ul`
  list-style: none; /* Quita los marcadores de lista */
  display: flex; /* Usa un diseño flexible */
  gap: 20px; /* Espaciado entre las opciones de navegación */
`;

// Define el componente NavOption con estilos personalizados para cada opción de navegación.
export const NavOption = styled.li`
  font-size: 18px; /* Tamaño de fuente de las opciones de navegación */
`;

// Define el componente StyledLink con estilos personalizados para los enlaces de navegación.
export const StyledLink = styled(Link)`
  text-decoration: none; /* Quitamos la subrayado predeterminado de los enlaces */
  color: white; /* Cambiamos el color de fuente a blanco */
  font-size: 16px; /* Tamaño de fuente de los enlaces */
  &:hover {
    /* Cambiamos el color cuando el enlace está en hover */
    color: #013a52; /* Puedes ajustar el color hover según tus preferencias */
    cursor: pointer; /* Cambia el cursor a una mano en hover */
  }
`;
