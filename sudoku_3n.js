function getNineNumbers() {
    let numbers = [];
    let numberGen;
    let availableNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    for (let i = 1; i <= 9; i++) {
        let index = Math.floor((Math.random() * availableNumbers.length));
        numberGen = availableNumbers[index];
        numbers.push(numberGen);
        availableNumbers.splice(index, 1);}
    console.log(numbers);
};

function getMoreArrays() {
    for (let i = 1; i <=9 ; i++) {
        getNineNumbers();
    };
};
getMoreArrays();