import React from 'react'
import './App.css'
import axios from 'axios'

function App() {

const[data,setData] = React.useState([])
React.useEffect(() => {
  axios.get("https://dummyjson.com/products")
  .then(res => {
    console.log(res.data.products)
    setData(res.data.products)
  })
  .catch (err => 
    console.log(err)
  )
  
  // fetch("https://fakestoreapi.com/products")
  // .then((res) => res.json())
  // .then(res => {
  //   console.log(res)
  //   setData(res)
  // } )
  // .catch(err =>
  //   console.log(err)
  // )
}, [])

  return (<div className='main'>
    {data.map((value)=>{
      return (
        <div className='product'>
        <img width={100} src={value.images}  />
        <h2>{value.title}</h2>
        <p>${value.price}</p>
        </div>)
    })}
    
  </div>  );
}



export default App;
