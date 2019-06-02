import React, { Component } from 'react';
import '../App.css';

class MenuTopComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      txtSearchAll: "חיפוש מכשיר"
    }
    this.changeMenu = this.changeMenu.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
  }
  changeMenu = (event) => {
    this.props.changeMenuTopNumBlock(event.target.value);
  };
  handleNameChange = (event) => {
    this.setState({ 
      txtSearch: event.target.value
    });
    this.props.searchTopFunc(event.target.value);
  }
  render() {
    return (
      <div className="menuTopDiv">
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
          <li className={this.props.numbTopLi===1 ? "active" : "notactive"} value="1" onClick={this.changeMenu}>מכשיר כללי</li>
          <li className={this.props.numbTopLi===2 ? "active" : "notactive"} value="2" onClick={this.changeMenu}>מחסניות</li>
          <li className={this.props.numbTopLi===3 ? "active" : "notactive"} value="3" onClick={this.changeMenu}>פעולות <br />למכשיר</li>
          <li className={this.props.numbTopLi===4 ? "active" : "notactive"} value="4" onClick={this.changeMenu}>נתוני איזון <br />ופריקה</li>
          <li className={this.props.numbTopLi===5 ? "active" : "notactive"} value="5" onClick={this.changeMenu}>עודפים <br />וגרעונות</li>
          <li className={this.props.numbTopLi===6 ? "active" : "notactive"} value="6" onClick={this.changeMenu}>בליעות</li>
        </ul>
      </div>
    );
  }
}
export default MenuTopComponent;