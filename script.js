
let computerNumber; 
let userNumbers = [];//array vazia para armazenamento
let attempts = 0;
let maxguesses = 7;


function newGame() {
    window.location.reload();
}

function init() {
//Gerando números aleatórios
//esta expressão serve para o random contar até 99 e + 1 para chegar a 100
//math.floor arredonda o número
    computerNumber = Math.floor(Math.random() * 100 + 1);
}

function compareNumbers() {
// .value serve para pegar o valor do input, neste caso, o número digitado
//sempre lembrar de associar à variável    
    const userNumber = Number(document.getElementById('number').value);
//armazenamento do número na array vazia
    userNumbers.push(' ' + userNumber);//adicionou um espaço 
//innerHTML printa na própria tela
    document.getElementById('guesses').innerHTML = userNumbers;

    if (attempts < maxguesses) {
        if (userNumber > computerNumber) {
            document.getElementById('textOutput').innerHTML =  'Your number is High';
            document.getElementById('number').value = '';
            attempts++
            document.getElementById('attempts').innerHTML = attempts
    
        }
        else if (userNumber < computerNumber) {
            document.getElementById('textOutput').innerHTML =  'Your number is Low';
            document.getElementById('number').value = '';
            attempts++
            document.getElementById('attempts').innerHTML = attempts
        } 
        else  {
            document.getElementById('textOutput').innerHTML =  'CONGRATULATIONS!!!!';
            attempts++
            document.getElementById('attempts').innerHTML = attempts
        //desabilitanto o input de números 
            document.getElementById('number').setAttribute('Readonly', 'Readonly')
        }  
    }
    else {
        document.getElementById('textOutput').innerHTML =  'YOU LOSE!! ' + 'The computer number is: ' + computerNumber;
        document.getElementById('number').setAttribute('Readonly', 'Readonly')
    }
}

