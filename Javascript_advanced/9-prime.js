function countPrimeNumbers() {
    let count = 0;
    
    for (let i = 2; i <= 100; i++)
    {
        let isPrime = true;
        for (let j = 2; j < i; j++)
        {
            if (i % j === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            count++;
        }
    }
    
    return count;
}

const timeStart = performance.now();
countPrimeNumbers();
const timeEnd = performance.now();
const timeUsed = timeEnd - timeStart;
console.log(`Execution time of printing countPrimeNumbers was ${timeUsed} milliseconds.`);

