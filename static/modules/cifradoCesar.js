function cifradoCesar(alfabeto, mensaje, clave){
    /*Cifrado de */
    let cifrado = "";
    let guardarMayuscula = false;
    for(let i = 0; i < mensaje.length; i++){
     
       /*Usamos el indexOf para saber la posicion de letras*/
        let posicion = alfabeto.indexOf(mensaje[i]);
        let posicionCifrado = (posicion + clave) % alfabeto.length;
        if(posicionCifrado < 0){
            posicionCifrado = alfabeto.length + posicionCifrado;
        }

        cifrado += alfabeto[posicionCifrado];

    }
    return cifrado;
}

//AGREGAMOS FUNCIONES CIFRAR Y DESCIFRAR
function cifrar(alfabeto, mensaje, clave){
    return cifradoCesar(alfabeto, mensaje, clave);
}

function descifrar(alfabeto, mensaje,clave){
    return cifradoCesar(alfabeto, mensaje,-clave);
}
//Exportar cifrado a nuestro script de manera corta
export {cifrar,descifrar};