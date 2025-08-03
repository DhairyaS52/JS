//Sum of digits of 2^1000 using array reduce method
console.log((BigInt(2)**BigInt(1000)).toString().split('').map(Number).reduce((a,x)=>a+x))