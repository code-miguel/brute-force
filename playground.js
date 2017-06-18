


let generatedNumbers = [];
let targetNumber = 685;  // target
let randomGuess = Math.floor((Math.random() * 1000)); // returns a number btw 0 and 999
let attempt = 1;


generatedNumbers.push(randomGuess);


for (attempt; targetNumber != randomGuess; attempt++){

	let randomGuess2 = Math.floor((Math.random() * 1000));
	let arrayLength = generatedNumbers.length;

	while (generatedNumbers.includes(randomGuess2) == true){
		randomGuess2 = Math.floor((Math.random() * 1000)); 

	}
	randomGuess = randomGuess2;
	generatedNumbers.push(randomGuess);


}

console.log(`Success! we have found the target number ${randomGuess}`);
console.log(`number of attempts: ${attempt}`);
console.log(generatedNumbers);





