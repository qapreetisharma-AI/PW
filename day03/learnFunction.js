// function greet(){
//     console.log("welcome to testleaf")
// }
// greet()
// //-------------------------------------------
// function greet(name){
//     console.log(`${name} welcome to testleaf`)
// }
// greet("Preeti")
//------------------------------------------
let greet=function(name){
    console.log(`${name} welcome to testleaf`)
}
greet("Preeti")

//arrow function
// //()=>{}
//     let add =(a,b)=>{
//         return a+b
//     }
//     console.log(add(12,18))

    let add =(a,b)=>a+b
    console.log(add(12,18))
    console.log(add(76,973))

    //setTimeout() --> Callback()
    //isPrime = true;
    //recommended movies--> History

    function greetStudent(name,call) {
        console.log("Hello, " +name + "!")
        call(); //call the function passed as the callback
    }

    //Define a callback function
    function displayThanks() {
        console.log("Thanks for learning with us!");

    }
//Use the greetStudent function with the callback
greetStudent("Everyone", displayThanks);

//-------------------------------------------

function watchMovie(user,history,recommended){
    if (user=="Preeti")
    console.log("Login is successful")
    history()
    recommended()
    console.log("Movie start to play")

}
function recommendedMovies(){
    console.log("Movie list is created based on history")
}
function userWatchHistory(){
    console.log("Tracking the user opinion")
}

watchMovie("Preeti",userWatchHistory,recommendedMovies)
