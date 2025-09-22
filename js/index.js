// console.log("hello world")
// var a=20;
// console.log(a);
// console.log(a);
// a=20;

// var a=20;
// console.log(a);
// var a=50;

// if(a>10){
//     var a=100;
//     console.log("a="+a);
// }
// else{
//     console.log("hvhchgvj");
// }
// console.log("hii"+a);
// let a=50;

// if(a>10){
//     let a=100;
//     console.log("a="+a);
// }
// else{
//     console.log("hvhchgvj");
// }
// console.log("hii"+a);
// const a=23;
// a=50;


// normal function


// function fun(){
//     return "hey...";
//     console.log("hello"); // return karne ke baad baki chij run nahi hogi
// }
// const data =fun()
// console.log(data);

// function fun(msg){
//     return "hey..."+msg;
//     console.log("hello"); 
// }
// const data =fun("greeting")
// console.log(data);



// function as an expression


// const data=function(a,b){
//     return a*b;
// }
// console.log(data(12,20));


// arrow function


// const data=(msg)=>{
//     console.log("hey...using arrow function "+msg)
// }
// data("in react development");
// const data=msg=>msg;
// console.log(data("greeting of the day"));

// const data=msg=>msg;
// const output=data("greeting of the day");
// console.log(output);


// IIFE immediately invoke function

// (function(){
//     console.log("welcome to mern session")

// })();

// setTimeout(()=>{
//     console.log("hiiiiii")
// },1000);

// function greet(msg="java"){
//     console.log(msg+" is a good language");
// }
// greet("python");

function selectlanguage(lang){
    let result;
    if(lang=="java"){
        function javaCompiler(){
            return "using java compiler"
        }
        result=javaCompiler();
    }
    else if(lang=="c"){
        function cCompiler(){
            return "using c compiler"
        }
        result=cCompiler();
    }
    else {
        result="no compiler found";
    }
    return result;
}
const data =selectlanguage()
console.log(data);





