//iterative statement--> iteration [agile]--> repeatition of the code block multiple times
// until the condition is false// 
// business requirement: to print number 1 to 10 in the terminal
// console.log(1)
// console.log(++1)
// rule1: start number should be 1
// rule2: incremental ++
// rule3: condition is to print till 10th iteration

//for(initialization; condition; iteration){
for(let i=1; i<=10; i++){

    console.log(i);
}


//analogy: limit==> 5 rounds
// rule1: if healthy 5 rounds per day
// rule2: if not healthy 2 rounds per day
   let isHealthy = false
   for(let round=1; round<=5; round++){
    if(!isHealthy && round>2){//truthy
    break;
    }
    console.log("round no : "+round+ "completed")
    }
//----------------------------------------------------------------------------

    for(let i = 1; i <= 20; i++) {

    if(i % 2 !== 0) {
        console.log(i);
    }

}