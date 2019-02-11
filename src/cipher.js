window.cipher = {
  encode: (fraseInicial, key) => { //le damos los parámetros a considerar
      let texto = ""; //y que vaya guardando todo en esta variable vacía
      for (let i = 0; i < fraseInicial.length; i++) { //desde la posición 0 recorra 1 a 1 los caracteres
          let sdoTexto = fraseInicial.charCodeAt(i); //la varible "sdoTexto" almacena el texto en ascii
          if (sdoTexto >= 65 && sdoTexto <= 90) { //le damos condición para que solo se mueva entre las 26 letras del abc
              let code = (sdoTexto - 65 + key) % 26 + 65; //se aplica fórmula de Michelle y que se guarde en la variable "code"
              texto += String.fromCharCode(code); //que nos devuelva el string en ascii aplicando el offset 
          } else {
              texto += String.fromCharCode(sdoTexto); //que pase de largo los caracteres que no se encuentran entre las posiciones 65 a 90 de ascii
          }
      }
      return texto;
  },
  decode: (fraseInicial, key) => { //le damos los parámetros a considerar
      let texto = ""; //y que vaya guardando todo en esta variable vacía
      for (let i = 0; i < fraseInicial.length; i++) { //desde la posición 0 recorra 1 a 1 los caracteres
          let sdoTexto = fraseInicial.charCodeAt(i); //la varible "sdoTexto" almacena el texto en ascii
          if (sdoTexto >= 65 && sdoTexto <= 90) { //le damos condición para que solo se mueva entre las 26 letras del abc
              let code = (sdoTexto + 65 - key) % 26 + 65; //se aplica fórmula de Michelle y que se guarde en la variable "code"
              texto += String.fromCharCode(code); //que nos devuelva el string en ascii aplicando el offset
          } else {
              texto += String.fromCharCode(sdoTexto); //que pase de largo los caracteres que no se encuentran entre las posiciones 65 a 90 de ascii
          }
      }
      return texto;
  }
};