//part1: declaration --> var firstName
//part 2: initialization --> =
let course= "Playwright" //string
//part 3: reinitialization
course = "Cypress"
console.log(course) //Cypress 
//part4: redeclaration--> not allowed in let keyword but allowed in var keyword
// let course = "Selenium"
// console.log(course) //SyntaxError: Identifier 'course' has already been declared  

//part 5: hoisting--> not allowed in let keyword but allowed in var keyword
console.log(courseDuration) //ReferenceError: Cannot access 'courseDuration' before initialization
let courseDuration = "2 months" //global reference

//part 6: scope restriction--> let keyword is block scoped--> we can access the variable only inside 
// the block where it is declared
function greetUser(){   
 {   let empNation = "India"  //local reference
}   
    console.log(empNation) //India //ReferenceError: empNation is not defined, because it is declared
    //  inside the block and we are trying to access it outside the block, so it will throw an error.
}
greetUser()
