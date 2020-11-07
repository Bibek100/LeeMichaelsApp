import React from 'react';
import './App.css';
import Items from './Items';
import Navbar from './Navbar';

const App = (props)=>{
  console.log('Here');
  return (
  <>
      <Navbar/>
      <Items />
  </>
  );
}

export default App;
