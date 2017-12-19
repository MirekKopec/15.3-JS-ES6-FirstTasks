// string concatenation 
const sayHello = () => alert('Hello world!');
sayHello();

const stringOne = 'World1';   
const stringTwo = `Hello  ${stringOne}.`;  



//multiply function
let multiply = (a, b = 1) => a * b;

console.log(multiply(2, 5));	// 10
console.log(multiply(6, 6));	// 36
console.log(multiply(5));		// 5


//average function   HOW TO forEach...?
let average = (...args) => {

    var total = 0;

    for (var i = 0; i < args.length; i++) {
        total += args[i];
    }

    return total / args.length;
};

console.log(average(1));	 // 1
console.log(average(1, 3));	 // 2
console.log(average(1, 3, 6, 6));	 // 4


// grades table
const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];

console.log(average(...grades));


// destructuring data
const data = [1, 4, 'Iwona', false, 'Nowak'];

const [ , ,firstname , , lastname] = data;

console.log(firstname, lastname);

