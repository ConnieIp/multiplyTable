function createMultiplicationTable(start, end) {
    if (!checkInputValid(start, end)) {
        return null;
    }
}

function checkInputValid(start, end) {
    console.log('aaaaa ' + start + ' ' + end);
    if (end < start) {
        return false;
    }
    return true;
}

module.exports = createMultiplicationTable;