// Selecionando os elementos

// 1 Elemento (Formulario)
const multiplicationForm = document.querySelector("#multiplication-form") 
const numberInput = document.querySelector("#number") 
const multiplicationInput = document.querySelector("#multiplicator") 
const multiplicationTitle = document.querySelector("#multiplication-title span");


//Selecionando a multiplicationTable para zerar a tabela*
const multiplicationTable = document.querySelector("#multiplication-operations")
 
// 3 - Funcoes (O passo 3 esta aqui pois utilizamos as duas informacoes das variaveis multiplication e multiplicator para executar uma funcao para criar a tabela, a funcao sera executada no lugar no console log)

const createTable = (number, multiplicatorNumber) => {
   //Zerando a area da tabela onde tem o texto para informar numero acessando o HTML interno dentro da variavel

   multiplicationTable.innerHTML = "" //Colocamos uma string vazia para limpar o HTML

   //Criamos um for para repetir as multiplicacoes, pois o valor de repeticoes eh o valor de multiplicatorNumber, ex se o usuario digitar 5, o for vai se repetir 5 vezes, o i comeca com 1 para nao comecar a multiplicar por 0

   for(i = 1; i <= multiplicatorNumber; i++) {
    //Esse for possiblita a tabuada, fazendo o resultado ser multiplicado pelo i

    const result = number * i
    console.log(result)
    
    //Criando o template para jogar a operacao em numero, as aspas criam em um metodo de DOM transferir string para HTML
    const template = `<div class="row"> 
         <div class="operation">${number} x ${i} = </div>
         <div class="result">${result}</div> 
      </div>`

    //Novo objeto que vai permitir transferir o template para HTML
    const parser = new DOMParser()
    
    //Criando o template HTML para transformar no metodo parser para transformar uma string em HTML, com os dados originais e de conversao
    const htmlTemplate = parser.parseFromString(template, "text/html")

    //Selecionando a row
    const row = htmlTemplate.querySelector(".row")
    //Adicionando um elemento filho na minha tabela que eh o row
    multiplicationTable.appendChild(row)

   }
   multiplicationTitle.innerText = number;
}


// 2 - Eventos 

//Vou esperar um evento de multiplication-form, pegar o argumento de evento (e) para poder fazer o preventDefault para enviar o formulario ao inves de carregar a pagina
multiplicationForm.addEventListener("submit",(e) => {
    e.preventDefault()
    //Transformando em variavel meu multiplicationNumber para pegar o valor e multiplicar, ao adicionar o sinal de +, ele se torna um inteiro
    const multiplicationNumber = +numberInput.value
    //Da mesma forma pego o multiplicator para pegar o numero que vai multiplicar x vezez a tabuada e pegar o valor (value) dos inputs
    const multiplicatorNumber = +multiplicationInput.value

    //Fazendo uma validacao, caso algum dos 2 valores estiverem faltando ele nao vai imprimir o resultado
    if(!multiplicationNumber || !multiplicatorNumber) return

    createTable(multiplicationNumber, multiplicatorNumber)
} )