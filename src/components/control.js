import React from "react";

import "./control.css";

class Control extends React.Component {
  state = {
    isLocked: false
  };

  handleClick = () => {
    this.setState({
      isLocked: !this.state.isLocked
    });
  };

  render() {
    return (
      <div className="Control">
        <button
          onClick={this.handleClick}
          className={this.state.isLocked ? "red" : "blue"}
        >
          {this.state.isLocked ? "Locked" : "Unlocked"}
        </button>
      </div>
    );
  }
}

export default Control;
