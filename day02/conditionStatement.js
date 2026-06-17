//if else 
//isPrime-->true,false
//business logic: if the user is subscribed to prime, else user is not subscribed

let isPrime = true
if(isPrime==true){ //truthy condition
    console.log("movie starts to play")
}else{
    console.log("User should be redirected to subscribe page")
}

//filing your income tax return
//condition : //nested condtion if possible here we have 3 conditions to check, 
// so we can use nested if else statement
//rule1: if person earns less than 8 LPA, 0%--> tax free
// rule2: if person earns more than 8 LPA [true] or less than 15 [true] , 10%--> 10% tax deducted
// rule3: if person earns more than 15 LPA, 30%--> 30% tax deducted
//if else--> Unknown data
let incomeOfThePerson  = 8
if (incomeOfThePerson < 8){
    console.log("tax free, no deduction from the income")
}else if(incomeOfThePerson >= 8 && incomeOfThePerson < 15){
    console.log("10% tax is deducted from the income")
}else{
    console.log("30% tax is deducted from the income")
}   

//switch case -->known data--> mozilla / chrome / edge / safari
//key==case-->"firefox" = "firefox"

let browserName = "firefox"
switch(browserName){
    case "chrome":
        console.log("148.0.7778.179")
        break;  
        case "firefox":
        console.log("151.0.1")
        break;
    
    default:  
    console.log("Enter the valid browser name")      
    break;
} 