import React, { useState } from "react";
import logo from "../../assets/image/CFE-siglas.png";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Form,
  FormGroup,
  Input,
  Label,
  Logo,
  PageWrapper,
} from "./styles";
import { sweetAlertService } from "../../services/sweetAlertService";
import { getCurrentDate } from "../../services/getCurrentDate";

const RegisterService = () => {
  const navigate = useNavigate();
  const [inputDate, setInputDate] = useState({
    name: "",
    limitPay: getCurrentDate(),
    fechaDeCorte: getCurrentDate(),
    numberService: 0, //* NUMERO DE SERVICIO
    totalPay: 0,
  });

  function handleChanges(e) {
    setInputDate({
      ...inputDate,
      [e.target.name]: e.target.value,
    });
  }

  const [elementos, setElementos] = useState(
    JSON.parse(localStorage.getItem("reciboData")) || []
  );

  function handleSubmit(e) {
    e.preventDefault();
    sweetAlertService(inputDate);
    // Agregar el nuevo elemento a la lista existente
    const nuevaLista = [...elementos, inputDate];
    setElementos(nuevaLista);

    // Guardar en el localStorage
    localStorage.setItem("reciboData", JSON.stringify(nuevaLista));
    navigate("/");
    setInputDate(inputDate);
  }

  return (
    <PageWrapper>
      <Logo src={logo} alt="Logo" />
      <Form onSubmit={(e) => handleSubmit(e)}>
        <FormGroup>
          <Label>Nombre</Label>
          <Input
            type="text"
            name="name"
            value={inputDate.name}
            onChange={(e) => handleChanges(e)}
            placeholder="Inserte su nombre"
            required
          />
        </FormGroup>
        <FormGroup>
          <Label>Fecha de límite de pago</Label>
          <Input
            type="date"
            name="limitPay"
            value={inputDate.limitPay}
            onChange={(e) => handleChanges(e)}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label>Fecha de corte de servicio</Label>
          <Input
            type="date"
            name="fechaDeCorte"
            value={inputDate.fechaDeCorte}
            onChange={(e) => handleChanges(e)}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label>No. de servicio</Label>
          <Input
            type="number"
            name="numberService"
            value={inputDate.numberService}
            onChange={(e) => handleChanges(e)}
            placeholder="Inserte el no. de servicio"
            required
          />
        </FormGroup>
        <FormGroup>
          <Label>Total a pagar</Label>
          <Input
            type="number"
            name="totalPay"
            value={inputDate.totalPay}
            onChange={(e) => handleChanges(e)}
            placeholder="Total a pagar"
            required
          />
        </FormGroup>

        <Button type="submit">Enviar</Button>
      </Form>
    </PageWrapper>
  );
};

export default RegisterService;
