Array.prototype.uniq = function() {
    let new_arr = [];
    for (let i = 0; i <= this.length - 1; i++) {
        if (!new_arr.includes(this[i])) {
            new_arr.push(this[i]);
        }
    }    
    return new_arr;
};
// console.log([1,2,2,3,3,3].uniq());


Array.prototype.twoSum = function() {
    let new_arr = [];

    for (let i = 0; i < this.length; i++) {
        for (let j = i + 1; j < this.length; j++) {
            if (this[i] + this[j]===0) {
                new_arr.push([i, j]);                
            }
        }
    }
    return new_arr;
};
// console.log([1,2,2,3,3,3,-2].twoSum());

Array.prototype.transpose = function() {
    let new_arr = new Array(this[0].length);

    for (let i = 0; i < new_arr.length; i++) {
        new_arr[i] = new Array(this.length);
    }

    // new_arr[1][1] = 6;
    // console.log(new_arr);

    for (let i = 0; i < this.length; i++) {
        for (let j = 0; j < this[0].length; j++) {
            // console.log(new_arr[0][0]);
            // console.log(this[i][j]);
            new_arr[j][i] = this[i][j];
        }
    }

    return new_arr;

};

// var items = [
//     [1, 2],
//     [3, 4],
//     [5, 6]
//   ];

// console.log(items.transpose());
// items.transpose();

