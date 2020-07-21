function createMultiplyTable(start, end) {
    if (isValid(start, end)) {
        let res = "";
        for (let i = start; i <= end; i++) {
            res += getLine(start, i);
            if (i != end) {
                res += "\n";
            }
        }
        return res;
    }
    return null;
}
function getLine(start, end) {
    let ans = [];
    for (let i = start; i <= end; i++) {
        ans.push(getExpression(i, end));
    }
    return ans.join("\t");
}

function getExpression(multiplier, multiplicand) {
    return multiplier + "*" + multiplicand + "=" + multiplicand * multiplier;
}

function isValid(begin, end) {
    if (end < begin) {
        return false;
    }
    if (begin >= 1 && begin <= 1000 && end >= 1 && end <= 1000) {
        return true;
    }
    return false;
}

module.exports = {
    createMultiplyTable,
    isValid,
    getExpression
};
