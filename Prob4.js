//Practicle 4
//What is the sum of digits of 100!
let num = 100n;
function fact()
{
    let f=1n;
    while(num>=1n)
    {
        f = f * num;
        num = num - 1n;
    }
    return f
}
function add()
{
    let a = facto;
    let sum = 0n;
    while(a>=1n)
    {
        b = a%10n;
        a = a/10n;
        sum = sum + b;
    }
    return sum
}
const facto = fact(100);
console.log(`Factorial: ${facto}`);
const addd = add(facto);
console.log(`Add: ${addd}`);