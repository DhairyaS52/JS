//Practicle 2
//Find the sum of all even fibonacci number under 4 million
let sum1 = 0,first = 0,second = 1,next = first + second;
while (next < 4000000) {
    if (next % 2 == 0) {
        sum1 += next;
    }
    first = second;
    second = next;
    next = first + second;
}
console.log(`sum of all even fibonacci number under 4 million is: ${sum1}`);