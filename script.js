var myName = "Russell";

let numberOfPets = 14;

const socialSecurity = 12312123;

const bio = `${myName} has ${numberOfPets} pets and his ssn is ${socialSecurity}`;

console.log(bio);



// 1. Instantiate and assign a variable called `petNames` that stores an array of the names of your pets' names (as strings). If you don't have any pets, or just have one, make up a few.
// 2. Loop through your `petNames` array and log each pet's name to the console.

const petNames = ["bella", "blue bell", "molly", "MsKittyTooPretty", "Alvin", "Lucy"];

for(let i = 0; i<petNames.length; i++){
    console.log(petNames[i]);
}


//put this into code to cause problems
// let stupid = [9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9]
// for(let i = 0; i < stupid.length; i++ ){
//      stupid.push(9);
//      console.log(stupid);
//     alert("MUHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHHAA");
// }



// <!-- 
// 1. Use the `var` keyword to instantiate and assign a variable called `myName` that holds the value of your name (a string)
// 2. Use the `let` keyword to instantiate and assign a variable called `numberOfPets` that holds the number of pets you hvae
// 3. Use the `const` keyword to instantiate and assign a variable called `socialSecurity` that holds a fake social security number (please don't use your real one, I'll get in trouble)



// Jump
// Mark as read (esc)
// Message Input

// Message #cohort-1 -->,




// 1. Create an array of your favorite foods. For the sake of this exercise, please include "noodles" as one of your favorite foods.
// 2. Loop through the array and log each food to the console
// 3. Add a conditional to the loop and check to see if any of your favorite foods are "noodles". If the current food is noodle, you should log "Heck yeah!! Noodles!" to the console.
// Challenge: refactor the conditional so that it checks for variations on the word "noodles". This if statement should check if the current food is "noodles" OR "Noodles" OR "Pasta", etc. 
// Here's a link for reference: https://www.w3schools.com/js/js_comparisons.asp


let favFoods = ["steak", "Noodles", "pizza", "steak", "shrimp", "PASTA"]

for(let i=0; i<favFoods.length; i++){
    console.log(favFoods[i]);

    if(favFoods[i].toLowerCase()==="noodles" || favFoods[i].toLowerCase()=== "pasta"){
        console.log("heck ya!!! Noodles!!!")
    }
}



