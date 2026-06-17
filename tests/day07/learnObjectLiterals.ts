const bhuvaneshEmpinfo:{
    "@empId" : number,
    role : string,
    isMidTermAdjusted : boolean
}
={
    "@empId" : 1274,
    role  : "SDET",
    isMidTermAdjusted : true
}
console.log(bhvaneshEmpinfo["@empId"],bhvaneshEmpinfo.role)


// union operation (|) --> Combines multiple types into one
// syntax : type typeName = datatype | datatype
// or
// syntax : type typeName = value | value
type username= string | number 
let username:username="bhuvanesh@gmail.com"
username = 785863863
console.log(uname)
type standBrowser = "chrome"|"edge"|"firefox"
let selectBrowser :standBrowser="firefox"

// intersection (&) --> Combines multiple types into one with all properties included
// type basicInfo =  number |string
// type insured = boolean
// type empinfo = [number & string & boolean]
// let seeniEmp:empinfo={
//     empId:83736,
//     role :"jr.SDET",
//     isInsured:true
// }
