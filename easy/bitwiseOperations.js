// https://edabit.com/challenge/vvuAkYEAArrZvmp6X

// REFERENCE:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_AND

// NOTES:
// Bitwise operations work with integer type of data. 

function bitwiseAND(n1, n2) {
    return n1 & n2;
}

function bitwiseOR(n1, n2) {
    return n1 | n2;	
}

function bitwiseXOR(n1, n2) {
    return n1 ^ n2;	
}

console.log(bitwiseAND(7, 12));
console.log(bitwiseOR(7, 12));
console.log(bitwiseXOR(7, 12));
console.log(bitwiseXOR(0, 0));