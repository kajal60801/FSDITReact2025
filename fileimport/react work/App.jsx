const container=document.getElementById('container');
//console.log(container);
const root=ReactDOM.createRoot(container);
const h2=React.createElement("h2",{style:{backgroundColor:'brown',color:'white',paddingLeft:'300'}},"Welcome to React Development using CDN");
const h3=React.createElement('h3',{},"Shreya Parashar");
const pic=React.createElement("img",{src:"https://images.pexels.com/photos/9885339/pexels-photo-9885339.jpeg?cs=srgb&dl=pexels-okja-ronan-9885339.jpg&fm=jpg",style:{height:'100px',width:'100px'}});





const li1=React.createElement("li",{},"Java Programming");
const li2=React.createElement("li",{},"Python");
const li3=React.createElement("li",{},"React");
const ul=React.createElement("ul",{style:{backgroundColor:'cyan'}},li1,li2,li3);
const header =React.createElement("div",{style:{display:'flex',alignItems:'center',gap:'200px',backgroundColor:'#d19f15',color:'white'}},pic,h3);
const wrapper=React.createElement('div',{},h2,header,ul);


const h21=<h2>Welcome to react Development</h2>
const li4=<li>Angular</li>
const li5=<li>Vue JS</li>
const ul1=<ul>{li4} {li5}</ul>

const container1=(
       <div>
        {h21},
        {ul1}
       </div>
)


root.render(container1);