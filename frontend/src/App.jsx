
import { useEffect, useState } from 'react'
import './App.css'
// using axios
import axios from 'axios';
function App() {
  const [ jokes, setJokes ] = useState([]);

  // api request
  // when application is loaded, then only i should receive data and then i can send that data
  // here i don't have to change the data into json (parse), thats handled by axios
  useEffect(()=> {
    axios.get('/api/jokes')
    .then((response) => {
      setJokes(response.data)
    })
    .catch((error) => {
      console.log(error);
    })
  }, [])

  return (
    <>
      <h1>Full Stack</h1>
      <p>Jokes: {jokes.length}</p>
      {jokes.map((joke) => (
          <div key={joke.id}>
            <h3>{joke.title}</h3>
            <p>{joke.content}</p>
          </div>
))}
    </>
  )
}

export default App
