let grid = [];
let row = [];
let colonne = [];
let colIndex;

function getFourNumbers() {
    let numbers = [];
    let numberGen;
    let availableNumbers = [1, 2, 3, 4];
    for (let i = 1; i <= 4; i++) {
        let index = Math.floor((Math.random() * availableNumbers.length));
        numberGen = availableNumbers[index];
        numbers.push(numberGen);
        availableNumbers.splice(index, 1);};
    console.log(numbers);
    grid.push(numbers);
};

function getMoreArrays() {
    for (let i = 1; i <=4 ; i++) {
        getFourNumbers();
    };
    console.table(grid);
};
getMoreArrays();


function getCol(colIndex) {
    grid.map(row => row[colIndex]);
};