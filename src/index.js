/* le decimos al botón "buttonCode" que al hacer click guarde en la variable "encrypText" lo que
el usuario ingresa en el input "firstText", y que antes de cualquier cosa, lo devuelva en mayúsculas.
Luego llamamos a la variable offset para que almacene el desplazamiento que escoje el usuario,
para finalmente llamar al input de "result-text" nos devuelva el resultado de la función
que le indicamos en el cipher.js, en el bloque de encode */

document.getElementById("buttonCode").addEventListener("click", () => {
    let encryptText = (document.getElementById("firstText").value).toUpperCase();
    let offset = document.getElementById("key").value;
    offset = parseInt(offset);
    document.getElementById("resultText").innerHTML = (cipher.encode(encryptText, offset));
})
 
/* le decimos al botón "buttonUncode" que al hacer click guarde en la variable "encrypText" lo que
el usuario ingresa en el input "firstText", y que antes de cualquier cosa, lo devuelva en mayúsculas.
Luego llamamos a la variable offset para que almacene el desplazamiento que escoje el usuario,
para finalmente llamar al input de "result-text" nos devuelva el resultado de la función
que le indicamos en el cipher.js, en el bloque de decode */

document.getElementById("buttonUncode").addEventListener("click", () => {
    let encryptText = (document.getElementById("firstText").value).toUpperCase();
    let offset = document.getElementById("key").value;
    offset = parseInt(offset);
    document.getElementById("resultText").innerHTML = cipher.decode(encryptText, offset);
})

document.getElementById("buttonReset").addEventListener("click", () => {
    document.getElementById("firstText").value = "";
    document.getElementById("key").value = "";
    document.getElementById("resultText").value = "";
})