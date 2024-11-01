/*
Task 3: Advanced Number Processing
Write a function analyzeNumbers that processes an array of numbers. This function should:
Only accept an array with integer-type numbers, validating each item.
Triple each number.
Remove any numbers below 30.
Return an object containing the sum of remaining numbers and a separate list of filtered-out numbers.
*/

let arr1=[3,7,8,11,10.5,"powercoders",16,25];

let remain=[];

let removed=[];

function analyzeNumbers(arr1){

    arr1.forEach(aa=>{

        if(Number.isInteger(aa)){

            aa=aa*3;

            if(aa<30){

                removed.push(aa);
            }

            else{

                remain.push(aa);
            }
        }

    })

    return{

        remain,
        removed
          }

}

console.log(analyzeNumbers(arr1));



