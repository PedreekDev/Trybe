const wakeUp = () => 'Acordando';
const coffee = () => 'Hora do café';
const sleepTime = () => 'Fui dormir';

const doingThings = (callback) => {
    let resultado = callback();
    console.log(resultado);
}

doingThings(wakeUp);


/////////////////////////////////////////////
const funcionario = (nome) => {
    const email = nome.toLowerCase().split(' ').join('_');
    return { nome, email: `${email}@trybe.com` };
};

const newEmployees = (callback) => {
    const employees = {
      id1: callback('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
      id2: callback('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
      id3: callback('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
  };

  console.log(newEmployees(funcionario));

  ///////////////////////////////////////////

  const checkNumber = (myNumber, number) => myNumber === number;

  const loteria = (myNumber, callback) => {
    const number = Math.floor((Math.random() *2)+ 1);
    return callback(myNumber, number) ? `Lula ganhou é 13 ${number}`  : `Bozo roubou deu ${number}`
  }

  console.log(loteria(1, checkNumber));
