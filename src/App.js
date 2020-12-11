import React, { useState, useEffect} from 'react';
import './App.css';
import axios from 'axios'
import Character from './components/Character.js'


const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  const [char, setChar] = useState([])
  const [charId, setCharId] = useState(null)

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character')
    .then(res => {
      setChar(res.data.results)
    })
    .catch(err => {
      debugger
    })
  }, [])


  const openCard = id => {
    setCharId(id)
  }

  const closeCard = () => {
    setCharId(null)
  }

  return (
    <div className="App">
      <h1 className="Header">Rick & Morty Characters</h1>
      {
        char.map( c => {
        return  <Character key={c.id} char={c} charId={charId} open={openCard} close={closeCard}></Character>
        })
      
      }
    </div>
  );
}

export default App;
