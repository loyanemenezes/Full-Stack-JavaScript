const imoveis = []
let opçao = ""

do {
  opçao = prompt(
    "Bem-Vindo(a) ao cadastro de imovéis!\n" +
    "Total de imóveis: " + imoveis.length +
    "\n\nEscolha uma opção\n1. Novo Imóvel\n2. Listar Imóveis\n3 . Sair")

    switch (opçao) {
      case "1":
        const imovel = {}

        imovel.proprietario = prompt("Informe o nome do proprietário do imóvel: ")
        imovel.quartos = prompt("Informe a quantidade de quartos do imóvel: ")
        imovel.banheiros = prompt("Informe a quantidade de banheiros do imóvel: ")
        imovel.garagem = prompt("O imóvel possui garagem? (Sim/Não)")

        const confirmaçao = confirm(
          "Salvar este imóvel?\n"+
          "\nProprietário: " + imovel.proprietario +
          "\nQuartos: " + imovel.quartos +
          "\nBanheiros: " + imovel.banheiros +
          "\nPossui garagem? " + imovel.garagem
        )

        if (confirmaçao) {
          imoveis.push(imovel)
          alert("imóvel salvo com sucesso!")
        } else {
          alert("Voltando ao menu.")
        }
        break
      case "2":
        for ( let i = 0; i < imoveis.length; i++) {
          alert(
            "Imóvel " + (i + 1) +
            "\nProprietário: " + imoveis[i].proprietario +
            "\nQuartos: " + imoveis[i].quartos +
            "\nBanheiros: " + imoveis[i].banheiros +
            "\nPossui garagem? " + imoveis[i].garagem
          )
        }
        break
      case "3":
        alert("Encerrando...")
        break
      default:
        alert("Opção inválida!")
    }

} while (opçao !== "3")