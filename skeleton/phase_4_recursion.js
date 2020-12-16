function range(start, end) {
    if (start === end) {
        return [];
    }

    return [start].concat(range(start + 1, end));
};

console.log(range(1, 4));

function sumRec(arr) {
    if (arr.length === 0) {
        return 0;
    }

    return arr[0] + sumRec(arr.slice(1, arr.length + 1 ));
}

console.log(sumRec([1, 2, 3]));

// function exponent(base, exp) {
//     if (exp === 0) {
//         return 1;
//     }

//     return base * exponent(base, exp - 1);
// }

// console.log(exponent(2, 3));

function exponent(base, exp) {
    if (exp === 0) {
        return 1;
    }
    
    if (exp === 1) {
        return base;
    }

    if (exp % 2 === 0) {
        return exponent(base, exp / 2) ** 2;
    } else {
        return base * (exponent(base, (exp - 1) / 2) ** 2);
    }

}

console.log(exponent(2, 6));