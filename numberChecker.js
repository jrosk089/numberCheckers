//highly composite number finder

const findHighlyCompNum = upperBound => {
    //stores the best-performing number for the iteration so far
    let currentWinner = 0;
    //number of divisors of the best-performing number. This starts from 1 rather than 0 so that it counts the number itself.
    let winnerDivisors = 1;
    //array used to store the actual divisors of the best-performing number
    let winnerList = [];

    //this section serves two purposes: 1) it gets round the fact that '1' kind of ruins everything; 2) it allows me to make a snarky comment.
    if (upperBound <= 2){
        return 'The first highly composite numbers are 1 and 2. Hooray.'
    }

    //where the actual fun starts.
    //the iterator starts at half of the upper bound to save processing time,
    //and the most highly composite number below a certain bound will always be above half of that bound.

    for (let i = Math.floor(upperBound/2); i <= upperBound; i++){

        //obviously you don't need to check odd numbers when you're looking for numbers that have the most divisors.

        if (i % 2 === 0){
            let numDivisors = 1;
            let divisorList = [];

            //the iterator -stops- at half of i, as there will never be a number above i/2 that divides i (fairly obviously).

            for (let j = 1; j <= i/2; j++){
                if (i % j === 0){
                    numDivisors += 1;
                    divisorList.push(j);
                }

                //This sets the currentWinner etc. to the best-performing number so far.
                //e.g., if the upper bound were 10, this would set 1, 2, 4 and then finally 6 as currentWinner.
                //This only happens if the number 'beats' the previous currentWinner,
                //as the most highly composite number is the smallest number with the most divisors.
                //e.g., 8 also has 4 divisors (1, 2, 4, 8) but it's bigger than 6, so 6 wins if 10 is the upper bound.

                if (numDivisors > winnerDivisors){
                    currentWinner = i;
                    winnerDivisors = numDivisors;
                    winnerList = divisorList;
                }
            }
        }
    }
    return `${currentWinner} is the most highly composite number up to ${upperBound}, with ${winnerDivisors} divisors: ${winnerList.join(", ")} and ${currentWinner}.`
};

console.log(findHighlyCompNum(10));