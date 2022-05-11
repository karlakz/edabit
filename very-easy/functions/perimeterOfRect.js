// Task: https://edabit.com/challenge/XnJ24rWW7iJkNrtsh

function findPerimeter(length, width) {
    if(length <= 0 || width <= 0) {
        return 'Please, enter positive numbers';
    }
    return 2 * length + 2 * width;
}

module.exports = findPerimeter;