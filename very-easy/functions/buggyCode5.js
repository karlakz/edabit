// https://edabit.com/challenge/4iCsexZgmDEMMxj46

// Refernce:
// 1. Used toEqual() matcher for arrays

function printArray(number) {
    if (number <= 0) {
        return "You typed wrong number. Use only positive integer numbers please"
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
