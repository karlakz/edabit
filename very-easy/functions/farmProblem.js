// Task: https://edabit.com/challenge/8Qg78sf5SNDEANKti

function animals(chickens, cows, pigs) {
    if (chickens < 0 || cows < 0 || pigs < 0) {
        return 'Please, enter positive integers only!';
    }
    return chickens * 2 + cows * 4 + pigs * 4;
}

module.exports = animals;