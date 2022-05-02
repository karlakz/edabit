//Task: https://edabit.com/challenge/4gzDuDkompAqujpRi

// Best solution
// function addUp(num) {
//     if (num === 1) return 1;
//     return num + addUp(num - 1);
// }

function addUp(num) {
    let total = 0;
    for (let i=1; i<=num; i++) {
        total += i;
        // console.log(total);
    };
    return total;
};

console.log(addUp(13));
console.log(addUp(600));
