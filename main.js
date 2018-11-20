function createMultiplicationTable(start, end) {
    if (!checkInputValid(start, end)) {
        return null;
    }

    return createMultiplicationTableWithValidNumbers(start, end);
}

function printMultiplyEquation(a, b, result) {
    return (a + '*' + b + '=' + result);
}

function checkInputValid(start, end) {
    if (end < start) {
        return false;
    }
    if (start < 1 || start > 1000 || end < 1 || end > 1000) {
        return false;
    }
    return true;
}

function createMultiplicationTableWithValidNumbers(start, end) {
    let i;
    let j;
    let text = '';
    for (i = start; i <= end; i++) {
        let line = '';
        for (j = start; j <= end; j++) {
            if (j <= i) {
                if (line.length != 0) {
                    line += '  ';
                }
                line += printMultiplyEquation(j, i, multiply(j * i));
            }
        }
        text += line;
        if (i != end) {
            text += '\n';
        }
    }
    return text;
}

module.exports = createMultiplicationTable;