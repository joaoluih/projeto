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
function buscar(dados){
	let buscando = prompt("Diga algo para buscar")
	for (let iten of dados ){
		for(let propriedade in iten){
			if(iten[propriedade] === (buscando)){
				console.log(`Nome: ${iten.nomes} | Locaçização: ${iten.localizaçoes} | contato: ${iten.contatos}] | CapacidadeMaxima: ${iten.capacidadeMaxima} | CapacidadeAtual: ${iten.capacidadeAtual}`)
				break
			}
		}
	}

}
function deletar(){
let perguntaDeletar = prompt("Qual abrigo você quer deletar")
	for(let i = 0; i < dados.length; i++){
		if(perguntaDeletar === dados[i].nomes){
		dados.splice(i, 1)
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
		pergunta += "4, Excluir um Abrigo\n"
		pergunta += "5. Sair"

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
			deletar(dados)
			break
		case 5:
			sair()	
	}
}
