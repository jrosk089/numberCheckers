//highly composit number finder

const findHighlyCompNum = upperBound => {
    let currentWinner = 0;
    let winnerDivisors = 1;
    let winnerList = [];
    if (upperBound <= 3){
        return 'The first highly composite numbers are 1 and 2. Hooray.'
    }
    for (let i = Math.floor(upperBound/2); i <= upperBound; i++){
        if (i % 2 === 0){
            let numDivisors = 1;
            let divisorList = [];
            for (let j = 1; j <= i/2; j++){
                if (i % j === 0){
                    numDivisors += 1;
                    divisorList.push(j);
                }
                if (numDivisors > winnerDivisors){
                    currentWinner = i;
                    winnerDivisors = numDivisors;
                    winnerList = divisorList;
                }
            }
        }
    }
    return `${currentWinner} is the most highly composite number up to ${upperBound}, with ${winnerDivisors} divisors: ${winnerList.join(", ")} and ${upperBound})`
};

console.log(findHighlyCompNum(5));