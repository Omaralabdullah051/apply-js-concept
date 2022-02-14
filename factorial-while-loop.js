// while loop increment ways to get factorial in function 
function getfactorial1(number) {
    let factorial = 1;
    let i = 1;
    while (i <= number) {
        factorial = factorial * i;
        i++;
    }
    return factorial;
}
const yourFactorial = getfactorial1(5);
console.log(yourFactorial);

// while loop reverse Weys(decrement)
function getFactorial(number) {
    let factorial = 1;
    let i = number;
    while (i >= 1) {
        factorial = factorial * i;
        i--;
    }
    return factorial;
}

const myfactorial = getFactorial(6);
console.log(myfactorial);


// for loop reverse (decrement)

function getfactorial2(number) {
    let factorial = 1;
    for (let i = number; i >= 1; i--) {
        factorial = factorial * i;
    }
    return factorial;
}

const herfactorial = getfactorial2(8);
console.log(herfactorial);
