let player = {
    name: 'Marta',
    lastName: 'Silva',
    age: 34,
    medals: {
        golden: 2,
        silver: 3
    }
};

console.log(player.medals.silver);

/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge',
  };

  for (let index in names) {
    console.log('Olá ' + names.person1 + ', Olá ' + names.person2 + ', Olá ' + names.person3);
  }

/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
  let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
  };

  for (let index in car) {
    console.log(car);
  }