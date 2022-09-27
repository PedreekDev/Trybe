// let player = {
//     name: 'Marta',
//     lastName: 'Silva',
//     age: 34,
//     medals: {
//         golden: 2,
//         silver: 3
//     }
// };

// console.log(player.medals.silver);

// /*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

// let names = {
//     person1: 'João',
//     person2: 'Maria',
//     person3: 'Jorge',
//   };

//   for (let index in names) {
//     console.log('Olá ' + names.person1 + ', Olá ' + names.person2 + ', Olá ' + names.person3);
//   }

// /*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
//   let car = {
//     model: 'A3 Sedan',
//     manufacturer: 'Audi',
//     year: 2020
//   };

//  /*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

//  let info = {
//     personagem: 'Margarida',
//     origem: 'Pato Donald',
//     nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
//   };

//   console.log('Welcome ' + info.personagem);
  
// /*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

// info['Recorrente'] = "Sim";

// console.log(info);

// /*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

// for (let key in info) {
//     console.log(key);
// }


// let info = {
//     personagem: 'Margarida',
//     origem: 'Pato Donald',
//     nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
//     recorrente: 'Sim'
//   };

//   console.log('Welcome ' + info.personagem);
  
//   let info2 = {
//     personagem: 'Tio Patinhas',
//     origem: 'Christmas on Bear Mountain',
//     nota: "Dell's Four Color Comics #178",
//     MacPatinhas: 'Sim'
//   };

//   console.log(info, info2)

//   for (let properties in info) {
//     if (
//         properties === 'recorrente' &&
//         info[properties] === 'Sim' && 
//         info2[properties] === 'Sim'
//     ) {
//         console.log('Ambos recorrentes');
//     } else {
//         console.log((info[properties] + ' e ' + info2[properties]));
//     }
//   }


//   console.log('Welcome ' + info.personagem);
  
// /*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

//   let leitor = {
//     nome: 'Julia',
//     sobrenome: 'Pessoa',
//     idade: 21,
//     livrosFavoritos: [
//       {
//         titulo: 'O Pior Dia de Todos',
//         autor: 'Daniela Kopsch',
//         editora: 'Tordesilhas',
//       },
//     ],
//   };

//   console.log('O livro favorito de ' + leitor.nome + ' ' + leitor.sobrenome + ' se chama "' + leitor.livrosFavoritos[0].titulo + '".');



//   /*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

// leitor.livrosFavoritos.push({
//     titulo: 'Harry Potter e o Prisioneiro de Azkaban',
//     autor: 'JK Rowling',
//     editora: 'Rocco',
//   });

//   console.log(leitor);

//   /*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

//   console.log(leitor.nome + ' tem ' + leitor.livrosFavoritos.length + ' livros favoritos.'); 


    /*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/


    function verificaPalindrome (string) {
        let reverse = string.split('').reverse().join('');
        if (reverse === string) {
            return true
        } else {
            return false
        }
    };
    
       
      
      
      console.log(verificaPalindrome('arara')); //true
      console.log(verificaPalindrome('desenvolvimento')); //false

    /*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
          
 function indiceMaior (numeros) {
    let indiceMaior = 0;
    for (let index in numeros) {
        if (numeros[indiceMaior] < numeros[index]){
            indiceMaior = index;
        }
    }

    return indiceMaior;
 }

  console.log(indiceMaior([2, 3, 6, 7, 10, 1]));



    /*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

function indiceMenor (numeros) {
    let indiceMenor = 0;

    for(let index in numeros) {
        if (numeros[indiceMenor] > numeros[index])
        indiceMenor = index;
    }
    return indiceMenor;
}

console.log(indiceMenor([2, 4, 6, 7, 10, 0, -3]));