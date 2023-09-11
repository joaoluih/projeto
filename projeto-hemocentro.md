
# Projeto Hemocentro

Ol�! Voc� foi contratado para desenvolver um sistema de cadastro de doadores de sangue para o Hemocentro da sua cidade, utilizando a linguagem JavaScript e a fun��o `prompt` para a entrada de dados.

O programa deve permitir o cadastro de doadores e deve conter as seguintes informa��es: nome, idade, peso, tipo sangu�neo e data da �ltima doa��o.

Ao acessar o sistema, o usu�rio deve ser apresentado a um menu com as seguintes op��es:

```
===== SISTEMA DE CADASTRO DE DOADORES DE SANGUE =====
1. Cadastrar doador
2. Listar doadores
3. Buscar doador por tipo sangu�neo
4. Buscar doador por data da �ltima doa��o
5. Sair
Escolha uma op��o:
```

Ao selecionar uma op��o, deve ser chamada uma fun��o que execute a respectiva a��o, conforme detalhamento abaixo:

**1. Cadastrar doador:** essa op��o permite cadastrar um novo doador no sistema. O programa deve solicitar o nome, a idade, o peso, o tipo sangu�neo e a data da �ltima doa��o do doador. O sistema deve armazenar essas informa��es em um objeto e esse objeto em um `array` de doadores.

**2. Listar doadores:** essa op��o lista todos os doadores cadastrados no sistema, mostrando suas informa��es completas.

Exemplo:

```
--------------------
LISTAGEM DE DOADORES:
--------------------
NOME             | IDADE | PESO | TIPO SANGU�NEO | �LTIMA DOA��O
-----------------------------------------------------------------
Jo�o da Silva    |  25   |  70  |      AB-       |   01/01/2022  
Maria Santos     |  35   |  65  |      A+        |   03/02/2022  
Jos� Almeida     |  45   |  80  |      O+        |   10/01/2022  
Ana Oliveira     |  27   |  58  |      B-        |   22/04/2022  
Carlos Silva     |  30   |  75  |      A-        |   14/03/2022  
-----------------------------------------------------------------
```

**3. Buscar doador por tipo sangu�neo:** essa op��o permite buscar doadores pelo seu tipo sangu�neo. O programa deve solicitar o tipo sangu�neo desejado e listar todos os doadores com o mesmo tipo sangu�neo.

```
Digite o tipo sangu�neo desejado: A+

------------------------
RESULTADO DA BUSCA:
------------------------
NOME             | IDADE | PESO | TIPO SANGU�NEO | �LTIMA DOA��O
-----------------------------------------------------------------
Maria Santos     |  35   |  65  |      A+        |   03/02/2022  
Carlos Silva     |  30   |  75  |      A-        |   14/03/2022  
-----------------------------------------------------------------
```

**4. Buscar doador por data da �ltima doa��o:** essa op��o permite buscar doadores que fizeram a �ltima doa��o antes de uma determinada data. O programa deve solicitar a data desejada e listar todos os doadores que fizeram a �ltima doa��o antes dessa data.

Exemplo:

```
Digite a data desejada (dd/mm/aaaa): 01/03/2022

------------------------
RESULTADO DA BUSCA:
------------------------
NOME             | IDADE | PESO | TIPO SANGU�NEO | �LTIMA DOA��O
-----------------------------------------------------------------
Calito Teves     |  35   |  65  |      A+        |   01/03/2022  
Carla Maria      |  30   |  75  |      A-        |   01/03/2022  
-----------------------------------------------------------------
```

**5. Sair:** o programa deve encerrar.
