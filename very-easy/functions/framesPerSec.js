// https://edabit.com/challenge/d9suvbchE2bnHNQuK

const framesPerSec = (min, fps) => {
    if(min < 0 || fps < 0) {
        return 'Please, enter positive number only!';
    }
    return min * 60 * fps
};

module.exports = framesPerSec;