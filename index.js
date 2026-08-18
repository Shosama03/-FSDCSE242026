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
// for(i=0;i<10000;i++){
//     console.log("i =" +i);
// }
// // setTimeout(()=>{console.log("Step 2")},1000)
// console.log("Step 3")

const button = document.getElementById('btn');
const container=document.getElementById('container');

    const h1 = document.createElement('h1');
    console.log(h1)
    h1.innerText='ABES ENGG COLLEGE';
// console.log(button)
// console.log(container)

    function ping(){
        // alert('server ping')
    container.innerHTML='<h2>Welcome to DOM</h2>'
    container.appendChild(h1);
    }


button.addEventListener('click',ping);
