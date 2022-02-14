var time = '10.15pm';
var bookPrice = 150;
var isWhiteColor = false;

// array 
var partners = ['sajid', 'mojid', 'nojid', 'lajit'];
partners.length;
partners.indexOf('nojid');
partners.push('kajit');
partners.pop();

// conditionals 
if (bookPrice < 120) {
    console.log('I will buy this book');
}
else {
    console.log('Mama!kicu discount denna');
}

// loop 
var i = 0;
while (i < 17) {
    console.log(i);
    i++;
}
for (var i = 0; i < 17; i++) {
    console.log(i);
}
// function 

function isMoonup(time) {
    if (time >= 19 && time <= 5) {
        return true;
    }
    return false;
}
var moonStatus = isMoonup(21);
console.log(moonStatus);

// let const

// value of variable could change 
let price = 27;
price = 29;
price = 31;
// value of variable will not change 
const myName = 'lal e lal mr.helal';
console.log(myName);
