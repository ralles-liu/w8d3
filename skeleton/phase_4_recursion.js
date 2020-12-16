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


function fibonacci(n) {
    if (n===0) {
        return [];
    }

    if (n===1) {
        return [1];
    }

    if (n===2) {
        return [1,1];
    }

    let previous_fib = fibonacci(n-1);

    let next_num = previous_fib[previous_fib.length - 1] + previous_fib[previous_fib.length - 2];

    previous_fib.push(next_num);

    return previous_fib;

}


console.log(fibonacci(7));




function deepDup(arr) {
    let new_arr = [];
    if (!Array.isArray(arr)) {
        return arr;
    }

    for (let i=0; i < arr.length; i++) {
        new_arr.push(deepDup(arr[i]));
    }
    return new_arr;
}

console.log(deepDup([[1,2],[3,4]]));
