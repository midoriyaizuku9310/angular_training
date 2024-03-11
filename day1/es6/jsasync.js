console.log("this is js async")

//args to functions

// const fun =(arg) =>{

// console.log(arg*2)
// console.log("hic" + arg)
// console.log(arg.city)

// }
//fun(10)
//fun("mido")
//fun({city:"hyderabad"})

// const fun2 = (arg) =>{
//     console.log("fun2 function is called")
//     arg()
// }
// fun2(() => {
//     console.log("anonymous function is called")
// })

// const fun3 = (arg) =>
// {
//     console.log(arg*3)
// }
// //way 1 - anonymous value function
// fun3(20)

// //way 2 - named value function
// const num =33
// fun3(num)

//callback function
// const fun4 = (arg) =>{
//     console.log("fun2 function is called")
//     arg()
// }

// const anotherFun =() =>{
//     console.log("named function is called")
// }
//callback function is the function passed as argument to another function
//fun4(anotherFun)

// const fun5 =(arg) =>{
//     console.log("fun5 function is called")
//    console.log(arg)
// }
// fun5()
// fun5(10)


//use of callback function ============================
//problem of async function
// const getValue =() =>{
//     setTimeout(() => {//pauses program execution for a while
//         return {message:"hello world"}
//     }, 500);
   
// }

// const myValue = getValue()
// console.log(myValue.message)


//solution1 callback ==================================
// const getValue =(callback) =>{
//     setTimeout(() => {//pauses program execution for a while
//         callback({message:"hello world"})
//     }, 500);

// }

// getValue((myValue)=>{
//     console.log(myValue.message)
// })

//soultion2==========================

// const getValue =(callback) =>{
//     setTimeout(() => {//pauses program execution for a while
//         callback({message:"hello world"})
//     }, 500);

// }

// getValue((myValue)=>{
//     console.log(myValue.message)
// })

// const getValue =() =>{
//     //return new Promise()
//     //return new Promise(()=>{})

//     //return new Promise((resolve,reject)=>{})

//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("get value function")

//             resolve({message:"hello world"})
            
//         },500)
//     })
        

// }
// // getValue()
// //     .then()
// //     .catch()

// // getValue()
// //     .then(()=>{})
// //     .catch(()=>{})

//     getValue()
//     .then((response)=>{console.log(response.message)})
//     .catch((error)=>{console.log(error)})



    
const getValue =() =>{
    //return new Promise()
    //return new Promise(()=>{})

    //return new Promise((resolve,reject)=>{})
console.log("get value function")
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        
            if(10===12)
            resolve({message:"code is working"})
            else
            reject({message:"something went wrong"})
            
        },0)
    })
        

}
// getValue()
//     .then()
//     .catch()

// getValue()
//     .then(()=>{})
//     .catch(()=>{})

    getValue()
    .then((response)=>{console.log(response.message)})
    .catch((error)=>{console.log(error.message)})

