const removeFromArray = function (array, ...args) {
    let newArr = [];
    array.forEach(item => {
        if (!args.includes(item)) {//returns true if item is not included in args
            newArr.push(item) //if item is not in args, then push item to new array
        }                     //in order to "remove" from array.  
    })
    return newArr
}


console.log(removeFromArray([1, 2, 3, 4], 2, 3))




// Do not edit below this line
module.exports = removeFromArray;
