console.log("Hello World");

//Cowsay
const cowsay = require("cowsay");
console.log(cowsay.say({text :"srsly dude, why?"}));

//Variable Calling
const appName = "Demo";
const currentDate = 7;
console.log(appName+" "+currentDate);
const a = 123;
console.log(`Value of a is: ${a}`);

//function Decleration And Calling
function greet(name){
    let message = `Hello, ${name}!`;
    return message;
}
const greeting = greet("Alice");
console.log(greeting);

//loops
let counter = 0;
while(counter < 3){
    console.log(`My Counter is ${counter}`);
    counter++;
}

//for
const fruits = ["Apple",'Grapes','Mango','Banana'];
for (let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}

//if-else
let temp = 29;
if (temp > 30) {
    console.log("Its a hot day!");
} 
else if (temp > 20){
    console.log("Its a pleasent day!");
}
else {
    console.log("Its a chilly day!");
}

//finding using function
function CalculateArea(lenght, width = 1){
    return lenght * width;
}

const rectangleArea = CalculateArea(10, 5);
console.log(`Area of a 10x5 rectangle is: ${rectangleArea}`);

const squareArea = CalculateArea(8);
console.log(`Area of a square with side 8 (using default width) is: ${squareArea}`);

//finding without defining function
const getSum = function(x, y){return x+y;}
const addition = getSum(15,56);
console.log(addition);

//using arrow function
const multiply = (x, y) => x*y;
console.log(`The multiplication is: ${multiply(4,9)}`);
function mult(x,y){
    const c=x*y;
    return c;
}