import React from "react";
import logo from "../assets/image/CFE-siglas.png";

// Importa componentes y estilos desde "./styles".
import {
  ButtonRegister,
  ButtonValidation,
  ButtonWrapper,
  Logo,
  StyledLink,
  WelcomeText,
} from "./styles";

// Define el componente MainPage.
const MainPage = () => {
  return (
    <div>
      {/* Renderiza el logotipo */}
      <Logo src={logo} alt="Logo" />

      {/* Renderiza un mensaje de bienvenida */}
      <WelcomeText>Bienvenido a la CFE</WelcomeText>

      {/* Renderiza los botones con enlaces personalizados */}
      <ButtonWrapper>
        <ButtonValidation>
          {/* Crea un enlace que lleva a la ruta "/validation" */}
          <StyledLink to="/validation">Verificar </StyledLink>
        </ButtonValidation>
        <ButtonRegister>
          {/* Crea un enlace que lleva a la ruta "/register-service" */}
          <StyledLink to="/register-service">Registrar </StyledLink>
        </ButtonRegister>
      </ButtonWrapper>
    </div>
  );
};

// Exporta el componente MainPage como el componente principal de este archivo.
export default MainPage;
