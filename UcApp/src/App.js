import React from 'react';
import './assets/css/App.css';
import Header from './views/characters/components/Header.jsx';
import Characters from './views/characters/containers/Characters.jsx'


class App extends React.Component {

  render(){
  return (
    <div className="App">
      <Header className='uc-header'/>
      <div className='container'>
        <Characters/>
      </div>
    </div>
  );
}
}

export default App;
