// https://edabit.com/challenge/5erCDJ8eJDrXkmwTK
// Returns true if one of arguments is 10 or if their sum is 10

function makesTen(a, b) {
    if (a === 10 || b === 10 || a+b === 10) {
        return true;
    } else {
        return false;
    }
}

module.exports = makesTen;