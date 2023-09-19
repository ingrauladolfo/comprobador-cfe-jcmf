import moment from "moment-with-locales-es6";
import { Colors } from "../../services/colors";
// Establece la configuración regional en español
moment.locale("es");

export function validationDate(foundName, information, setColor) {
  let dateCurrentError = "";

  if (foundName) {
    const currentDay = moment().format("YYYY-MM-DD");
    const limiteDePago = moment(foundName.limitPay);
    const fechaDeCorte = moment(foundName.fechaDeCorte);
    const inputCurrentDay = moment(information.dateCurrent);

    //* SE OBTIENE EL ÚLTIMO DÍA DE PAGO
    const diaDePago = foundName.limitPay[8] + foundName.limitPay[9];
    //* SE OBTIENE EL MES DE PAGO
    const mesDePago = moment(foundName.limitPay).format("MMMM");
    //* SE OBTIENE EL VALOR A PAGAR
    const totalPay = foundName.totalPay;

    //? SE VALIDAN LAS FECHAS
    if (limiteDePago.isAfter(inputCurrentDay)) {
      //*  2020-05-16     >      2023-09-15
      dateCurrentError = `Tu fecha limite es el día ${diaDePago} de ${mesDePago} por un valor de $ ${totalPay}`; //OK
      // setColor('#008e60');//VERDE
      setColor(Colors[0]); //VERDE
    } else if (inputCurrentDay.isSame(limiteDePago, "day")) {
      //*  inputCurrentDay  ===   limiteDePago
      dateCurrentError = `Hoy es la fecha limite, el total a pagar es $ ${totalPay}`; //OK
      setColor(Colors[1]); //AMARILLIO
    } else if (
      inputCurrentDay.isAfter(limiteDePago) &&
      inputCurrentDay.isSame(fechaDeCorte, "day")
    ) {
      //*  inputCurrentDay    >    limiteDePago  && inputCurrentDay  ===  fechaDeCorte
      dateCurrentError = `A partir de hoy se vence tu recibo, recuerda pagarlo`; //OK
      setColor(Colors[3]); //NARANJA
    } else if (
      inputCurrentDay.isAfter(fechaDeCorte) ||
      inputCurrentDay.isAfter(currentDay)
    ) {
      //* inputCurrentDay    >    fechaDeCorte
      dateCurrentError = `Tu recibo se encuentra vencido, recuerda pagarlo`; //OK
      setColor(Colors[2]); //ROJO
    }
  }

  return dateCurrentError;
}
