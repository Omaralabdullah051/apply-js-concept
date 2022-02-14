// string concatenation ;
// input name and output custom message.
function message(name) {
    let customMessage = ' Hello!' + name + ',Come on and take vaccine';
    return customMessage;
}
console.log((message("jolil")));
// input pizza food and quantity and output a standard custom message 
function pizzaFood(food, quantity) {
    if (food.toLowerCase() != "pizza") {
        return 'sorry, we sell pizza only';
    }
    else if (quantity <= 0) {
        return 'sorry, use a valid quantity';
    }
    else if (quantity >= 16) {
        return 'sorry, only 15 pizza left';
    }
    else if (quantity > 5) {
        let price = (10 - 0.5) * quantity;
        let message = 'order successful! you get 5% discount. order info:' + food + ' .Price:$' + price;
        return message;
    }
    else {
        let price = 10 * quantity;
        let message = 'order successful! order info:' + food + ' .Price:$' + price;
        return message;
    }
}
console.log((pizzaFood("PIzza", 16)));

// input number and out 1 to the number 
function printer(numberLimit) {
    for (var i = 1; i <= numberLimit; i++) {
        console.log(i);
    }
}
printer(10);

// input burger and quantity and output standard custom message
function burgerhouse(name, quantity) {
    if (name.toLowerCase() != 'burger') {
        return 'Sorry,sir/medam.We sell burger only';
    }
    else if (quantity >= 16) {
        return 'Sorry,sir/medam.just 15 burgers left'
    }
    else if (quantity <= 0) {
        return 'Input a valid food quantity';
    }
    else if (quantity > 10) {
        let price = (10 - 0.5) * quantity;
        let message = 'order done successfully with 5% discount! order info: ' + name + '.price:$' + price;
        return message;
    }
    let price = 10 * quantity;
    let message = 'order successful! order info: ' + name + '.price:$' + price;
    return message;
}
console.log((burgerhouse('burger', 15)));