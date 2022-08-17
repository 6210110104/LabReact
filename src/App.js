import React from 'react';
import './App.css';
import CharacterCard from './CharacterClass';
import WordCard from './WordCard';


const word = "Hello";
function App() {
  const textInput = <input type="text"/>;
  return (
    <div>
      {
        <WordCard value = {word}/>
      }
      <p>
        {textInput}
      </p>
    </div>
  );
}

export default App;
