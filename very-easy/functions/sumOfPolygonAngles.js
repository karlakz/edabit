function sumOfPolygonAngles(num) {
    if(num > 2) {
        return (num - 2) * 180;
    } else {
        return 'Please, enter positive number greater than 2!';
    }
}

module.exports = sumOfPolygonAngles;