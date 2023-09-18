// Definições básicas
let continuar = true   
let dados = []


// Função para cadastro

function cadastrar() {
	let nome = prompt("Digite seu nome")
	let cpfUsuario = Number(prompt("Digite seu CPF"))
	let nascimento = Number(prompt("digite o ano em que você nasceu"))
	let senha = Number(prompt("Crie uma senha numerica de quatro digitos"))
	let saldoUsuario = 100
	
	const usuarios = {
		nomes: nome,
		cpfs: cpfUsuario,
		dataNascimento: nascimento,
		senhas: senha,
		saldoInicial: saldoUsuario
	}
	dados.push(usuarios)
}

// Função para listar
function listar(dados) {
	for(let i = 0; i < dados.length; i++ ){
		console.log(`Nome: | ${dados[i].nomes} | CPF: | ${dados[i].cpfs} | data de nascimento: | ${dados[i].dataNascimento} | senha: | ${dados[i].senhas} | Saldo: ${dados[i].saldoInicial}`)
	}
}

// Função para buscar
function buscar(dados){
	let buscando = Number(prompt("Digite seu CPF"))
	for (let iten of dados ){
			if(iten.cpfs === (buscando)){
				console.log(`Nome: ${iten.nomes} | CPF: ${iten.cpfs} | Data de Nascimento: ${iten.dataNascimento} | Senha: ${iten.senhas} | ${iten.saldoInicial}`)
			}
		}

	}
function cancelar(){	
	let cancelarCPF = Number(prompt("Digite seu CPF"))
	let cancelarSenha = Number(prompt("Digite sua senha"))

	for(let i = 0; i < dados.length; i++){
		if(cancelarCPF === dados[i].cpfs && cancelarSenha === dados[i].senhas){
			dados.splice(i, 1)
		}
	}
}
function depositar(){
	deposito = Number(prompt("Digite o valor que deseja depositar"))
    deposito + saldoInicial 
}

// Função para sair
function sair() {
	continuar = false
	console.log("Tchau! Para reiniciar, atualize a aba do navegador.")
}


// Loop para perguntar ao usuário
while (continuar) {
	// Formatar pergunta
	let pergunta  = "Grandesco\n"
		pergunta += "-------------------------\n"
		pergunta += "Escolha uma opção:\n"
		pergunta += "1. Fazer cadastro no banco\n"
		pergunta += "2. listar dados\n"
		pergunta += "3. Procurar usuario\n"
		pergunta += "4, Cancelar conta \n"
		pergunta += "5, Fazer deposito \n"
		pergunta += "6. Sair"

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
			cancelar(dados)
			break
		case 5:
			depositar()
			break
		case 6:
			sair()	
	}
}
