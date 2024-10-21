const sumAll = function (numOne, numTwo) {
    if (
        typeof numOne !== 'number' ||
        typeof numTwo !== 'number' ||
        !Number.isInteger(numOne) ||
        !Number.isInteger(numTwo) ||
        numOne < 0 ||
        numTwo < 0
    )
        return 'ERROR';

    let sum = 0;

    for (let x = Math.min(numOne, numTwo); x <= Math.max(numOne, numTwo); x++) {
        sum += x;
    }
    console.log(sum);
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
