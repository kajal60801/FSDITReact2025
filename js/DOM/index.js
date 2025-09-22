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
const container=document.getElementsByClassName('container');

// container[0].innerHTML='<h2 style=color:red>Hello World</h2>';
// console.log(container);

 const button=document.getElementById('btn');
 console.log(button);
const h2=document.createElement('h2');
h2.innerText="ABES Engineering College";
h2.style.color='green';
h2.style.backgroundColor='skyblue'
console.log(h2);
container[0].appendChild(h2);
 document.getElementById('out').innerHTML="<h2>loading img....</h2>"

 function msg(){
    document.getElementById('out').innerHTML="<h2>loading img....</h2>"

    setTimeout(()=>{
        const img=document.createElement('img');
img.src="https://img.freepik.com/free-photo/laptop-with-sun-background_1232-429.jpg?semt=ais_incoming&w=740&q=80";
img.setAttribute('height','200px');
img.setAttribute('width','200px');
console.log(img);
document.getElementById('out').innerHTML="<h2>welcome to abes ec</h2>"
container[0].appendChild(img);

    },3000);

//     const img=document.createElement('img');
// img.src="https://img.freepik.com/free-photo/laptop-with-sun-background_1232-429.jpg?semt=ais_incoming&w=740&q=80";
// img.setAttribute('height','200px');
// img.setAttribute('width','200px');
// console.log(img);
// document.getElementById('out').innerHTML="<h2>welcome to abes ec</h2>"
// container[0].appendChild(img);
 }
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

    button.addEventListener('click', msg);