//if first and second values in fibonacci series are 1,1. which place value is a 1000 digit long?
let a = 1n;
let b = 1n;
let c = 2; 
while (String(b).length < 1000) {
    const nextFib = a + b;
    a = b;
    b = nextFib;
    c++;
}
console.log(`The first Fibonacci number with 1000 digits is at index: ${c}`);