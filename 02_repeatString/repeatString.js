const repeatString = function(str, num) {
    if (num < 0) return 'ERROR';
    
    let output = '';

    for (let count = 0; count < num; count++) {
        output = output + str;
    }

    return output;
};

// Do not edit below this line
module.exports = repeatString;
