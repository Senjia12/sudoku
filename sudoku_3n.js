let n = 3;
let numbersGrid = Array.from({ length: n * n }, () => new Array());; // Array to hold the generated numbers for each row
let rows = Array.from({ length: n * n }, () => new Set());
let columns = Array.from({ length: n * n }, () => new Set());
let squares = Array.from({ length: n * n }, () => new Set());
let LPA = Array.from({ length: n }, () => new Set()); /*Last Position Available = every n columns (square side length, so n columns = column of n squares) allow n times the same number, 1 occurence each col and square, when n-1 numbers already there, this keeps last column and square accepting number
why a set ? just need 3 values for position and maybe one for number
gonna think how to manage data*/
let number;
let grid = Array.from({ length: n * n }, () => new Array()); // Initialize the grid with empty arrays

function get_n_Numbers() {
    let numbers = [];
<<<<<<< Updated upstream
    let availableNumbers = Array.from({ lenght: n * n }, (_, i) => i + 1);
=======
    let numberGen;
    let availableNumbers = Array.from({ length: n * n }, (_, i) => i + 1);
>>>>>>> Stashed changes
    
    for (let i = 1; i <= n * n; i++) {
        let index = Math.floor((Math.random() * availableNumbers.length));
        numberGen = availableNumbers[index];
        numbers.push(numberGen);
        availableNumbers.splice(index, 1);
    };
    console.log(numbers);
    numbersGrid[i - 1] = numbers;
};

function getMoreArrays() {
    for (let i = 1; i <=8 ; i++) {
        get_n_Numbers();
    };
    console.table(numbersGrid);
    console.table(grid); /*grid is still empty ?*/
};

function allowNb(grid, row, col, square, number) {
  if (rows.has(number) == false && columns.has(number) == false && squares.has(number) == false){
    return true;
  } else {/*return only true or false positions with elif ? add option for col, row, square deductive left place for number ?*/
    return false;
  };
};

<<<<<<< Updated upstream
function getSquare() {
=======
function getSquare() { /*only tells the first square ?*/
    let square = [];
>>>>>>> Stashed changes
    for (let i = 0; i < 3; i++) {
        squares[nth].push(grid[i].slice(0, 3));
    };
    console.table(square);
};

function completeGrid() {
  var step = 1;
  var nbRep = n * n;
  grid[0] = numbersGrid[0] = [...numbers];  ;
  step++;
  /*2nd row*/
  grid[0] = numbersGrid[0].filter(val => condition(val));
  allowNb();
  /*gotta fill the 2nd row*/
  
   if (step % n === 0) { /*if step is a multiple of n, so the end row of a square*/

    if (step === nbRep) { /*end of grid, last row*/
      for (let i = 1; i <= nbRep; i++){
          checkLPA();
          checkSquareFulfilled();
          step++;
      };
    } else if (step === n){ /*end of first square*/
      for (let i = 1; i <= nbRep; i++) {
        
      };
    } else if (step === n * (n - 1)){ /*to           check, second to last square*/
      for (let i = 1; i <= nbRep; i++) {
      };
    } else {
        for (let i = 1; i <= nbRep; i++) { /*row ending any other square*/
      };
    };
  
  } else if ((step - 1) % n === 0) { /*fist row of any square but the first one*/
  
  } else /*if (step > 1 && step != n * n)*/ {
        for (let i = 1; i <= nbRep; i++) {
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

function checkLPA(nb){/*check lpa or fulfill lpa sets ?*/
  for (let i = 1; i <= n; i++){
    if (columns[x].has(nb)){
      return false;
    };
  x++;
  };
};

function updateLPA(nb, LPA){/*this fulfill*/
  let x = 0;
  for (let i = 1; i <= n; i++){
    if (columns[x].has(nb)){
      x++;
    } else if (columns[x].has(nb) === false){
      LPA.push(nb);
    };
  };
};

getMoreArrays();

function checkNumberAgainAnOtherFunction(nb, numbersGrid[y][x], grid[a][b]) { /* problem to define y, x, a, b, how to ?*/
  for (let i = n * n; i >= 0; i--) {
    if (grid[y - 1][x] === nb) {// Number found in the previous rox
      x++;// Move to the next column
    } else {
      grid.push[y][x] = nb; // Place the number in the grid
      rows[y].add(nb); // Add the number to the row set
      columns[x].add(nb); // Add the number to the column set
    };
  };
};