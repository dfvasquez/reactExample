import React from 'react';
import './assets/css/App.css';
import Header from './views/layout/Header.jsx';
import Footer from './views/layout/Footer.jsx';
import Characters from './views/characters/containers/Characters.jsx'
import { Provider } from 'react-redux'
import { store } from './redux/store.jsx'

class App extends React.Component {

  render(){
  return (
    <Provider store={store}>
    <div className="App">
      <Header className='uc-header'/>
      <div className='container2'>
        <Characters/>
      </div>
      <Footer className="uc-footer"/>
    </div>
    </Provider>
  );
}
}

export default App;
