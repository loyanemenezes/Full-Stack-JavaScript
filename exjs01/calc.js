const input1 = prompt("Digite o primeiro número:")
const input2 = prompt("Digite o segundo número:")

const n1 = parseFloat(input1)
const n2 = parseFloat(input2)

const sum = n1 + n2
const subtraction = n1 - n2
const multiplication = n1 * n2
const division = n1 / n2

alert(
  "Resultados:\n" +
  "\nSoma: " + sum +
  "\nSubtração: " + subtraction +
  "\nMultiplicação: " + multiplication +
  "\nDivisão: " + division
)
