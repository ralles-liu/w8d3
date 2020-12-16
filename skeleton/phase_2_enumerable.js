// our version of array.each

// Array.prototype.myEach = function(callback) {
//     this.forEach(callback);
// };

// function thisIsACallback(item) {
//     console.log(item);
// };

// [1, 2, 3].myEach(thisIsACallback);
//our version of map
// Array.prototype.myMap = function(callback) {
//     let new_arr = [];
//     this.forEach(element => new_arr.push(callback(element)));
//     return new_arr;
// }

// function thisIsACallback(item) {
//     return item * 2;
// }

// console.log([1, 2, 3].myMap(thisIsACallback));


Array.prototype.myReduce = function(callback, initialValue = 0) {
    this.forEach(element => initialValue = callback(element, initialValue));
    return initialValue;
}

function thisIsACallback(item, initialValue) {
    return (initialValue + item);
}

console.log([1, 2, 3].myReduce(thisIsACallback, 25));

