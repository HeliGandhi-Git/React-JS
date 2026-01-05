import React from 'react'
function App() {
  let mydata = [1,2,3,4,5,6,7,8,9,10]


  


  return ( 
  <>

    <h3>map function in react.</h3> 
    {mydata.map((value,index) => {
      return(
        <>
        <li>{index+1}-{value}</li>
        </>
      )

    }
    )}








  </> );
}

export default App;