// task: https://edabit.com/challenge/9MjEpkL7yAjAqiH58

function lessThan100 (a, b) {
    if (a + b < 100) {
        return true;
    }
    return false;
};

module.exports = lessThan100;

console.log(lessThan100(-77, -30));