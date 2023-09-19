// Función para obtener la fecha actual en formato "YYYY-MM-DD"
export function getCurrentDate() {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0"); // Agrega ceros a la izquierda si es necesario
  const day = String(today.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}
