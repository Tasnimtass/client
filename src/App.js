import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';

const App=()=> {
  const [message, setMessage] = useState('');// Stocke la réponse de l'API
  useEffect(() => {
    // Requête vers le backend via le proxy
    fetch('/api/message')
      .then(response => response.json())//convertit la reponse en json
      .then((data) => setMessage(data.message))//les donnes de json{salut depuis backend} sont afficher 
      .catch((error) => console.error('Erreur lors de la récupération des données:', error));
  }, []); 
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{message || 'Chargement ok ok ...'}</p> 
      </header>
    </div>
  );
}
export default App;
