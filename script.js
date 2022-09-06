var nome = "Teotonio"
var notaPrimeiroTrimestre = 9
var notaSegundoTrimestre = 5
var notaTerceiroTrimestre = 6
var notaFinal = (notaPrimeiroTrimestre + notaSegundoTrimestre + notaTerceiroTrimestre) / 3

var notaFixada = notaFinal.toFixed(1)
 
console.log ("Bem vindo " + nome)
console.log (notaFixada)

notaFixada.innerHTML = "Sua média é "