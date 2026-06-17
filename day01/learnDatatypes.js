//datatype--> format of the input // commended line--> excluded from execution
//Employee portal of the company
//empname, empID, empAge, empPh, empmidTerm,
//empAge, empPh-->numbers [All the digits 0-9,decimal]
//empname,empID--> Character sequence [A-Z, a-z, $]
// empmidTerm-->Yes / No --> boolean(true/false)

//syntax: keyword identifierName assignmentOperator(=) value
//camelCase-->every first word's first character should be start with lowercase
var empName = "Preeti Sharma" //string
var empmidTerm = true // boolean
var empPh = 9876543210 // number
var empLandline
var empParking = null //null-->no value, empty value

//typeof operator--> to check the datatype of the variable //unary operator--> only one operand    
console.log(typeof empName)//string
console.log(typeof empmidTerm)//boolean
console.log(typeof empPh)//number 
console.log(typeof empLandline)//undefined
console.log(typeof empParking)//null