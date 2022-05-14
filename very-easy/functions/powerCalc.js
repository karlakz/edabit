// https://edabit.com/challenge/wAdE9te55cowBLcPs
const powerCalc = {
    circuitPower: function (voltage, current) {
    if (voltage == 0 || current == 0) {
        return 0
    }
    return voltage * current;
    }
}

module.exports = powerCalc

console.log(powerCalc.circuitPower(0, -2))
console.log(powerCalc.circuitPower(0.1, 0.1))
