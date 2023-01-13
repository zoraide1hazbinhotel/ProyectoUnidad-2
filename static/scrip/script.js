//Importar cifrado Cesar y funcion addCaracters
import { cifrar, descifrar } from "../modules/cifradoCesar.js";
import { addCaracters } from "../modules/utils.js"

let alfabeto = "abcdefghijklmnñopqrstuvwxyz";

// Escuchar a los checkbox
let opcion_numero = document.getElementById("opcion_numero")
let opcion_mayuscula = document.getElementById("opcion_mayuscula")
let opcion_signos = document.getElementById("opcion_signos")


//añadimos elementos a nuestro alfabeto
opcion_numero.addEventListener("change", function() {
  alfabeto = addCaracters(alfabeto, opcion_numero, "0123456789")

})

opcion_mayuscula.addEventListener("change", function() {
  alfabeto = addCaracters(alfabeto, opcion_mayuscula, "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ")

})

opcion_signos.addEventListener("change", function() {
  alfabeto = addCaracters(alfabeto, opcion_signos, " #$/()[]*-+")
})

// capturar palabra descifrada y contraseña

let button_buscar = document.getElementById("button_buscar")
let button_desencriptar = document.getElementById("button_desencriptar")

button_buscar.addEventListener("click", function() {
  let input_palabraInicial = document.getElementById("input_palabraInicial")
  let contrasena = document.getElementById("input_nuevaContraseña")

  let texto_plano = input_palabraInicial.value
  let clave = parseInt(contrasena.value)
  //capturar la contraseña en formato numero
  console.log()
  let resultado = document.getElementById("respuesta")
  console.log(alfabeto)
  console.log(cifrar(alfabeto, texto_plano, clave))
  resultado.innerHTML = `
      <label for='input_resultado'>Resultado</label>
      <input readonly type='text' id="input_resultado">
    `
  document.getElementById("input_resultado").value = cifrar(alfabeto, texto_plano, clave)

})


//boton de desencriptar
button_desencriptar.addEventListener("click", function() {
  let input_palabraInicial = document.getElementById("input_palabraInicial")
  let contrasena = document.getElementById("input_nuevaContraseña")

  let texto_plano = input_palabraInicial.value
  let clave = parseInt(contrasena.value)
  
  //capturar la contraseña en formato numero
  let resultado = document.getElementById("respuesta")
  console.log(alfabeto)
  console.log(descifrar(alfabeto, texto_plano, clave))
  resultado.innerHTML = `
      <label for='input_resultado'>Resultado</label>
      <input readonly type='text' id="input_resultado">
    `
  document.getElementById("input_resultado").value = descifrar(alfabeto, texto_plano, clave)
})

