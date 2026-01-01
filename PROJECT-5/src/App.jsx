import React from 'react'
function App() {
    const[userData, setUserData] = React.useState({})

    const doSum = () => {
        let sum = parseInt(userData.txt1) + parseInt(userData.txt2);
        setUserData({...userData,ans:'sum is '+sum})
        
        
    }
    return ( <div>
        <h3>task : Sum Calculator</h3><br />
        NO 1. : <input type="text" onChange={(e)=>setUserData({...userData,txt1:e.target.value})} />
        <br />
        NO 2. : <input type="text" onChange={(e)=>setUserData({...userData,txt2:e.target.value})} />
        <br /><br />
        <input type="button" value='+' onClick={doSum} /><br />
        {userData.ans}

    </div> );
}

export default App;