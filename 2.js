//Json
const myObject = {
    "name": "Alice",
    "age" : 25,
    "isStudent" : true,
    "hobbies" : ["Reading", "coding"],
    "address" : {
        "city" : "New York",
        "zipcode" : "10001"
    }
}
console.log(`Name: ${myObject.name}`)
console.log(`Is he a college student: ${myObject.isStudent}`)
console.log(`Hobbies: ${myObject.hobbies[0]}`)
console.log(`Address Zip code: ${myObject.address.zipcode}`)

console.log("")

//Arrays
let a = [];
for (let i = 0; i < 100; i++) {
    a[i] = (i + 1) * 3;
}
let b = [];
for (let i = 0; i < a.length; i++) {
    if (a[i] % 5 === 0) {
        b.push(a[i]);
    }
}
let sum = 0;
for (let i = 0; i < b.length; i++) {
    sum += b[i];
}
console.log(`Sum in an Array from 1 to 10 is ${sum}`)

// better and shorter code for above
let num = []
for(let i=0; i<=100; i++){num.push(i)}
console.log(num.map(x => x*3).filter(x => x%5==0).reduce((a,x)=>a+x))

//array2
const users = [
    {"name":"Alice", "age":28},
    {"name":"Bob", "age":30},
    {"name":"Charlie", "age":25}
]
totalAge = users.map(x => x.age).reduce((a,x)=>a+x)
avgAge = totalAge/users.length
console.log(avgAge)