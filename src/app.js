import React from "react";

import Control from './components/control';
import Display from './components/display';

class App extends React.Component {
  state = {
    isOpen: false,
    isLocked: true,
  };

  handleOpen = () => {
    this.setState({ isOpen: !this.state.isOpen});
  }

  handleLock = () => {
    this.setState({ isLocked: !this.state.isLocked})
  }
  
  render() { 
    return (
      <div className="App">
        <Control isLocked={this.state.isLocked} handleLock={this.handleLock} />
        <Display isOpen={this.state.isOpen} handleOpen={this.handleOpen} isLocked={this.state.isLocked}/>
      </div>
    ); 
  }
};

export default App;
