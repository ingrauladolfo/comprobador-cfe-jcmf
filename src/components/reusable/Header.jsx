// Header.js

import React from "react"; // Importa la biblioteca React.
import { useLocation } from "react-router-dom"; // Importa el hook useLocation de react-router-dom para obtener la ubicación actual.
import { Helmet, HelmetProvider } from "react-helmet-async"; // Importa Helmet y HelmetProvider desde react-helmet-async, que se utiliza para gestionar etiquetas de encabezado HTML de forma asincrónica.
import { routeToTitle } from "../../data/routesTitles"; // Importa un módulo (rutaToTitle) desde un directorio relativo. Ajusta la ruta de importación según tu estructura de carpetas.

function Header() {
  const location = useLocation(); // Utiliza el hook useLocation para obtener la ubicación actual de la página.

  // Función para obtener el título de la página actual
  const getPageTitle = () => {
    const title = routeToTitle[location.pathname]; // Obtiene el título correspondiente a la ubicación actual desde un objeto routeToTitle.
    return title ? title : "CFE"; // Devuelve el título correspondiente o "CFE" como título predeterminado si no se encuentra un título específico.
  };

  return (
    <header>
      {/* Utiliza HelmetProvider para proporcionar el contexto de React Helmet */}
      <HelmetProvider>
        {/* Utiliza Helmet para cambiar el título de la pestaña del navegador */}
        <Helmet>
          <title>{getPageTitle()}</title>{" "}
          {/* Establece el título de la pestaña del navegador utilizando el resultado de la función getPageTitle(). */}
        </Helmet>
      </HelmetProvider>
    </header>
  );
}

export default Header; // Exporta el componente Header como el componente predeterminado de este archivo.
