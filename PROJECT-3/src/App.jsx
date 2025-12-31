import React from 'react'
function App() {
      const[no1, setNo1] = React.useState("");
      const[no2, setNo2] = React.useState("");
      const[ans, setAns] = React.useState("");
      const[operation, setOperation] = React.useState("");
      

      function doSum() {
        if(no1=="" || no2=="") {
          alert("enter no1 and no2")
          return;
        }else{
        let sum = parseInt(no1) + parseInt(no2);
        setAns("sum is : "+sum)
        }
      }
      function doSub() {
        if(no1=="" || no2=="") {
          alert("enter no1 and no2")
          return;
        }else{
        let sub = parseInt(no1) - parseInt(no2);
        setAns("sub is : "+sub)
        }
      }

      function doOperation(){
        if(no1=="" || no2=="") {
          alert("enter no1 and no2")
          return;
        }else if(operation=="+"){ {
        let sum = parseInt(no1) + parseInt(no2);
        setAns("sum is : "+sum)
        }
      }else if (operation=="-"){
        let sub = parseInt(no1) - parseInt(no2);
        setAns("sub is : "+sub)
      }else if(operation==""){
        setAns("select an operation")
        return;
      }
    }
  return ( 
    <div>
      <h3>task : Calculator</h3>
      <br />
    NO 1 :   <input type="text" onChange={(e)=>setNo1(e.target.value)}   />
    NO 2 :   <input type="text" onChange={(e)=>setNo2(e.target.value)}   />
    <br />
    <br />
      sum <input type="radio" value="+" name='operation' onClick={doSum} />  
      sub <input type="radio" value="-" name='operation' onClick={doSub} /> 
      <br />
      <br />   
     <select name="operation" onChange={(e)=>setOperation(e.target.value)  } onClick={doOperation}>
      <option value="">select an operation</option>
      <option value="+">sum</option>
      <option value="-">sub</option>
     </select>
    <h1>{ans}</h1>
    
    </div>
   );
}

export default App;