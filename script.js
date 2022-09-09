function Calcular () {
    var primeiraNota = parseFloat(document.getElementById("primeiraNota").value) 
    var segundaNota = parseFloat(document.getElementById("segundaNota").value) 
    var terceiraNota = parseFloat(document.getElementById("terceiraNota").value) 
   
    var media = (primeiraNota + segundaNota + terceiraNota)/3
    

    var elementoMediaFinal = document.getElementById("mediaFinal")
    var mediaFinal = "A sua média final é de : " + media
    elementoMediaFinal.innerHTML = mediaFinal

    var elementoResultado = document.getElementById("resultado")

    if (media >= 6) {
        elementoResultado.innerHTML = " Parabéns! Você concluiu este ciclo. Está pronto para começar novas experiências"
    } else if (media < 6 || media >= 3) {
        elementoResultado.innerHTML = " Opa, quase hein... É necessário recuperar essa nota, para conseguir vencer esse ciclo!"
      }  else {
            elementoResultado.innerHTML = " Podemos fazer melhor da próxima vez! Não desista"
        }
    }