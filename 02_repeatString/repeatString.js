const repeatString = (phrase, num) => {
    let repeater = "";
    if (num < 0) {
        return "ERROR"
    } else {
        for (let i = 0; i < num; i++) {
            repeater += phrase
        }
    }
    return repeater;

};

// Do not edit below this line
module.exports = repeatString;
