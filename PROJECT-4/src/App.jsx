import React from 'react'
function App() {
  const [amount, setAmount] = React.useState("")
  const [rate, setRate] = React.useState("")
  const [result, setResult] = React.useState("")
  const[alert, setAlert] = React.useState("")

  const includeGst = () => {
    if(amount=="" || rate=="") {
    setAlert("enter amount and rate")
      return;
    }
    setAlert("")
    let gst = parseInt(amount) + (parseInt(amount)*parseInt(rate)/100)
    setResult("GST Included is : "+gst)
    
  }

  const excludeGst = () => {
    if(amount=="" || rate=="") {
      setAlert("enter amount and rate")
      return;
    }
    setAlert("")
    let gst = parseInt(amount) - (parseInt(amount) - (parseInt(amount)*(100/(100+parseInt(rate)))))
    setResult("GST Excluded is : "+gst)
  }

  return ( <div>
    <h3>task : GST Calculator</h3>
    Amount : <input type="text" onChange={(e)=>setAmount(e.target.value)} /> <br /> <br />
GST Rate% : <input type="radio" name='rate' value='5' onClick={(e)=>setRate(e.target.value)} /> 5%
     <input type="radio" name='rate' value='18' onClick={(e)=>setRate(e.target.value)} />  18%
      <input type="radio" name='rate' value='40' onClick={(e)=>setRate(e.target.value)} /> 40%
    <br />
    <br />
    <input type="button" value='Include Gst'  onClick={includeGst}  />
    <br />
    <br />
    <input type="button" value='Exclude Gst' onClick={excludeGst} />
    <br />
   <h1>{result}</h1> 
   <p style={{color:'red'}}>{alert}</p>
  </div> );
}

export default App
;