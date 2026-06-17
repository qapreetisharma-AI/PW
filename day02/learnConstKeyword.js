//part1: declaration --> const firstName
//part 2: initialization --> =
// const course//Uncaught SyntaxError: Missing initializer in const declaration
// course= "Playwright" //string
// console.log(course) //Playwright

const course= "Cypress" //string
console.log(course)

//part 3: reinitialization--> not allowed in const keyword but allowed in var and let keyword
course = "Selenium"
console.log(course)    //TypeError: Assignment to constant variable.
//part4: redeclaration--> not allowed in const keyword but allowed in var keyword
// const course = "Playwright"
// console.log(course) //SyntaxError: Identifier 'course' has already been declared

//part 5: hoisting--> not allowed in const keyword but allowed in var keyword
console.log(courseDuration) //ReferenceError: Cannot access 'courseDuration' before initialization
const courseDuration = "2 months" //global reference //TypeError: Assignment to constant variable.

//part 6: scope restriction--> const keyword is block scoped--> we can access the variable only inside
// the block where it is declared
function greetUser(){   
 {   const empNation = "India"  //local reference 
}   
    console.log(empNation) //India //ReferenceError: empNation is not defined, because it is declared
    //  inside the block and we are trying to access it outside the block, so it will throw an error.
}       
greetUser()