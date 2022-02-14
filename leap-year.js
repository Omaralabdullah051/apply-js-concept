function isLeapYear(year) {
    if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) {
        return true;
    }
    else {
        return false;
    }

}

const myYear = 2400;
const isMyYearLeapYear = isLeapYear(myYear);
console.log('is my year leap year', isMyYearLeapYear);


const yourYear = 2224;
const isYourYearLeapYear = isLeapYear(yourYear);
console.log('is your year leap year', isYourYearLeapYear);

const herYear = 2600;
const isHerYearLeapYear = isLeapYear(herYear);
console.log('is her year leap year', isHerYearLeapYear);
