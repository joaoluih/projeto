 // Definições básicas
let continuar = true   
let dados = []  // array pra guardar objeto com dados do usuario
 

// Exibir menu com opções para o usuario
while (continuar) {
	let pergunta  = "Grandesco\n"
		pergunta += "-------------------------\n"
		pergunta += "Escolha uma opção:\n"
		pergunta += "1. Realizar cadastro\n"
		pergunta += "2. Listar Usuarios\n"
		pergunta += "3. Exibir Informações\n"
		pergunta += "4, Cancelar Conta\n"
		pergunta += "5, Movimentação Bancaria \n"
		pergunta += "6. Sair\n" 
		pergunta += "-------------------------\n"



// Função para cadastro(Pergutar nome, cpf, data de nascimento e senha )
function cadastrar() { let nome = prompt("Digite seu nome")
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
 
// Função para listar usuarios cadastrados no banco
function listar(dados) {
	 for(let i = 0; i < dados.length; i++ ){
		 console.log(`Nome: | ${dados[i].nomes} |  data de nascimento: | ${dados[i].dataNascimento}`)
	}
}
 
// Função para buscar dados do usuario (perguntar CPF e senha, se as duas estiverem no banco de dados retornar as informações)
function buscar(dados){
	let buscandoCPF = Number(prompt("Digite o CPF de sua conta"))
	let buscandoSenha = Number(prompt("Digite sua senha"))
	for (let iten of dados ){
		if((iten.cpfs === buscandoCPF) && (iten.senhas === buscandoSenha)){
		console.log(`Nome: ${iten.nomes} | CPF: ${iten.cpfs} | Data de Nascimento: ${iten.dataNascimento} | Senha: ${iten.senhas} | Saldo: ${iten.saldoInicial}`)
		}
	}
}

// Função para cancelar uma conta (Perguntar senha e cpf para confirmação)
function cancelar(){	
	let cancelarCPF = Number(prompt("Digite seu CPF"))
	let cancelarSenha = Number(prompt("Digite sua senha"))
 
	for(let i = 0; i < dados.length; i++){
		if(cancelarCPF === dados[i].cpfs && cancelarSenha === dados[i].senhas){
			dados.splice(i, 1)
		}
	}
}
 
// Função para sair
function sair() {
	continuar = false
	console.log("Tchau! Para reiniciar, atualize a aba do navegador.")
}
 
 // funcão para fazer depositos e saques, exibe um novo meno com 3 opções
function movimentar(){
		while(continuar){ 
 		let pergunta = "O que deseja fazer\n"
		pergunta += "-------------------------\n"
		pergunta += "1 Realizar Pix\n"
		pergunta += "2 Realizar Saque\n"
		pergunta += "3 Voltar ao menu principal\n"
		pergunta += "-------------------------\n"
		let resposta = Number(prompt(pergunta))

switch(resposta){     
	case 1: // Opção de deposito (Perguntar cpf da conta que deseja fazer pix e o valor)
		depositoCPF = Number(prompt("Digite o CPF da conta que deseja fazer deposito"))
		depositoValor = Number(prompt("Digite o valor que deseja depositar"))
		for(let i = 0; i < dados.length; i++){
			if(depositoCPF === dados[i].cpfs){  
			 dados[i].saldoInicial = dados[i].saldoInicial + depositoValor  // sistema de conta de soma
			}
 		}	
break 
	case 2:     // Opção de saque (Perguntar o CPF, o vaor e a senha do usuario para confirmação)
		saqueCPF = Number(prompt("Digite seu CPF"))
		saqueValor = Number(prompt("Digite o valor que deseja sacar"))
		saqueSenha = Number(prompt("Digite sua senha"))
		for(let i = 0; i < dados.length; i++){
			if(saqueCPF === dados[i].cpfs && saqueSenha === dados[i].senhas){ 
			 dados[i].saldoInicial = dados[i].saldoInicial - saqueValor    //sistema de conta de subtração
			} 
		}  
break 
	case 3:  // opção de retornar ao meno principal
		if(continuar = true){
		while (continuar) {
		let pergunta  = "Grandesco\n"
		pergunta += "-------------------------\n"
		pergunta += "Escolha uma opção:\n"
		pergunta += "1. Realizar cadastro\n"
		pergunta += "2. Listar Usuarios\n"
		pergunta += "3. Exibir Informações\n"
		pergunta += "4, Cancelar Conta \n"
		pergunta += "5, Movimentação Bancaria \n"
		pergunta += "6. Sair\n" 
		pergunta += "-------------------------\n"
		
		let resposta = Number(prompt(pergunta))

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
		movimentar()
		break
	case 6:
		sair()	
		}
	}
 }
		}
	}
 }

 //-------------------------------------------------------------------------------------------------------
 
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
		movimentar()
		break
	case 6:
		sair()	
	}
}