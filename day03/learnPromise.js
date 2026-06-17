// async function getText(){
//     return "playwright"
// }
// console.log(getText())

//promise--> javascript Object
//helps you to process a logic

//pending
//fulfilled
//rejected
function verifyLogin(){

    return new Promise((resolve,reject)=>{
        let auth=true //authorization permission
        if (auth==true){
            resolve("Logged in successfully")
        }else{
            reject("retry login")
        }
    
})
}
verifyLogin().then(result=>{console.log(result)}).catch(error=>{console.log(error)})

