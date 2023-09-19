import sweetAlert from "sweetalert2";

export function sweetAlertClient(errorClient) {
  const { nameError, dateCurrentError, numberServiceError } = errorClient;

  if (nameError || dateCurrentError || numberServiceError) {
    sweetAlert.fire({
      title: "Errores de validación",
      icon: "error",
      html: `
        <p>${nameError || ""}</p>
        <p>${dateCurrentError || ""}</p>
        <p>${numberServiceError || ""}</p>
      `,
    });
  }
}

export function sweetAlertService(inputDate) {
  const { name, limitPay, fechaDeCorte, numberService, totalPay } = inputDate;

  if (!name || !limitPay || !fechaDeCorte || !numberService || !totalPay) {
    sweetAlert.fire({
      title: "Errores de validación",
      icon: "error",
      html: `
        <p>${"Debes de llenar todos los campos" || ""}</p>
      `,
    });
  } else {
    sweetAlert.fire(
      "Validación exitosa",
      "Los datos han sido registrados correctamente.",
      "success"
    );
  }
}
