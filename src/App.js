import './App.css';
import {useState} from 'react';

const customDictionary = {
  teh : "the",
  wrok : "work",
  fot : "for",
  exampl : "example"
}

function App() {
  const [text, setText] = useState("");
  const [suggestedText, setSuggestedText] = useState("");

  const handleInputChange = (e) => {
    setText(e.target.value);
    const words = text.split(" ");
    const correctedWords = words.map((word) => customDictionary[word.toLowerCase()] || word);
    const firstCorrection = correctedWords.find((word, idx) => word !== words[idx]);
    setSuggestedText(firstCorrection || "");
  }
  return (
    <div className="App">
      <h1>Spell Check and Auto-Correction</h1>
      <textarea value={text} onChange={handleInputChange} rows={5} cols={40} placeholder='Enter text...' />
      {suggestedText && <p>Did you mean: <strong>{suggestedText}?</strong></p>}
    </div>
  );
}

export default App;
