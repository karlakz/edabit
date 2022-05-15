// Task: https://edabit.com/challenge/GwvwXHWCThHZrR7xu
function footballPoints(wins, draws, losses) {
    if(wins < 0 || draws < 0 || losses < 0) {
        return 'Please, enter positive integers';
    }
    return wins * 3 + draws * 1 + losses * 0;
};

module.exports = footballPoints;