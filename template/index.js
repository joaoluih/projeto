// Definições básicas
let continuar = true
let dados = []


// Função para cadastro

function cadastrar() {
	let nome = prompt("Diga o nome do seu abrigo")
	let localizaçao = prompt("Diga a locaçização do seu abrigo")
	let contato = prompt("Deixe o numero ou email de contato do abrigo")
	let abrigadosMaximo = Number(prompt("Qual o numero maximo de pessoas que o abrigo pode atenter?"))
	let abrigadosAtual = Number(prompt("Qual o numero de pessoas atual no abrigo?"))

	
	const abrigos = {
		nomes: nome,
		localizaçoes: localizaçao,
		contatos: contato,
		capacidadeMaxima: abrigadosMaximo,
		capacidadeAtual:  abrigadosAtual,
	} 
	dados.push(abrigos)
}
console.log(dados)


// Função para listar
function listar(dados) {
	for(let i = 0; i < dados.length; i++ ){
		console.log(`Nome | ${dados[i].nomes} | Locaçização |  ${dados[i].localizaçoes} | contato | ${dados[i].contatos} | capacidadeMaxima | ${dados[i].capacidadeMaxima} Pessoas | CapacidadeAtual |  ${dados[i].capacidadeAtual} Pessoas	`)
	}
}


// Função para buscar
function buscar(itens){
    let buscar = prompt("Digite o que voce esta buscando:")
	for(let i = 0; i < itens.length; i++){
        if(itens[i].nomes, (buscar)){ 
            console.log(`Nome: ${itens[i].nomes} | Locaçização: ${itens[i].localizaçoes} | contato: ${itens[i].contatos} | CapacidadeMaxima: ${itens[i].capacidadeMaxima} | CapacidadeAtual: ${itens[i].capacidadeAtual}	`)
        }
   }
}
// Função para sair
function sair() {
	continuar = false
	console.log("Tchau! Para reiniciar, atualize a aba do navegador.")
}


// Loop para perguntar ao usuário
while (continuar) {
	// Formatar pergunta
	let pergunta  = "ABRIGOS TEMPORÁRIOS\n"
		pergunta += "-------------------------\n"
		pergunta += "Escolha uma opção:\n"
		pergunta += "1. Cadastrar abrigo\n"
		pergunta += "2. Listar abrigos\n"
		pergunta += "3. Procurar abrigo\n"
		pergunta += "4. Sair"

	// Guardar resposta
	let resposta = Number(prompt(pergunta))

	// Identificar resposta e chamar função
	switch (resposta) {
		case 1:
			cadastrar()
			break
		case 2:
			listar(dados)
			break
		case 3:
			buscar(dados)
			break
		case 4:
			sair()
			break
	}
}