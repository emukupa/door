import React from "react";

import Control from './components/control';
import Display from './components/display';

class App extends React.Component {
  render() { 
    return (
      <div className="App">
        <Control />
        <Display />
      </div>
    ); 
  }
};

export default App;
