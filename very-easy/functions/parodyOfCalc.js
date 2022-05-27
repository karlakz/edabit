// Task: https://edabit.com/challenge/fh9i7k936rvfjnCYR

// References:
// 1. https://stackoverflow.com/questions/2276021/evaluating-a-string-as-a-mathematical-expression-in-javascript
// 2. https://www.geeksforgeeks.org/parsing-string-of-symbols-to-expression/

function calculator(str) {
    return eval(str)
}

console.log(calculator("23+4"));

console.log(calculator("13+2-5*2"));

module.exports = calculator;