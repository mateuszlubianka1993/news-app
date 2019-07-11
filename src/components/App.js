import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './Header';
import Entertainment from './Entertainment';
import Health from './Health';
import Home from './Home';
import Science from './Science';
import Sports from './Sports';
import Technology from './Technology';


class App extends React.Component {
  render() {
    return(
      <div className="app-container">
        <BrowserRouter>
          <div>
            <Header />
            <Route path="/" exact component={Home} />
            <Route path="/entertainment" component={Entertainment} />
            <Route path="/health" component={Health} />
            <Route path="/science" component={Science} />
            <Route path="/sports" component={Sports} />
            <Route path="/technology" component={Technology} />
          </div>
        </BrowserRouter>
      </div>
    );
  };
}

export default App;
