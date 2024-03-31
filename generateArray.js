// the code below is a function that takes to parameters and returns values between the two parameters in the function
function generateArray(value1,value2){
    let arr = []; // i have just decleard an empty array

    //this code loops from the first parameter to second parameter  if the second parameter is greater than the first parameter of the function
    for(let i = value1; i <= value2; i++){
        // this code will push the FIRST loop to the last loop in an array 
      arr.push(i);
    }
    // this will return the array default
    return arr;
  }

  // the result after the function is called will be logged at the terminal
  console.log(generateArray(-4,19));