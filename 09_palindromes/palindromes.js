const palindromes = function (pali) {
    let reversedPali = "";
    let str = pali.replace(/[^\w\s\']|_/g, "")
        .replace(/\s+/g, "")
    for (let i = str.length - 1; i >= 0; i--) {
        reversedPali += str[i];
    }
    if (str.toLowerCase() == reversedPali.toLowerCase()) {
        return true;
    } else {
        return false;
    };
}
console.log()
// Do not edit below this line
module.exports = palindromes;
