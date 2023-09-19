// Importa la biblioteca React, que se utilizará en este componente.
import React from "react";

// Importa componentes y utilidades relacionados con enrutamiento desde la biblioteca "react-router-dom".
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Importa el componente RegisterService desde el directorio "../views".
import RegisterService from "../views/RegisterService";

// Importa el componente MainPage desde el directorio "../views".
import MainPage from "../views";

// Importa el componente Navbar desde el directorio "../components".
import Navbar from "../components/Navbar";

// Importa el componente Validation desde el directorio "../views".
import Validation from "../views/Validation";

// Define un componente de función llamado MainRoutes y lo exporta como el componente principal de este archivo.
function MainRoutes() {
  return (
    // Inicia el componente Router, que establece el contexto de enrutamiento para la aplicación.
    <Router>
      {/* Renderiza el componente Navbar, que probablemente es la barra de navegación de la aplicación. */}
      <Navbar />

      {/* Inicia el componente Routes, que contiene las rutas de la aplicación. */}
      <Routes>
        {/* Define una ruta para la raíz de la aplicación ("/") y asigna el componente MainPage a su propiedad "element". Esta ruta probablemente se usa cuando se abre la aplicación. */}
        <Route path="/" element={<MainPage />} />

        {/* Define una ruta para "/register-service" y asigna el componente RegisterService a su propiedad "element". Esta ruta parece utilizarse para guardar información. */}
        <Route path="/register-service" element={<RegisterService />} />

        {/* Define una ruta para "/validation" y asigna el componente Validation a su propiedad "element". Esta ruta aparentemente se utiliza para validar la información guardada. */}
        <Route path="/validation" element={<Validation />} />
      </Routes>
      {/* Fin del componente Routes, que contiene las rutas de la aplicación. */}
    </Router>
  );
}

// Exporta el componente MainRoutes como el componente principal de este archivo.
export default MainRoutes;
