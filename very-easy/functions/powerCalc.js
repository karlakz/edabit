// https://edabit.com/challenge/wAdE9te55cowBLcPs
const powerCalc = {
    circuitPower: function (voltage, current) {
    if (voltage == 0 || current == 0) {
        return 0
    }
    return Number(voltage * current).toFixed(2);
    }
}

module.exports = powerCalc

console.log(powerCalc.circuitPower(0, -2))
console.log(powerCalc.circuitPower(0.1, 0.1))
