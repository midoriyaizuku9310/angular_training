console.log("another js file")


num1 =10;//do not use
var num2=20;//do not use
const num3=30;//use this as default
let num4=40;//can use this as well

console.log(num3);
//num3=45;
//console.log(num3);

console.log(num4)
num4=45
console.log(num4)

num4='abcd'
console.log(num4)
num4=true

console.log(num4)
//alert(num4)
//let x =prompt('enter your name')
//console.log(x)

let name ="mido"
let name2='mido'
let name3=`mido`

let salary =10.67

if(name2=="mido")
    console.log(name2)
else
    console.log(danish)

//array
const myArray =[1,2,3,4,false,"abcd"]

//object

const employee = {
    eid:101,
    salary:25000,
    Name:"danish",
    phone:[123,456,789],
    address:{
        city:"hyderaad",
        pin:500090
    }
}

console.log(employee)
console.log(employee.address.pin)
console.log("the phone no is "+employee.phone[2])
 
const employee2 ={firstname:"danish",lastname:"mido"}

let{firstname,lastname}=employee2

function fun1()
{
    console.log("fun1 called");
}

fun1()

const fun2 =()=>
{
    console.log("fun2 called");
}
fun2()

//classes in JS

class Employee{
    constructor(firstname,lastname){
        this.firstname = firstname
        this.lastname = lastname
    }

    printSalary()
    {
        console.log(this.firstname + " " + this.lastname)
    }
}

const emp = new Employee("danish","mido");
emp.printSalary();


//for of loop, for in loop

const myFriends =["danish","mido"];

console.log(myFriends)
for(let x of myFriends)
{
    console.log(x)
}

for(let x in myFriends)
{
    console.log(x)
}

//array functions 

const prices =[2,4,6,8,19,12,13,16,18];
console.log(prices)

let increasedPrices = prices.map(price => price*2);
console.log(increasedPrices)

let evenPrices = prices.filter(even => even %2 ===0);
console.log(evenPrices)

//default args to functions


const addNums =(a,b) =>
{
    console.log(a+b)
}

 addNums(10,20)
 addNums(20,30)
addNums(30,40)
 addNums()
 addNums(10,20,30,40)
 addNums(10)

 

 //spread syntax

 console.log("spread")

 const nums =[10,20,30]
 const moreNums =[...nums,40,50,60]

 console.log(moreNums)

 //rest parameters

 const addNums2 =(...args) =>
{
   return args.reduce((total,nums) =>total + nums,0)
}
console.log("rest")
 console.log(addNums2(10))
 console.log(addNums2(20,20))
 console.log(addNums2(30,30,30))
 console.log(addNums2(40,40,40,40))







