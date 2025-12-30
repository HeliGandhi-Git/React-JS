import React from 'react'
function App() {

  const [timer, setTimer] = React.useState(0) 
  const [stop, setStop] = React.useState(null) 

  function startTimer() { 
    let j = setInterval(() => {
      setTimer(timer => timer + 1)

      
    }, 700);
    setStop(j)
    
  }

  function pauseTimer() {
    clearInterval(stop)
    setStop(null)
    
  }

  return ( <div>
    <h3>Timer </h3>
    Time is : {timer}
    <br />
    <br />

    <input type="button" value="Start" onClick={startTimer} />
    <input type="button" value="pause" onClick={pauseTimer} />
    <input type="button" value="reset" onClick={()=>setTimer(0)} />



    
  </div> );
}

export default App; 

