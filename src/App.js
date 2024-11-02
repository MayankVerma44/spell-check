import React, { useState } from 'react';

const customDictionary = {
  teh: "the",
  wrok: "work",
  fot: "for",
  exampl: "example"
};

const XSpellCheck = () => {
  const [text, setText] = useState('');
  const [suggestion, setSuggestion] = useState('');

  const checkSpelling = (input) => {
    const words = input.split(' ');
    for (let word of words) {
      const lowerCaseWord = word.toLowerCase();
      if (customDictionary[lowerCaseWord]) {
        return `Did you mean: ${customDictionary[lowerCaseWord]}?`;
      }
    }
    return '';
  };

  const handleChange = (event) => {
    const inputText = event.target.value;
    setText(inputText);
    setSuggestion(checkSpelling(inputText));
  };

  return (
    <div>
      <h1>Spell Check and Auto Correction</h1>
      <textarea
        value={text}
        onChange={handleChange}
        placeholder="Type here..."
      />
      {suggestion && <div>{suggestion}</div>}
    </div>
  );
};

export default XSpellCheck;
