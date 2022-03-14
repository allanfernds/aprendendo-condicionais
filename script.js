let name = prompt("Qual o nome do piloto?")
let velocity = 0
let inputVelocity = prompt("Insira a velocidade desejada")
let confirmVelocity = confirm("Velocidade inicial selecionada " + inputVelocity + " Km/s")

if (confirmVelocity) {
    velocity = inputVelocity
}

if (velocity <= 0) {
    alert("Nave parada. Considere partir e aumentar a velocidade")
} else if (velocity <= 40) {
    alert("Você está devagar, podemos aumentar mais")
} else if (velocity >= 40 && velocity < 80) {
    alert("Parece uma boa velocidade para manter")
} else if (velocity >= 80 && velocity < 100) {
    alert("Velocidade alta. Considere diminuir")
} else if (velocity >= 100) {
    alert("Velocidade perigosa. Controle automatico forçado")
}

alert("Piloto: " + name + "\nVelocidade: " + velocity + "Km/s")
