let companyName="testleaf"//literal way //String
let objCompanyName=new String("testleaf")
//instantiation way // object // memoryReference
let objCompanyName2=new String ("testleaf")
//value1=9 value2="9"--> not same

if(objCompanyName2.includes(objCompanyName)){ //value1==value2, type of value1==type of value2 [not datatype] 
// if you use == value is same and if you use === not same
   console.log("both the value is same")
}else(
    console.log("not same")

)
let CharSeq=companyName.split("").sort().join("")
    console.log(CharSeq)

let revSeq=companyName.split("").reverse().join("")  
    console.log(revSeq)

//substring()
//companyName.substring(2,7)
console.log(companyName.substring(2,7)) // if negative value is provided it will consider it as zero