// this page returnprime numbers after a iven array of integers


// our example of integers in an array
let randomNumbers = [1, 89, 97, 2, 3, 83, 4, 5, 6, 7, 8, 9, 10, 73, 97];

// the function below accept parameters and return prime values when the function is called
function generatePrimeNumbers(array){
  let result = []; // i declear an empty array
  
  // used an for of loop to loop the values of the array
    for( value of array){
      // the if confirms when value is divisible by 2 or 3, or the value 2 and 3 but not 1 push it to the result array
      if((value % 2) > 0 && (value % 3) > 0  && value !== 1 || value === 3 || value === 2)
      { 
        // when everything is true it will push the value at the end of the array
         result.push(value) 
        }
    }

    // finnaly our arry will retured when any changes are made or not
    return result;
}

// the result after console.log will be seen on your terminal
console.log(generatePrimeNumbers(randomNumbers));