const primeiroNome = prompt("Qual é o seu nome?")
const sobrenome = prompt("Qual é o seu sobrenome?")
const campoDeEstudo = prompt("Qual é seu campo de estudo?")
const anoDeNascimento = prompt("Qual é o seu ano de nascimento?")

alert(
  "Cadastro feito com sucesso!\n"+

  "\nNome Completo: " + primeiroNome + " " + sobrenome +
  "\nCampo de Estudo: " + campoDeEstudo +
  "\nIdade: " + (2023 - anoDeNascimento)
)