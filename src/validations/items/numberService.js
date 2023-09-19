export function validationNumberService(foundName, information) {
  let numberServiceError = '';

  if (foundName && !information.numberService.length) {
    numberServiceError = `Debes ingresar un número de servicio`;
  } else if (foundName && Number(foundName.numberService) !== Number(information.numberService)) {
    numberServiceError = 'El número de servicio no coincide con el registro.';
  }
  
  return numberServiceError;
}