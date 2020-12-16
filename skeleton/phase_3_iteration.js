Array.prototype.bubbleSort = function() {
    let flag = true;

    while (flag) {
        flag = false;

        for (let i=0; i < this.length - 1; i++) {   
            if (this[i] > this[i+1]) {
                flag = true;
                let tempFirst = this[i];
                let tempSecond = this[i+1];
                this[i] = tempSecond;
                this[i+1] = tempFirst;
                // console.log(this);
            }
        }
    }
    return this;
};


console.log([11,3,5,6,2,34,6].bubbleSort());


String.prototype.substrings = function() {
    let new_arr = [];
    for (let i = 0; i < this.length; i++) {  
        for (let j = i; j < this.length; j++) {
            new_arr.push(this.slice(i, j+1));
        }   
    }
    return new_arr;
};

console.log("hello".substrings());

