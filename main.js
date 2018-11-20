function createMultiplicationTable(start, end) {
    if (!checkInputValid(start, end)) {
        return null;
    }
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

module.exports = createMultiplicationTable;