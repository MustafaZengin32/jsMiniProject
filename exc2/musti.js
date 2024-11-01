/*
Task 2: Number Guessing Game
Develop a guessTheNumber function that simulates a number-guessing game. The program should:
Generate a random number and use guessTheNumber to check the user’s guesses.
Validate the input to ensure it’s an integer.
Count the number of attempts.
Return 1 if the guessed number is too high, -1 if too low, and 0 if the guess is correct.
*/

const randomNumber=Math.floor(Math.random()*10);

let guessNumber;

function guessTheNumber(guessNumber){

    if(guessNumber>randomNumber){

        return +1;

    }

    else if(guessNumber<randomNumber){

        return -1;
    }

    else{

        return 0;
    }

}

let count=0;

do{

    guessNumber=Number(prompt('Please enter guess number : '));

    count++;

    if(Number.isInteger(guessNumber)){

        let result = guessTheNumber(guessNumber);

        if(result===0){


            console.log("Congrats, after " + count + " attempts you found the number " + randomNumber);

            break;

        }

        else if(result===(+1)){

            console.log("High");


        }

        else{

            console.log("Low");
        }
   
    }




}while(true);