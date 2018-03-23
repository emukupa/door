import React from 'react';
import './display.css';
class Display extends React.Component {
  state = {
    isOpen: false,
  };

  handleClick = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    return (
      <div className="Display">
        <button onClick={this.handleClick} className={this.state.isOpen ? ("red"): ("green") }>
          {this.state.isOpen ? ('Open') : ('Close')}
        </button>
      </div>
    );
  }
};

export default Display; 