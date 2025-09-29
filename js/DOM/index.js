// const div=document.getElementsByTagName('div');
// console.log(div);
// div[0].innerText="Hello world";
// div[0].style.backgroundColor='cyan';
// console.log(div);
// // const container=document.getElementsByClassName('container');
// // container[0].innerHTML='<h2 style=color:red>Hello world</h2>';
// console.dir(container);
// const h2=document.createElement('h2');
// h2.innerText="abes engineering college";
// h2.style.color='green';
// h2.style.background="skyblue";
//  container[0].innerHTML
// console.log(h2);

// const container=document.getElementsByClassName('container');

// container[0].innerHTML='<h2 style=color:red>Hello World</h2>';
// console.log(container);

//  const button=document.getElementById('btn');
//  console.log(button);
// const h2=document.createElement('h2');
// h2.innerText="ABES Engineering College";
// h2.style.color='green';
// h2.style.backgroundColor='skyblue'
// console.log(h2);
// container[0].appendChild(h2);
//  document.getElementById('out').innerHTML="<h2>loading img....</h2>"

//  function msg(){
//     document.getElementById('out').innerHTML="<h2>loading img....</h2>"

//     setTimeout(()=>{
//         const img=document.createElement('img');
// img.src="https://img.freepik.com/free-photo/laptop-with-sun-background_1232-429.jpg?semt=ais_incoming&w=740&q=80";
// img.setAttribute('height','200px');
// img.setAttribute('width','200px');
// console.log(img);
// document.getElementById('out').innerHTML="<h2>welcome to abes ec</h2>"
// container[0].appendChild(img);

//     },3000);

//     const img=document.createElement('img');
// img.src="https://img.freepik.com/free-photo/laptop-with-sun-background_1232-429.jpg?semt=ais_incoming&w=740&q=80";
// img.setAttribute('height','200px');
// img.setAttribute('width','200px');
// console.log(img);
// document.getElementById('out').innerHTML="<h2>welcome to abes ec</h2>"
// container[0].appendChild(img);
//  }
// const img=document.createElement('img');
// img.src="download.jpeg";
// img.setAttribute('height','200px');
// img.setAttribute('width','200px');
// console.log(img);
// container[0].appendChild(img);



// const button=document.getElementById('btn');
// console.log(button);
//   document.getElementById('out').innerHTML="<h2>loading img....</h2>"

// // function msg(){
//   const img=document.createElement('img');

// //   console.log("Hi, I am working on DOM");
// //   console.log("Welcome in abes engineering college");
// // }
// // button.addEventListener('click',msg);
  
//  const button = document.getElementById('btn');
//     const output = document.getElementById('out');

//     function msg() {
        
//      out.textContent = "Welcome to ABES";
//     }

    // button.addEventListener('click', msg);
   

//  const button = document.getElementById('btn');
//     const output = document.getElementById('out');

    // function msg() {
        
    //  out.textContent = "Welcome to ABES";
//     }
//  }
//     button.addEventListener('click', msg);

// console.log("start")
// setTimeout(()=>{
//    console.log("welcome")
// },20000)
// console.log('end');

// function greetmsg(){
//     return "welcome to abes ec"
// }
// function msgHandler(msg,clbk){
//     console.log(msg);
//     const data=clbk();  
//         return msg+","+data;
// }
// const completemsg=msgHandler("hii",greetmsg);
// console.log(completemsg);

// const student=["mittal","kajal","shreya"];
// student.forEach((name)=>{
//     msgHandler(name,greetmsg)
// })

// const mypromise= new Promise(() => {
//    const password="789ghik";
//    if(password.length>8){
//       resolve("password length is ok");
//    }
//    else{
//       PromiseRejectionEvent("password length is not as per our policy");
//    }
   
// })
// mypromise.then((result)=>{console.log(result)})
// .catch((err)=>{console.log{err}})
// .finally(()=>{
//    console.log("all the resource have closed successfully");
// })
// function handledata(){
//    console.log(mypromise);
//    console.log(result)
// }
// handledata();




const button = document.getElementById('btn');
const disp = document.getElementById('disp');
let table=`<table border=1>`;
async function fetchdata() {
  disp.innerHTML = "<h2>data is loading...</h2>";
  
  const response = await fetch('https://dummyjson.com/recipes'); 
  const jsondata = await response.json();

  console.log(jsondata.recipes);

  //disp.innerHTML = <h2>${jsondata.recipes[0].name}</h2>; 
  jsondata.recipes.forEach(element => {
    table+=`<tr>
   <td><img src=${element.image} height=200 width=200 alt='image></td>
    <td>${element.id}</td>
    <td>${element.name}</td>
    <td>${element.ingredients}</td>
    </tr>`
    
  });
  table+=`</table>`;
  disp.innerHTML=table;
}

button.addEventListener('click', fetchdata);