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

function execute100TimesCountPrimeNumbers() {
    for (let i = 0; i < 100; i++)
    {
        countPrimeNumbers();
    }
}

const timeStart = performance.now();
setTimeout(execute100TimesCountPrimeNumbers(), 0);
const timeEnd = performance.now();
const timeUsed = timeEnd - timeStart;

console.log(`Execution time of printing countPrimeNumbers was ${timeUsed} milliseconds.`);
