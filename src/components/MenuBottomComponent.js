import React, { Component } from 'react';
import '../App.css';

class MenuBottomComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      txtSearchAll: "חיפוש מכשיר"
    }
    this.changeMenu = this.changeMenu.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
  }
  changeMenu = (event) => {
    this.props.changeMenuBottomNumBlock(event.target.value);
  };
  handleNameChange = (event) => {
    this.setState({ 
      txtSearch: event.target.value
    });
    this.props.searchBottomFunc(event.target.value);
  }
  render() {
    return (
      <div className="menuBottomDiv">
        <div className="searchDiv">
          <i className="fa fa-search search-icon"></i>
          <input 
            id="search" 
            type="search" 
            autoComplete="off"
            value={this.state.txtSearch}
            placeholder="חיפוש מכשיר" 
            onChange={this.handleNameChange}
          /> 
        </div>
        <ul>
          <li className={this.props.numbBottomLi===1 ? "active" : "notactive"} value="1" onClick={this.changeMenu}>מכשירים</li>
          <li className={this.props.numbBottomLi===2 ? "active" : "notactive"} value="2" onClick={this.changeMenu}>&nbsp;</li>
          <li className={this.props.numbBottomLi===3 ? "active" : "notactive"} value="3" onClick={this.changeMenu}>&nbsp;</li>
          <li className={this.props.numbBottomLi===4 ? "active" : "notactive"} value="4" onClick={this.changeMenu}>&nbsp;</li>
          <li className={this.props.numbBottomLi===5 ? "active" : "notactive"} value="5" onClick={this.changeMenu}>&nbsp;</li>
        </ul>
      </div>
    );
  }
}
export default MenuBottomComponent;