for(let i = 1; i <= 20; i += 3) {
    console.log('hello World', i);
}

for(let num = 1; num <= 20; num++) {
    console.log(`${num}x${num} = ${num * num}`);
}
for (let i = 200; i >= 0; i -= 20) {
    console.log(i);
}
const gameBoard = [
    [4, 32, 500, 4],
    [64, 8, 22, 78],
    [8, 32, 16, 2],
    [2, 89, 6, 89]
];
console.log(gameBoard);

for(let i = 0; i < gameBoard.length; i++) {
    console.log(gameBoard [i]);
}

let subredits = ['soccer', 'pophead', 'cringe', 'books'];

for(let i = 0; i < subredits.length; i++) {
    console.log(subredits[i]);
}

// each team competes 3 times and then, the average of the 3 score is calculated (so on average score per team).
// A team only wins if it has at least Double the average score of the other team. Otherwise no team wins !)

//1. create an arrow function 'calcAverage' to calculate the average of 3scores
//2. use the funnction to calculate the average score of each team as a parameter ('avgDolphines' and avgWarriors),
// and then log the winner to the console, together with the victors points according to the rule above. Examples:
//warrior wins with (30 vs 20).
//3.create a function 'checkwinner' that takes the average score of a team as parameters ('avgDolphines and 'avgWarrior)
// and then log the winner to the console.
//4. use the checkWinner' function to determine the winner.

// TEST DATA 1 Dolphine score 44, 23, and 71. and Warrior score 65, 54, and 49


const magicSquare = [
    [2, 6, 7],
    [9, 5, 1],
    [4, 3, 8]
];
// use the loop to lopp into this array method


const calcAverage = (a, b, c) => (a + b + c) / 3;

let scoreDolphin = calcAverage (44,23,71);
let scoreWarrior = calcAverage (65, 54, 49);
console.log(scoreDolphin, scoreWarrior);

const checkWinner = function (avgDolphines, avgWarrior) {
    if (avgDolphines >= 2 * avgWarrior) {
        console.log (`Dolphine wins ${avgDolphines} vs ${avgWarrior}`);
    }else if (avgWarrior >= 2 * avgDolphines) {
        console.log(`Warrior win ${avgWarrior} vs ${avgDolphines}`);
    }else {
        console.log ('no team wins !!!');
    }
}
checkWinner (scoreDolphin, scoreWarrior);


let j = 0;
while (j <= 5) {
    console.log (j);
    j++;
}

const target = Math.floor(Math.random () * 10);
let guess = Math.floor(Math.random()* 10);
while(guess !== target) {
    console.log(`Target: ${target} Guess: ${guess}`);
    guess = Math.floor(Math.random() * 10);
}
console.log(`Target: ${target} Guess: ${guess}`);
console.log('CONGRATULATIONS YOU WIN !!!');

















console.log (magicSquare);

for(let i = 0; i < magicSquare.length; i++) {
    console.log(magicSquare[i]);
}

