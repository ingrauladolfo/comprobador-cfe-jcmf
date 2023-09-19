import { validationNumberService } from "./items/numberService";
import { validationDate } from "./items/date";

export function validations(information, setColor) {
  const error = {};
  const info = JSON.parse(localStorage.getItem("reciboData"));

  //* Validación del campo 'name'
  const foundName = info.find((el) => {
    return el.name.toLowerCase() === information.name.toLowerCase();
  });

  if (!foundName) {
    error.nameError = "Debes ingresar apellidos y nombres completos";
  }

  //? SE VALIDAN LAS FECHAS
  error.dateCurrentError = validationDate(foundName, information, setColor);

  //* Validación del campo 'numberService'
  error.numberServiceError = validationNumberService(foundName, information);

  return error;
}
