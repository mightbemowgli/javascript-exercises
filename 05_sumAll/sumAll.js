const sumAll = (x, y) => {
    let totalSum = 0;
    if (x < 0 || y < 0) {
        return 'ERROR';
    };
    if (!Number.isInteger(x) || !Number.isInteger(y)) {
        return 'ERROR';
    }
    if (x < y) {
        for (i = x; i <= y; i++) {
           totalSum += i;
        }
        return totalSum;
    } else {
        for (i = y; i <= x; i++) {
            totalSum += i;
        }
        return totalSum;
    };
};

// Do not edit below this line
module.exports = sumAll;
