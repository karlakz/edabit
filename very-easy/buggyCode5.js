// https://edabit.com/challenge/4iCsexZgmDEMMxj46

function printArray(number) {
    if (number === 0 || number < 0) {
        return [];
    }
    var newArray = [];
    for(var i = 1; i <= number; i++) {
      newArray.push(i);
    }
    return newArray;
  }

module.exports = printArray;
console.log(printArray(0));
console.log(printArray(-1));
