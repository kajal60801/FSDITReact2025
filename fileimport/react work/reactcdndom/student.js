const parent=document.getElementById('container');
console.log(parent);
const root=ReactDOM.createRoot(container);
const h2=React.createElement("h2",{style:{backgroundColor:'brown',color:'white',paddingLeft:'300'}},"Welcome to React ");
root.render(h2);
const studentDetails = (
    <div style={{backgroundColor: 'brown', color: 'white', padding: '20px'}}>
      <h2>Welcome to React Development using CDN</h2>
      <h3 style={{color: 'lightblue'}}>Name: Rahul</h3>
      <h3 style={{color: 'lightblue'}}>Roll No: 1234</h3>
      <h3 style={{color: 'lightblue'}}>Branch: CSE</h3>
      <h3 style={{color: 'lightblue'}}>Section: E</h3>
      <h3 style={{color: 'lightblue'}}>College: ABES Engineering College</h3>
    </div>
  );

  root.render(studentDetails);





