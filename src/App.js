import React from 'react';
import './App.css';
import CharacterCard from './CharacterClass';
import WordCard from './WordCard';

const word = "Hello";
function App() {
  return (
    <div>
      {
        <WordCard value = {word}/>
      }
    </div>
  );
}

export default App;
