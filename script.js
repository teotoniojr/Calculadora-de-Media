function Calcular () {
    var elementoPrimeiraNota = document.getElementById("primeiraNota") 
    var primeiraNota = elementoPrimeiraNota.value
    var notaUmNumerico = parseFloat(primeiraNota)
    
    var elementoSegundaNota = document.getElementById("segundaNota") 
    var segundaNota = elementoSegundaNota.value
    var notaDoisNumerico = parseFloat(segundaNota)

    var elementoTerceiraNota = document.getElementById("terceiraNota") 
    var terceiraNota = elementoTerceiraNota.value
    var notaTresNumerico = parseFloat(terceiraNota)
    

    var media = (notaUmNumerico + notaDoisNumerico + notaTresNumerico)/3
    console.log(media)

    var elementoMediaFinal = document.getElementById("mediaFinal")
    var mediaFinal = "A sua média final é de : " + media
    elementoMediaFinal.innerHTML = mediaFinal
}