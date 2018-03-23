import React from 'react';
import './display.css';
class Display extends React.Component {
  render() {
    const disabled = this.props.isLocked ? "disabled" : "";
    return (
      <div className="Display">
        <button onClick={this.props.handleOpen} className={this.props.isOpen ? ("red"): ("green") } {...{disabled}} >
          {this.props.isOpen ? ('Open') : ('Close')}
        </button>
      </div>
    );
  }
};

export default Display; 