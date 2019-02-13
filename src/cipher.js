window.cipher = {
  encode: (firstText, key) => { //le damos los parámetros a considerar
      let finalText = ""; //y que vaya guardando todo en esta variable vacía
      for (let i = 0; i < firstText.length; i++) { //desde la posición 0 recorra 1 a 1 los caracteres
          let secondText = firstText.charCodeAt(i); //la varible "secondText" almacena el texto en ascii
          if (secondText >= 65 && secondText <= 90) { //le damos condición para que solo se mueva entre las 26 letras del abc
              let code = (secondText - 65 + key) % 26 + 65; //se aplica fórmula de Michelle y que se guarde en la variable "code"
              finalText += String.fromCharCode(code); //que nos devuelva el string en ascii aplicando el offset 
          } else {
              finalText += String.fromCharCode(secondText); //que pase de largo los caracteres que no se encuentran entre las posiciones 65 a 90 de ascii
          }
      }
      return finalText;
  },
  decode: (firstText, key) => { //le damos los parámetros a considerar
      let finalText = ""; //y que vaya guardando todo en esta variable vacía
      for (let i = 0; i < firstText.length; i++) { //desde la posición 0 recorra 1 a 1 los caracteres
          let secondText = firstText.charCodeAt(i); //la varible "secondText" almacena el texto en ascii
          if (secondText >= 65 && secondText <= 90) { //le damos condición para que solo se mueva entre las 26 letras del abc
              let code = (secondText + 65 - key) % 26 + 65; //se aplica fórmula de Michelle y que se guarde en la variable "code"
              finalText += String.fromCharCode(code); //que nos devuelva el string en ascii aplicando el offset
          } else {
              finalText += String.fromCharCode(secondText); //que pase de largo los caracteres que no se encuentran entre las posiciones 65 a 90 de ascii
          }
      }
      return finalText;
  }





};