import { useId, useState, useEffect, memo } from 'react';
import './App.css';

const apiKey = process.env.REACT_APP_BING_API_KEY;
const apiEndpoint = process.env.REACT_APP_BING_API_ENDPOINT;


function App() {
  return <div className='container'>
    <div className='rounded-container'>
      <h3>SpellChecker</h3>
      <hr />
      
    </div>
  </div>
}

export default App;
