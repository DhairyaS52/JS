// if even then n/2
// if odd 3n+1
let num = 13;
while(num!=1){
    if(num%2==0)
    {
        num=num/2
        console.log(`${num} -> `)
    }
    else
    {
        num=3*num+1
        console.log(`${num} -> `)
    }
}
