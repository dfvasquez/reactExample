import React from 'react';
import './App.css';
import Table from './Table.js'
import Header from './Header.js'


class App extends React.Component {

  render(){
  return (
    <div className="App">
      <Header className='uc-header'/>
      <div className='container'>
        <Table />
      </div>
    </div>
  );
}
}

export default App;
