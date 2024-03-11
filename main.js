/*
  based on the following story, create the website visited:

  A visitor receives a prompt upon opening the website to enter a list of comma-separated froyo flavors. They type vanilla,vanilla,vanilla,strawberry,coffee,coffee. When they view the browser console, they observe a table listing how many of each flavor they have ordered. In this case, they will be able to observe that they have ordered three vanilla, two coffee, and one strawberry froyo.

  The plan:
    -prompt visitor, ask what flavors they want
      (vanilla,vanilla,vanilla,strawberry,coffee,coffee)
    -store their answer somewhere (it returns as a string)
      -probably have to turn it into an array first (.split)
      -turn their answer into an object
        -display object falvors + amounts as a table in console
*/



// ask user what flavors they want and store their answer
  // use default answer from assignment
const promptFlavors = prompt(`What flavors would you like?`, `vanilla,vanilla,vanilla,strawberry,coffee,coffee`)

// create array of flavors without comments
const splitFlavors = promptFlavors.split(`,`)

// create empty object to fill with user's input flavors from prompt
const tableFlavors = {}

// loop through all of split flavors
for(let i = 0; i < splitFlavors.length; i++){

  // check if we have a key for this flavor
  if(!tableFlavors[splitFlavors[i]]){

    // if not, create a key of flavor at index i with value 1
    tableFlavors[splitFlavors[i]] = 1
  } else{

    //if we already have a key of flavor at index i, increment its value by one
    tableFlavors[splitFlavors[i]]++
  }
}

console.log(promptFlavors)
console.log(splitFlavors)
console.log(tableFlavors)
