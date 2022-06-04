const dividesEvenly = (a, b) => {
    if(a % b === 0) {
        return true;
    } else if ( b === 0) {
        return 'Number can not be divided by 0';
    } else {
        return false;
    }
}

module.exports = dividesEvenly;