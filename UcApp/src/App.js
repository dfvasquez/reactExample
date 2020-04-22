import React from 'react';
import './App.css';
import Table from './Table.js'
import Header from './Header.js'

function App() {
  return (
    <div className="App">
      <Header className='uc-header'/>
      <div className='container'>
        <Table className='uc-table'/>
      </div>
    </div>
  );
}

export default App;
