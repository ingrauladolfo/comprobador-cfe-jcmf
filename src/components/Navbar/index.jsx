// Importa la biblioteca React para definir componentes de React.
import React from "react";

// Importa el componente "Link" de la biblioteca "react-router-dom" para crear enlaces de navegación.
import { Link } from "react-router-dom";

// Importa una imagen del directorio de activos.
import logo from "../../assets/image/LOGO.jpeg";

// Importa componentes y estilos desde "./styles".
import {
  Logo,
  NavOption,
  NavOptions,
  NavbarWrapper,
  StyledLink,
} from "./styles";

// Importa los datos desde el archivo data.json.
import data from "../../data/navbarTitles.json";

// Define el componente Navbar.
const Navbar = () => {
  return (
    <NavbarWrapper>
      {/* Crea un enlace que envuelve el logotipo y puede ser utilizado para la navegación. */}
      <Link>
        <Logo src={logo} alt="CFE" />
      </Link>
      {/* Crea una lista de opciones de navegación en la barra de navegación. */}
      <NavOptions>
        {/* Mapea los datos desde data.json para generar las opciones de navegación. */}
        {data.map((item) => (
          // Asigna una clave única a cada opción de navegación.
          <NavOption key={item.id}>
            {/* Crea un enlace de navegación que utiliza la ruta especificada en los datos. */}
            <StyledLink to={item.link}>{item.name}</StyledLink>
          </NavOption>
        ))}
      </NavOptions>
    </NavbarWrapper>
  );
};

// Exporta el componente Navbar como el componente principal de este archivo.
export default Navbar;
