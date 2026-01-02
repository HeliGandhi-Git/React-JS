import React from 'react'
function App() {
    let mydata = [
      {name : "ram", age : 23 , city : "himmatnagar" , img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzY4ZhdaTaeaDiMrEl_YRU8_8txhzBh2hQcA&s'},
      {name : "shyam", age : 24 , city : "ahmedabad" , img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzY4ZhdaTaeaDiMrEl_YRU8_8txhzBh2hQcA&s'},
      {name : "sita", age : 25 , city : "gandhinagar" , img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzY4ZhdaTaeaDiMrEl_YRU8_8txhzBh2hQcA&s'},
      {name : "gita", age : 26 , city : "surat" , img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzY4ZhdaTaeaDiMrEl_YRU8_8txhzBh2hQcA&s'},
      {name : "hari", age : 27 , city : "rajkot" , img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzY4ZhdaTaeaDiMrEl_YRU8_8txhzBh2hQcA&s'},

    ]

  return ( <>
  <table border="1">
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Age</th>
        <th>City</th>
        <th>Image</th>
      </tr>
  </thead>
  <tbody>

    {mydata.map((value,index) => {
      return (
        <tr key={index}>
          <td>{index+1}</td>
          <td>{value.name}</td>
          <td>{value.age}</td>
          <td>{value.city}</td>
          <td><img width={100} src={value.img}  /></td>
        </tr>
      )
    })}
  </tbody>


  </table>
  
  
  </> );
}

export default App;