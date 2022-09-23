// Operador && 

const currentHour = 19;
let message = "";

if (currentHour >= 22) {
    message = "Não deveríamos comer nada, é hora de dormir";
} else if (currentHour >= 18 && currentHour < 22) {
    message = "Rango da noite, vamos jantar :D";    
} else if (currentHour >= 14 && currentHour < 18) {
    message = "Vamos fazer um bolo pro café da tarde?"
} else if (currentHour >= 11 && currentHour < 14) {
    message = "Hora do Almoço!"
} else if (currentHour >= 4 && currentHour < 11) {
    message = "Hmmm, cheiro de café recém-passado!"
}

console.log(message);

// Operador || 

let weekDay = "quarta-feira";

if (weekDay == "segunda-feira" || weekDay == "terça-feira" || weekDay == "quarta-feira" || weekDay == "quinta feira" || weekDay == "Sexta feira") {
    console.log("Mais aprendizado");
} else if (weekDay = "sabado" || weekDay == "domingo") {
    console.log("Descanso!");
}



// Nesse exemplo o "switch/case" deverá imprimir no terminal a classificação de quais filmes podem ser assistidos
// de acordo com a faixa etária de uma pessoa.

let faixaEtaria = 'adulto';

switch (faixaEtaria) {
  case 'adolescente':
    // Caso a variável seja "adolescente" então entraremos na lógica abaixo.

    console.log('Consulte a classificação do filme');
    // Quando a pessoa for adolescente essa será a mensagem impressa no console.

    break;
    
    // O "break" serve para que o código não continue rodando caso seu resultado já tenha sido atingido
  case 'adulto':
    // Após implementar a lógica de um case, você pode abrir outro case.
    // Agora vamos fazer a lógica do que deve ocorrer se a pessoa for adulta

    console.log('A pessoa adulta é classificada para assistir qualquer filme')
    //caso seja adulto essa mensagem deverá aparecer no terminal

    break;
    // Interrompemos o fluxo novamente caso a pessoa seja adulta
    case 'idoso':
      // Repetimos o mesmo processo para o case "idoso"
      console.log('A pessoa idosa é classificada para assistir qualquer filme');
      break
  default:
    // O "default" é utilizado como um retorno padrão caso o valor passado não encaixe em nenhum dos cases
    // Ou seja, se a pessoa, for criança, recém nascida, ou pertencente à qualquer outra faixa etária, essa será a lógica implementada.
    console.log('só pode assistir filmes livres');
    // note que não é necessário utilizar o break após o default. Como todo o código já foi executado, não precisamos interromper o funcionamento do mesmo.
}

console.log(faixaEtaria);


/*==================================================================================================================================*/


mes = 'maio';
let estacaoDoAno = '?';

switch (mes) {
    case 'janeiro':
    case 'fevereiro':
    case 'março':
        estacaoDoAno = 'Verão';
        break;
    case 'abril':
    case 'maio':
    case 'junho':
        estacaoDoAno = 'Outono';
        break;
    case 'julho':
    case 'agosto':
    case 'setembro':
        estacaoDoAno = 'Inverno';
        break;
    case 'outubro':
    case 'novembro':
    case 'dezembro':
        estacaoDoAno = 'Primavera';
}

console.log(estacaoDoAno); // 'Outono'


/*==================================================================================================================================*/


let sinaleira = "";

switch (sinaleira) {
    case "vermelho":
        console.log("Pare");
        break;
    case "amarelo":
        console.log("reduzir");
        break;
    case "verde":
        console.log("acelera");
        break;    
    default:
        console.log("sinal quebrado");
}

/*==================================================================================================================================*/

let concurso = "reprovada"

switch (concurso) {
    case "aprovada":
        console.log("Parabens");
        break;
    case "reprovada":
        console.log("tente de novo");
        break;
    case "lista":
        console.log("aguarde a lista");
        break;
    default:
        console.log("dado errado");
        break;
}

/*==================================================================================================================================*/

