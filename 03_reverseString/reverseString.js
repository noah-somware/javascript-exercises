const reverseString = function(str) {
    if (!str) return '';

    let output = '';
    const length = str.length;

    for (let count = length - 1;count > -1;count--) {
        output = output + str[count];
    }
    
    return output;
};

// Do not edit below this line
module.exports = reverseString;
