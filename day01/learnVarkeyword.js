// part 1 declaration --> var firstName;
// part 2 initialization-->"Preeti"
var firstName= "Preeti" //string
//console.log(firstName) //Preeti
//part 3 reinitialization
var firstName = "Sharma"
console.log(firstName) //Sharma

//Practice
// firstName = "876543"//number
// console.log(firstName)
// firstName = true //boolean
//  console.log(firstName)
// firstName = null //null
// console.log(firstName)
// firstName = undefined //undefined
// console.log(firstName) //undefined

//part 4 : redeclaration
var firstName = "Kshitij Agnihotri"
console.log(firstName) //Kshitij Agnihotri
console.log(lastName) //undefined // will shoot an error if we try to access a variable before declaration

//part 5: hoisting--> to access a variable before declaration
var lastName = "Agnihotri"
console.log(lastName) //Agnihotri

//Part 6: scope restriction // var keyword is function scoped--> we can access the variable only inside the function where it is declared

function greetUser(){
    var empNation = "India"
    console.log(empNation) //India
}
greetUser()
//console.log(empNation) //error--> empNation is not defined, 
// because it is declared inside the function and we are trying to access it outside the function, 
// so it will throw an error.
//Reference Error--> when we try to access a variable that is not defined in the current scope.


