// Funciones para añadir al alfabeto variables
function addCaracters(alfabeto, elemento_capturado, caracteres) {
  if (elemento_capturado.checked) {
    alfabeto += caracteres
  }
  else {
    alfabeto = alfabeto.replace(caracteres, "")
  }
  return alfabeto;
}
//Exportamos a nuestro script
export { addCaracters }