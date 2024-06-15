
function Cifrazenit2(texto) {
    // Transformar a string em um array de caracteres
    let texto  = texto.split('');
    let resultado = "";
    // Usar forEach para iterar sobre cada caractere
    texto.forEach(letra => { // para cada caractere será usado uma estrutura switch
        switch (letra.toUpperCase()) {
            case 'Z':
                resultado += 'P';
                break;
            case 'E':
                resultado += 'O';
                break;
            case 'N':
                resultado += 'L';
                break;
            case 'I':
                resultado += 'A';
                break;
            case 'T':
                resultado += 'R';
                break;
            case 'H':
                resultado += 'U';
                break;
            case 'P':
                resultado += 'Z';
                break;
            case 'O':
                resultado += 'E';
                break;
            case 'L':
                resultado += 'N';
                break;
            case 'A':
                resultado += 'I';
                break;
            case 'R':
                resultado += 'T';
                break;
            case 'U':
                resultado += 'H';
                break;
                default:
                resultado += letra;
                break;
        }
    });
    return resultado;
}

function CifraZenit1(texto) {
    // correspondência Zenith Polaru usando dois arrays.
    const Z = ["Z","E","N","I","T","H"];
    const P = ["P","O","L","A","R","U"];
     // resultadoado irá representar o texto criptografado
    // que estou montando letra a letra
    let resposta = "";
    // Transforma o texto recebido  todo em maiúsculas
    texto = texto.toUpperCase();
     // Converte o texto em um array de caracteres
     texto = texto.split('');
     // laço para cada letra em texto faça {}
     texto.forEach((letra, index) => {
        // se em alfabeto existe a letra 
        if (Z.includes(letra)) {
            resposta+= P.charAt(Z.indexOf(letra));
        };
        if (P.includes(letra)) {
                resposta+= Z.charAt(P.indexOf(letra));
        };
        if (!Z.includes(letra) && !P.includes(letra)){
            resposta+=letra;
        };
        });
    return resposta;
 };


function CifradeCesar(texto, deslocamento) {
    // a função receberá texo e deslocamento para cifrar usando a cifra de césar
    const alfabeto = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N",
        "O","P","Q","R","S","T", "U","V","W","X","Y","Z"];
    // resultadoado irá representar o texto criptografado
    // que estou montando letra a letra
    let resultadoado = "";
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
            resultadoado += alfabeto[novoIndex];
        } else {
            // senão acha o caracter repete o caracter
            resultadoado += letra;
        }
    });
    return resultadoado;
   };

function start(){
    // para ficar mais limpo primeiro criamos a variavel de deslocamento
    let deslocpadrao = 3;
    // pedimos para o usuario a frase
    //let frase = prompt("Forneça uma mensagem");
   let frase = document.getElementById("frase").value;
   // mostra no console o texto original
    console.log("Texto original: " + frase);
    // mostra no console o texto resultadoante da 
    // cifradecesar(frase,deslocpadrão)
    // eu chamo a função cifraDeCesar enviando frase e deslocpadrao
    console.log("Texto cifrado: " +  CifradeCesar(frase, deslocpadrao));
  // saida pela pagina
  document.getElementById("frasecripto").textContent= CifradeCesar(frase, deslocpadrao);
    // este foi o primeiro teste via console
    // agora podemos usar os objetos de tela 
};

function startz(){
    // para ficar mais limpo primeiro criamos a variavel de deslocamento
    let deslocpadrao = 3;
    // pedimos para o usuario a frase
    //let frase = prompt("Forneça uma mensagem");
   let frase = document.getElementById("frase").value;
    console.log("Texto cifrado: " +  CifraZenit1(frase));
  // saida pela pagina
  document.getElementById("frasecripto").textContent= CifraZenit1(frase);
   
};