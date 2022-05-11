// Task: https://edabit.com/challenge/Q2j5FTFtsk7PdzrQk

function remainder(x, y) {
    if ( x === 0 && y === 0 ) {
        return NaN;
    }
	return x % y;
}

module.exports = remainder;