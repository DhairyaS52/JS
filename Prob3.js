//Practicle 3
//What is the largest prime factor of 600851475143
let n = 2**50*3;
let factor = 2;
while (factor * factor <= n) {
    if (n % factor == 0) {
        n = n / factor;
    } else {
        factor++;
    }
}
console.log(`Largest prime factor: ${n}`);