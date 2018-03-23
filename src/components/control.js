import React from "react";

import "./control.css";

class Control extends React.Component {
  render() {
    return (
      <div className="Control">
        <button
          onClick={this.props.handleLock}
          className={this.props.isLocked ? "red" : "blue"}
        >
          {this.props.isLocked ? "Locked" : "Unlocked"}
        </button>
      </div>
    );
  }
}

export default Control;
