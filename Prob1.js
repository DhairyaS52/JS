//Practicle 1
//Find the sum of numbers below 1000 which are divisible by 3 or 5
let sum=0;
for(let i=0; i<1000; i++){
    if(i%3==0 || i%5==0){
        sum+=i;
    }
}
console.log(`The sum of numbers below 1000 and divisible by 3 or 5 is: ${sum}`);