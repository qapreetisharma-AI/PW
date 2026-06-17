//string
let course="play wright" // immutable character of the string
let objCourse=new String("play wright") //instansiation way
//let uc = course.toUpperCase() //mutable character of the string
console.log(course.toUpperCase())
console.log(course.length)
console.log(course.charAt(10))
console.log(course.charAt(10).toUpperCase())
console.log(course.slice(3))
console.log(course)
console.log(course.replace(" ","@"))
console.log(course.replaceAll(/[a-z]/g,"@"))
console.log(course.replaceAll(/play/g,"@"))
console.log(course.slice(-3))
console.log(course.indexOf("play"))