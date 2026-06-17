//basic arithmatic operators --> +, -, *, /, % (modulus), ** (exponentiation)
console.log(4/2) //2 //quotient operator gives the quotient of the division
console.log(4%2) //1--> modulus operator gives the remainder of the division

console.log(4/3) //2 //quotient operator gives the quotient of the division
console.log(4%3) //1--> modulus operator gives the remainder of the division

//comparison operators --> >, <, >=, <=, ==, ===, !=, !== or relationship operators--> to compare two 
// values and return a boolean value (true/false)
console.log(4<3) //false
console.log(4>3) //true
console.log(3<=3) //true
console.log(3==3) //true--> it checks only the value and not the datatype
console.log(3!=3) //false--> it checks only the value and not the datatype
console.log("Playwright"=="Playwright") //false--> it checks only the value and not the datatype
console.log("Playwright"==="playwright") //true--> it checks both the value and the datatype

//increment and decrement operators --> ++, --
let a = 3
//pre incremental  
console.log(++a) //4--> it will give the result of the addition but it will not change the value of a
//post increment operators
console.log(a++) //4--> it will give the result of the addition but it will change the value of a
console.log(a) //5--> it will give the updated value of a


let b = 15
//pre decrement operators
console.log(--b) //14--> it will give the result of the subtraction but it will not change the value of b
//post decrement operators
console.log(b--) //14--> it will give the result of the subtraction but it will change the value of b
console.log(b) //13--> it will give the updated value of b