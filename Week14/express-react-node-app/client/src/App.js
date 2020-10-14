import React, { useEffect, useState } from 'react';
import './App.css';

const App = () => {
  
  const [hello, setHello] = useState([{"id":1,"username":"non"},{"id":2,"username":"nnon"}])
  const callAPI = () => {
    fetch('/users')
      .then(res => res.json())
      .then(resp => {
        console.log("gonna set hello to ", resp)
        setHello(resp)
      })
      .catch(error => console.error(`There was an error retrieving users: ${error}`))
  }

  useEffect(() => {
    callAPI()
  }, [])

  return (
    <div className="App">
      <h1>Users</h1>
      {hello.map(user => user.username)}
    </div>
  );
}

export default App