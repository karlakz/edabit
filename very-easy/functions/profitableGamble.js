// task: https://edabit.com/challenge/ghbHrRnRiDz9fvQNF
// Notes
// A profitable gamble is a game that yields a positive net profit, where net profit is calculated in the following manner: net_outcome = probability_of_winning * prize - cost_of_playing.

function profitableGamble(prob, prize, pay) {
    if (prob < 0 || prize < 0 || pay < 0) {
        return 'Please, enter positive integers!';
    }
    return prob * prize - pay > 0;
}

module.exports = profitableGamble;