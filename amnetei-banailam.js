// inches to feet 
function inchesToFeet(number) {
    let feet = number / 12;
    return feet;
}

console.log((inchesToFeet(244)));
console.log((inchesToFeet(24)));

// feet to inches 

function feetToInches(number) {
    let inches = number * 12;
    return inches;
}
const twelveFeet = feetToInches(12);
console.log(twelveFeet);

/* miles to km */
function milesToKm(number) {
    let km = number * 1.60934;
    return km;
}
console.log((milesToKm(28)));

/* km to miles */
function kmToMiles(number) {
    let miles = number / 1.60934;
    return miles;
}
console.log((kmToMiles(20)));

/* check even number */
function isEvenNumber(number) {
    if (number % 2 == 0) {
        return 'This is an even number';
    }
    else {
        return 'This is not an even number';
    }
}
const myNumber = isEvenNumber(251);
console.log(myNumber);

/* check odd number */
function isOddNumber(number) {
    if (number % 2 != 0) {
        return 'This is an odd number';
    }
    else {
        return 'This is not an odd number';
    }
}
console.log((isOddNumber(287)));

/* check leap year */
function isLeapYear(year) {
    if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
        return 'The year is a leap year';
    }
    else {
        return 'The year is not a leap year';
    }
}
console.log((isLeapYear(2240)));

/* get factorial incremental in for loop */
function getFactorial(number) {
    let factorial = 1;
    for (let i = 1; i <= number; i++) {
        factorial = factorial * i;
    }
    return factorial;
}
console.log((getFactorial(10)));

/* get factorial incremental in while loop */
function getFactorial(number) {
    let factorial = 1;
    let i = 1;
    while (i <= number) {
        factorial = factorial * i;
        i++;
    }
    return factorial;
}
console.log((getFactorial(8)));

// get factorial decremental in for loop 
function getFactorial(number) {
    let factorial = 1;
    for (let i = number; i >= 1; i--) {
        factorial = factorial * i;
    }
    return factorial;
}
console.log((getFactorial(8)));

// get factorial decremental in while loop 
function getFactorial(number) {
    let factorial = 1;
    let i = number;
    while (i >= 1) {
        factorial = factorial * i;
        i--;
    }
    return factorial;
}
console.log((getFactorial(5)));

// hour to minute 
function hourToMinute(hour) {
    let minute = hour * 60;
    return minute;
}
console.log((hourToMinute(24)));


// The formula is : tf= (tc x1.8)+32 
// and tk = tc + 273.15 
// celsius to fahrenheit 
function celsiusToFahrenheit(celsius) {
    let fahrenheit = (celsius * 1.8) + 32;
    return fahrenheit;
}
console.log('The temparature in fahrenheit is:', (celsiusToFahrenheit(8)));

// fahrenheit to celsius 
function fahrenheitToCelsius(fahrenheit) {
    let celsius = (fahrenheit - 32) / 1.8;
    return celsius;
}
console.log('The temparature in celcius is:', (fahrenheitToCelsius(20)));

// celsius to kelvin 
function celsiusToKelvin(celsius) {
    let kelvin = celsius + 273.15;
    return kelvin;
}
console.log('The temparature in kelvin is:', (celsiusToKelvin(24)));

// kelvin to celsius 
function kelvinToCelsius(kelvin) {
    let celsius = kelvin - 273.15;
    return celsius;
}
console.log('The Temparature in celcius is:', (kelvinToCelsius(300)));

// farenheit to kelvin 
function farenheitToKelvin(farenheit) {
    let kelvin = ((farenheit - 32) / 1.8) + 273.15;
    return kelvin;
}
console.log('The temparature in kelvin is:', (farenheitToKelvin(88)));

// kelvin to farenheit 
function kelvinToFarenheit(kelvin) {
    let farenheit = ((kelvin - 273.15) * 1.8) + 32;
    return farenheit;
}
console.log('The temparature in farenheit is:', (kelvinToFarenheit(400)));

// interest 
// p=500000 tk, r = 5%=5/100; t= 5 year, find out interest 
function interest(principle, rate, time) {
    let interestResult = (principle * rate * time) / 1000;
    return interestResult;
}
console.log('The interest result is:', interest(500000, 0.20, 5));


function gradeMark(mark) {
    if (mark < 50) {
        return 'grade-F';
    }
    else if (mark > 50 && mark < 60) {
        return 'grade-D';
    }
    else if (mark >= 60 && mark < 70) {
        return 'grade-C';
    }
    else if (mark >= 70 && mark < 80) {
        return 'grade-B';
    }
    else if (mark >= 80 && mark < 90) {
        return 'grade-A';
    }
    else if (mark >= 90) {
        return 'grade-A++';
    }
    else {
        return 'grade-none';
    }
}
const alia = gradeMark(95);
console.log(alia);

const dalia = gradeMark(66);
console.log(dalia);

const salia = gradeMark(80);
console.log(salia);

const malia = gradeMark(59);
console.log(malia);

const lilia = gradeMark(47);
console.log(lilia);

const jalaia = gradeMark(77);
console.log(jalaia);





function celsiusToFahrenheit(celsius) {
    let fahrenheit = (celsius * 1.8) + 32;
    return fahrenheit;
}
console.log(((celsiusToFahrenheit(32))));




