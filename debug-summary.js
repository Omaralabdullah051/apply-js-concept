function getFactorial(number) {
    let factorial = 1;
    for (let i = 1; i <= number; i++) {
        factorial = factorial * i;
    }
    return factorial;
}

const getMyFactorial = getFactorial(8);
console.log(getMyFactorial);


// mile to km 
function mileToKm(mile) {
    let km = mile * 1.609344;
    return km;
}

const firstMile = mileToKm(5);
console.log(parseFloat(firstMile.toFixed(2)));

/* inches to feet */
function inchTofeet(inches) {
    let feet = inches / 12;
    return feet;
}
const firstInch = inchTofeet(488);
console.log(parseFloat(firstInch.toFixed(1)));
/* check even number */
function isEvenNumber(number) {
    if (number % 2 == 0) {
        return true;
    }
    else {
        return false;
    }
}
const myNumber = isEvenNumber(33);
console.log('my number is even ', myNumber);

/* check odd number */
function isOddNumber(number) {
    if (number % 2 != 0) {
        return true;
    }
    else {
        return false;
    }
}
const herNumber = isOddNumber(25);
console.log('her number is odd', herNumber);
/* check leap year */
function isLeapYear(year) {
    if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
        return true;
    }
    else {
        return false;
    }
}
const firstYear = isLeapYear(2100);
console.log('first year is leap year', firstYear);

// get for loop incremental factorial in a function 
function getfactorial(number) {
    let factorial = 1;
    for (var i = 1; i <= number; i++) {
        factorial = factorial * i;
    }
    return factorial;
}
const firstFactorial = getfactorial(6);
console.log(firstFactorial);
/* get for loop decremental factorial in a function */
function getfactorial(number) {
    let factorial = 1;
    for (var i = number; i >= 1; i--) {
        factorial = factorial * i;
    }
    return factorial;
}
console.log((getfactorial(7)));

/* get while loop incremental factorial in a function */
function getfactorial1(number) {
    let factorial = 1;
    let i = 1;
    while (i <= number) {
        factorial = factorial * i;
        i++;
    }
    return factorial;
}
console.log((getfactorial1(5)));

/* get while loop decremental factorial in a function */
function getfactorial(number) {
    let factorial = 1;
    let i = number;
    while (i >= 1) {
        factorial = factorial * i;
        i--;
    }
    return factorial;
}
console.log((getfactorial(9)));