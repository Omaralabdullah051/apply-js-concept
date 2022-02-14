// let factorial = 1;
// for (let i = 1; i <= 5; i++) {
//     factorial = factorial * i;
// }
// console.log(factorial);

function getFactorial(number) {
    let factorial = 1;
    for (let i = 1; i <= number; i++) {
        factorial = factorial * i;
    }
    return factorial;
}

const firstFactorial = getFactorial(7);
console.log('factorial of 7 is', firstFactorial);

const secondFactorial = getFactorial(9);
console.log('factorial of 9 is', secondFactorial);

// let factorial = 1;
// for (i = 1; i <= 7; i++) {
//     factorial = factorial * i;
// }
// console.log(factorial);

function getFactorial(number) {
    let factorial = 1;
    for (i = 1; i <= number; i++) {
        factorial = factorial * i;
    }
    return factorial;
}

const forthfactorial = getFactorial(4);
console.log('the forth factorial is', forthfactorial);