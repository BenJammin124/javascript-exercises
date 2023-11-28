const getTheTitles = function (books) {
    let arr = [];
    arr = books.map(title => title.title)
    return arr;
};

// Do not edit below this line
module.exports = getTheTitles;
