function isPrime(n: number) {
    for (let i = 2; i <= n/2; i++) {
        if (n % i === 0) {
            return 0;
        }
    }
    return 1;
}

export function getPrimes() {
    let numPrimes = 0;
    for (let i = 2; i < 250001; i++) {
        numPrimes += isPrime(i);
    }
    return numPrimes;
}