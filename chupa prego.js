//O vento DOM é acionado quando todo o HTML foi completamente carregado
document.addEventListener('DOMContentLoaded', function() {
    //Tipos de dados
    //String: Sequência de caracteres
    //Number: números inteiros ou pontos flutuantes
    //Boolean: retorna dois valores, true ou false
    //object: estrutura de dados que pode armazenar múltiplos valores
    //NULL: quando está vazio;
    //array: objeto especial ordenado;
    //function: bloco de código reutilizável;

    //CONST É usado para declarar uma variável cujo valor é permanente
    const teste = 50

    //LET é usado para declarar variáveis que os valores podem ser retribuidos
    let C = 5
    C = 5
    console.log(C)
    
    const notaMedia = 5;
    
    if (notaMedia >= 6) {        
        //alert("passou"); // Ele será liberto 😒😒😒😒😒
    }
    else if (notaMedia > 4 && notaMedia < 6) {
        //alert("foi quase mane"); // 🤢🤢🤢🤢🤢
    }
    else {
        //alert("reprovado"); // O homem será degolado 😂😂😂😂😂
    }


    // ----------   OPERADORES ------------
    

    // = sinal de atribuição
    // == sinal de cmparação
    // === verifica se os dois são iguais e têm o mesmo tipo de dados (número, string)
    // != se é diferente
    // !== se é estritamente diferente
    // > maior
    // < menor

    const num = 6;      
    if (num == 6) {
        //alert('é igual 😁');
    }
    else {
        //alert("não é igual menor 😐");
    }

    const professor = "Luca";
    if(professor == "Lucas"){
        console.log("Sim é o Lucas")
    } else{
        console.log("não é o Lucas")
    }


// --------------------- / ------------------------

// Funções são blocos de código que podem ser chamados e
// reutilizados
// Dentro dos parenteses da função vai os parâmetros/propriedades

function jorgepica(parametro, segundoParametro) {
    return parametro + segundoParametro;
}

const parametro = "Olá,";
const segundoParametro = " Mundo!";

console.log(jorgepica(parametro,segundoParametro));

// -----------------------/-------------------------


// Array em javascript são estruturas de dados que permitem
// armazenar uma coleção ordenada de elementos (strings, números, objetos, arrays)
// Arrays precisam de uma variável definida (const ou let) e também de colchetes []

const primeiroArray = [ "Camiseta", "Calcinha", "Cueca", "Calça" ];
console.log(primeiroArray[0]); // 0 é o elemento que irá aparecer o array, ou seja, camiseta 

// -----------------------/--------------------------



// Os objetos são coleções NÃO ORDENADAS de pares chave-valor
// onde cada valor é associado a uma chave única


let ser_humano = {
    nome: "KIM",
    idade: "18",
    profissao: "Faz programa"
}
console.log(ser_humano["nome"]); // "nome" é a chave que será percorrida no objeto (vai aparecer no log)

});