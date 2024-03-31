//when this page is runned on terminal e.g node swapCase it will out up a Swaped Sentence 

//this elo is an exampele of the sentence o be swapped to provide thos => tHE qUICK bROWN fOX
let string = "The Quick Brown Fox";


// when this function is called it will accept an input of type string then output swaped version of the sentence 
function swapCase(string){
//the variable below hold the version of the sentence that is being split by words to an array
  word = string.split(' ');

  // the belo code will retun after the map has looped throu the swapped string that is held by the variable word
    return  word.map( i =>  {
        // the below code will return the first letter of the word in lower case and the rest of the word in upper case 
    return  i[0].toLowerCase() + (i.slice(1)).toUpperCase()
    }).join(" "); // thisjoin(' ') will retur the array back to a string when done 
}
console.log(swapCase(string));