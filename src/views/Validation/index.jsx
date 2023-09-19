import React, { useState } from "react";
import styled from "styled-components";
import logo from "../../assets/image/CFE-siglas.png";
import medidor from "../../assets/image/MEDIDOR.png";
import { sweetAlertClient } from "../../services/sweetAlertService";
import { validations } from "../../validations/validations";
import { getCurrentDate } from "../../services/getCurrentDate";
const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 113vh;
`;
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;

const FormContainer = styled.div`
  flex: 1; /* Toma todo el espacio disponible en el lado izquierdo */
  padding: 20px;
  margin-right: 20px; /* Espacio entre el formulario y la imagen */
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
`;

const Label = styled.label`
  font-size: 18px;
  margin-bottom: 8px;
`;

const Input = styled.input`
  font-size: 16px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 15px;
`;

const Button = styled.button`
  font-size: 18px;
  padding: 10px 20px;
  background-color: #008e60;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const ImageContainer = styled.div`
  flex: 1; /* Toma todo el espacio disponible en el lado derecho */
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
`;
const Logo = styled.img`
  max-width: 200px;
  margin-bottom: 20px;
`;

const Validation = () => {
  const [inputClient, setInputClient] = useState({
    name: "",
    dateCurrent: getCurrentDate(),
    numberService: "",
  });

  const [errorClient, setErrorClient] = useState({
    nameError: "",
    dateCurrentError: "",
    numberServiceError: "",
  });

  const [color, setColor] = useState("");

  function handleChanges(e) {
    const { name, value } = e.target;
    setInputClient({
      ...inputClient,
      [name]: value,
    });
  }
  // console.log("errorClient:", errorClient)

  function handleSubmit(e) {
    e.preventDefault();
    // Esta funcion me permite ejecutar la alerta y el cambio de color al tiempo
    function executeFunctions() {
      const errorClientResult = validations(inputClient, setColor);
      const sweetAlertResult = sweetAlertClient(errorClientResult);

      // Actualizar el estado de errorClient después de que ambas funciones hayan terminado
      setErrorClient(sweetAlertResult);
    }

    // Con todos los campos llenos puedo validar la información
    if (inputClient.name && inputClient.numberService) {
      executeFunctions();
    }
  }
  return (
    <PageWrapper>
      <Logo src={logo} alt="Logo" />

      <Container>
        <FormContainer>
          <Form onSubmit={(e) => handleSubmit(e)}>
            <Label>Nombre</Label>
            <Input
              type="text"
              name="name"
              value={inputClient.name}
              onChange={(e) => handleChanges(e)}
              placeholder="Escribe tu nombre"
              required
              /* Agrega aquí las propiedades del campo de formulario */
            />

            <Label>Fecha actual</Label>
            <Input
              type="date"
              name="dateCurrent"
              value={inputClient.dateCurrent}
              onChange={(e) => handleChanges(e)}
              required
              /* Agrega aquí las propiedades del campo de formulario */
            />

            <Label>No. de servicio</Label>
            <Input
              type="text"
              name="numberService"
              value={inputClient.numberService}
              onChange={(e) => handleChanges(e)}
              placeholder="Ingresa el no. de servicio"
              required
              /* Agrega aquí las propiedades del campo de formulario */
            />
            {inputClient.name && inputClient.numberService && (
              <Button type="submit">Validar Información</Button>
            )}
          </Form>
        </FormContainer>
        <ImageContainer style={{ backgroundColor: color }}>
          <Image src={medidor} alt="Medidor" />
          {/* <Image src={yourImage} alt="Tu imagen" /> */}
        </ImageContainer>
      </Container>
    </PageWrapper>
  );
};

export default Validation;
