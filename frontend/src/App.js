import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header'
import Card from './components/Cards'
import Home from './components/Home'

function App() {
  return (
    <main className="App">
      <Header/>
      <div>
      <Home/>
      </div>
    </main>
  );
}

export default App;
