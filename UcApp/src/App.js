import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './assets/css/App.css';
import Header from './views/layout/Header.jsx';
import Footer from './views/layout/Footer.jsx';
import Topics from './views/topics/Topics.jsx';
import Characters from './views/characters/containers/Characters.jsx'

export default function App() {


  return (
    <Router>
      <div>

      <Switch>
            <Route exact path="/">
            <div className="App">
              <Header className='uc-header'/>
              <div className='container2'>
                <Characters/>
              </div>
              <Footer className="uc-footer"/>
            </div>
            </Route>
            <Route path="/header">
              <Header className='uc-header'/>
            </Route>
            <Route path="/footer">
              <Footer className="uc-footer"/>
            </Route>
            <Route path="/topics">
              <Topics />
          </Route>
      </Switch>
      </div>
      

    </Router>
    
  );
}

// Documentación React Router: https://reacttraining.com/react-router/web/example/basic