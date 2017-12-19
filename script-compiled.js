'use strict';

// string concatenation 
var sayHello = function sayHello() {
    return alert('Hello world!');
};
sayHello();

var stringOne = 'World1';
var stringTwo = 'Hello  ' + stringOne + '.';

//multiply function
var multiply = function multiply(a) {
    var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    return a * b;
};

console.log(multiply(2, 5)); // 10
console.log(multiply(6, 6)); // 36
console.log(multiply(5)); // 5


//average function   HOW TO forEach...?
var average = function average() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
    }

    var total = 0;

    for (var i = 0; i < args.length; i++) {
        total += args[i];
    }

    return total / args.length;
};

console.log(average(1)); // 1
console.log(average(1, 3)); // 2
console.log(average(1, 3, 6, 6)); // 4


// grades table
var grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];

console.log(average.apply(undefined, grades));

// destructuring data
var data = [1, 4, 'Iwona', false, 'Nowak'];

var firstname = data[2],
    lastname = data[4];


console.log(firstname, lastname);
