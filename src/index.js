/* le decimos al botón "codificar" que al hacer click guarde en la variable "encrypText" lo que
el usuario ingresa en el input "fraseInicial", y que antes de cualquier cosa, lo devuelva en mayúsculas.
Luego llamamos a la variable offset para que almacene el desplazamiento que escoje el usuario,
para finalmente llamar al input de "descifrado" nos devuelva el resultado de la función
que le indicamos en el cipher.js, en el bloque de encode */

document.getElementById("btncode").addEventListener("click", () => {
    let encryptText = (document.getElementById("fraseInicial").value).toUpperCase();
    let offset = document.getElementById("key").value;
    offset = parseInt(offset);
    document.getElementById("descifrado").innerHTML = (cipher.encode(encryptText, offset));

})
 
/* le decimos al botón "decodificar" que al hacer click guarde en la variable "encrypText" lo que
el usuario ingresa en el input "fraseInicial", y que antes de cualquier cosa, lo devuelva en mayúsculas.
Luego llamamos a la variable offset para que almacene el desplazamiento que escoje el usuario,
para finalmente llamar al input de "descifrado" nos devuelva el resultado de la función
que le indicamos en el cipher.js, en el bloque de decode */

document.getElementById("btnuncode").addEventListener("click", () => {

    let encryptText = (document.getElementById("fraseInicial").value).toUpperCase();
    let offset = document.getElementById("key").value;
    offset = parseInt(offset);
    document.getElementById("descifrado").innerHTML = cipher.decode(encryptText, offset);

})