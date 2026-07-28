// console.log("Hello, World!");


// const sum = function(a,b){
//     return Math.sqrt(a) + Math.sqrt(b);
// }

// console.log(sum(4,9));

// const sum=(a,b)=>{return a+b}
// console.log(sum(5,9));

//IIFE Immediate invoke function as an expression
// (()=>{
//     console.log("USING IIFE")
// })();

// var a = "Hello";
// console.log(typeof(a));


// let a = 23;
// if (a<40){
//     let a = 30;
//     console.log("Value of a inside block = "+a)
// }

// console.log("value of a outside block = "+a);

//Callback

// function sum(a,b){
//     return a+b;
// }

// function msgWithSum(clbk,msg){
//     const result = clbk(40,50);
//     console.log("Hi,"+msg+" your result is = " +result);
// }
// msgWithSum(sum,"Spartan");

// function login(error, msg){
//     if(error){
//         console.log("Error is: "+error)
//     }
//     else{
//         console.log(msg)
//     }
// }

// function loginHandler(username, password, clbk){
//     if(username  == "Spartan03" && password == "Spartan@Kratos"){
//         clbk(null, "Login Sucess")
//     }
//     else{
//         clbk("Username or password is incorrect",null)

//     }
    
// }

// loginHandler("Spartan03","Spartan@Kratos",login)



//Synchronous and Asynchronous examples
// console.log("Step 1");
// setTimeout(()=>{console.log("Step 2")},1000)
// console.log("Step 3")


