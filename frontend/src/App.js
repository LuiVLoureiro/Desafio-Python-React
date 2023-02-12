import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header'
import Card from './components/Cards'

function App() {
  return (
    <main className="App">
      <Header/>
      <Card/>
    </main>
  );
}

export default App;
