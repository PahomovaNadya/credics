import React, { Component } from 'react';
import '../App.css';

class HeaderComponent extends Component {
  render() {
    return (
      <header className="App-header">
        <div className="App-logo"></div>
        <div className="App-client">
          שם משתמש: <span>{this.props.userName}</span><br />
          תאריך: <span>{this.props.projDate}</span>
        </div>
      </header>
    );
  }
}
export default HeaderComponent;