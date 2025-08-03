//Practical 5 (final pract of day 1)
//What is the n-digit pandigital prime
function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function getPermutations(array) {
    let results = [];

    function permute(arr, memo = []) {
        if (arr.length === 0) {
            results.push(memo.join(''));
        } else {
            for (let i = 0; i < arr.length; i++) {
                let curr = arr.slice();
                let next = curr.splice(i, 1);
                permute(curr.slice(), memo.concat(next));
            }
        }
    }

    permute(array);
    return results;
}

function findLargestPandigitalPrime(n) {
    let digits = [];
    for (let i = 1; i <= n; i++) {
        digits.push(i.toString());
    }

    let permutations = getPermutations(digits)
        .map(Number)
        .sort((a, b) => b - a); // Sort descending

    for (let num of permutations) {
        if (isPrime(num)) {
            return num;
        }
    }

    return null;
}

// Try with n = 7 (maximum useful pandigital length)
console.log("Largest n-digit pandigital prime:", findLargestPandigitalPrime(7));
