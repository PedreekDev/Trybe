const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
];

const flatten = (array) => array
.reduce((acc, crr) => acc
.concat(crr));

console.log(flatten(arrays));


