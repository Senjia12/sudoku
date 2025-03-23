let grid = [];
let row = [];
let colonne = [];
let colIndex;

function getNineNumbers() {
    let numbers = [];
    let numberGen;
    let availableNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    for (let i = 1; i <= 9; i++) {
        let index = Math.floor((Math.random() * availableNumbers.length));
        numberGen = availableNumbers[index];
        numbers.push(numberGen);
        availableNumbers.splice(index, 1);};
    console.log(numbers);
    grid.push(numbers);
};

function getMoreArrays() {
    for (let i = 1; i <=8 ; i++) {
        getNineNumbers();
    };
    console.table(grid);
};
getMoreArrays();

function getCol(colIndex) {
    grid.map(row => row[colIndex]);
};

function getSquare() {
    let square = [];
    for (let i = 0; i < 3; i++) {
        square.push(grid[i].slice(0, 3));
    };
    console.table(square);
};

function completeGrid() {
    array.push(Numben);
};