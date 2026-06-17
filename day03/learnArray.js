//array belongs to non primitive data type
//console.log(typeof[]) //object
//[]--> arrays
//,--> separator
let course=["playwright","selenium","cypress"] //literals //zero based index-->value1-->index 0
//value2--> index 1
//value3--> index 2
console.log(course[course.length-1])
//property--> length
console.log(course.length) //1-based count
//helper function --> add a value to an array or it can remove a value from an Array
//add a value to an array--> push(),unshift() [Append new element to the end of an array]
course.push("Appium")
console.log(course)
//unshift() Inserts new element at the start of an array
course.unshift("QTP")
console.log(course)
//remove/replace a value from an array
//course[2]="selenium webdriver" //replaced
//splice() Remove the element from an array
//console.log(course.splice(2,3))
//pop() removes the latest/last element from the array
//shift removes the first element from the array
// course.shift()


course.pop();
course.shift();

console.log(course.length);
console.log(course);

for(let i = 0; i < course.length; i++) {
    console.log(course[i]);
}

//instansiation way of decalring the array
let mentorName = new Array("bhuvanesh","harrish","seeni","udai")//ArrayConstructor wrapperclass
console.log(typeof mentorName)

let value = mentorName.concat(course)
//console.log(value)
let sortedArray = value.sort()
console.log(sortedArray)