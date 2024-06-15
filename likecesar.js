// a função receberá texo e deslocamento para cifrar usando a cifra de césar
function CifraZenit(texto) {
    const z = ["Z","E","N","I","T","H"];
    const P = ["P","O","L","A","R","U"];
     // resultado irá representar o texto criptografado
    // que estou montando letra a letra
    let resultado = "";
    // Transforma o texto recebido  todo em maiúsculas
    texto = texto.toUpperCase();
     // Converte o texto em um array de caracteres
     texto = texto.split('');
     // laço para cada letra em texto faça {}
     texto.forEach((letra, index) => {
        // se em alfabeto existe a letra 
        if (Z.includes(letra)) {
            resposta+= p.charAt(z.indexOf(letra));
            // divido por 26 e pego o resto.
           // novoindex representa a próxima posição + deslocamento, será usado para
           // pegar a letra no alfabrto
            let novoIndex = (idx + deslocamento) % 26;
            // pega dentro do alfabero a nova letra baseando-se no novoindex
            resultado += alfabeto[novoIndex];
        } else {
            // senão acha o caracter repete o caracter
            resultado += letra;
        }
    });
    return resultado;
   };






function CifradeCesar(texto, deslocamento) {
    const alfabeto = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N",
        "O","P","Q","R","S","T", "U","V","W","X","Y","Z"];
    // resultado irá representar o texto criptografado
    // que estou montando letra a letra
    let resultado = "";
    // Transforma o texto recebido  todo em maiúsculas
    texto = texto.toUpperCase();
     // Converte o texto em um array de caracteres
     texto = texto.split('');
     // laço para cada letra em texto faça {}
     texto.forEach((letra, index) => {
        // se em alfabeto existe a letra 
        if (alfabeto.includes(letra)) {
            let idx = alfabeto.indexOf(letra);
            // divido por 26 e pego o resto.
           // novoindex representa a próxima posição + deslocamento, será usado para
           // pegar a letra no alfabrto
            let novoIndex = (idx + deslocamento) % 26;
            // pega dentro do alfabero a nova letra baseando-se no novoindex
            resultado += alfabeto[novoIndex];
        } else {
            // senão acha o caracter repete o caracter
            resultado += letra;
        }
    });
    return resultado;
   };

    // usando for tradicional passando posição a posição
    /*for (let i = 0; i < texto.length; i++) {
        let char = texto[i];

        if (alfabeto.includes(char)) {
            let index = alfabeto.indexOf(char);
            let novoIndex = (index + deslocamento) % 26;
            resultado += alfabeto[novoIndex];
        } else {
            resultado += char;
        }
    } */
    //----------------------------------------------
// Exemplo de uso recebendo a frase e criptografando-a-a-a
// start é executado quando clicar na MOEDA DE CÉSAR
function start(){
    // para ficar mais limpo primeiro criamos a variavel de deslocamento
    let deslocpadrao = 3;
    // pedimos para o usuario a frase
    //let frase = prompt("Forneça uma mensagem");
   let frase = document.getElementById("frase").value;
   // mostra no console o texto original
    console.log("Texto original: " + frase);
    // mostra no console o texto resultante da 
    // cifradecesar(frase,deslocpadrão)
    // eu chamo a função cifraDeCesar enviando frase e deslocpadrao
    console.log("Texto cifrado: " +  CifradeCesar(frase, deslocpadrao));
  // saida pela pagina
  document.getElementById("frasecripto").textContent= CifradeCesar(frase, deslocpadrao);
    // este foi o primeiro teste via console
    // agora podemos usar os objetos de tela 
};
