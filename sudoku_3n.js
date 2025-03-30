let numbersGrid = [];
let rows = Array.from({ lenght: n * n }, () => new Set());
let columns = Array.from({ lenght: n * n }, () => new Set());
let squares = Array.from({ lenght: n * n }, () => new Set());
let LPA = Array.from({ lenght: n }, () => new Set()); /*Last Position Available = every n columns (square side lenght, so n columns = column of n squares) allow n times the same number, 1 occurence each col and square, when n-1 numbers already there, this keeps last column and square accepting number*/
let number;
let n = 3;

function get_n_Numbers() {
    let numbers = [];
    let numberGen;
    let availableNumbers = Array.from({ lenght: n * n }, (_, i) => i + 1);
    
    for (let i = 1; i <= n * n; i++) {
        let index = Math.floor((Math.random() * availableNumbers.length));
        numberGen = availableNumbers[index];
        numbers.push(numberGen);
        availableNumbers.splice(index, 1);};
    console.log(numbers);
    numbersGrid.push(numbers);
};

function getMoreArrays() {
    for (let i = 1; i <=8 ; i++) {
        get_n_Numbers();
    };
    console.table(numbersGrid);
    console.table(grid);
};

function allowNb(grid, row, col, square, number) {
  if (rows.has(number) == false && columns.has(number) == false && squares.has(number) == false){
    return true;
  } else {/*return only true or false positions with elif ?*/
    return false;
  };
};

function getSquare() {
    let square = [];
    for (let i = 0; i < 3; i++) {
        square.push(grid[i].slice(0, 3));
    };
    console.table(square);
};

function completeGrid() {
  var step = 1;
  var rep = n * n;
  grid[0].push(...numbersGrid[0]);
  step++;
  /*2nd row*/
  allowNb();
  /*gotta fill the 2nd row*/
  
  if (step % n === 0) {
    if (step === rep) {
      for (let i = 0; i <= rep; i++){
          checkLPA();
          checkSquareFulfilled();
          step++;
      };
    } else if (step === n){
      for (let i = 0; i <= rep; i++) {
        
      };
    } else if (step === n * (rep - 1)){
      for (let i = 0; i <= rep; i++) {
      };
    } else {
        for (let i = 0; i <= rep; i++) {
        };
    };
  } else /*if (step > 1 && step != n * n)*/ {
        for (let i = 0; i <= rep; i++) {
          step++;
        };
  };
  /*switch (step) {
    case step === 1:
      
      
    case step === 2:
      if (allowNb() === true) {
        grid.push(number[row][col]
      };
      bre''ak;
      
      
    default:
    };
  };*/
};

function update(rows, columns, squares) {
  // Tab to edit
};

function checkLPA(){
  for (let i = 1; i <= n; i++){
    if (columns[x].has(nb)){
      LPA[x].splice(nb);
    };
  x++;
  };
};

getMoreArrays();