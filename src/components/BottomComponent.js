import React, { Component } from 'react';
import '../App.css';
import PageBottomFirstComponent from './PageBottomFirstComponent';
import PageBottomSecondComponent from './PageBottomSecondComponent';
import PageBottomThirdComponent from './PageBottomThirdComponent';
import PageBottomFourthComponent from './PageBottomFourthComponent';
import PageBottomFifthComponent from './PageBottomFifthComponent';

class BottomComponent extends Component {
  constructor(props) {
    super(props);
    this.getDateThird = this.getDateThird.bind(this);
  }    
  getDateThird(objData) {
    this.props.getDateSecond(objData);
  }

  render() {
    if(this.props.numbBottomLi===1) {
      return <PageBottomFirstComponent 
              data={this.props.data} 
              getDateFouth = {this.getDateThird}
            />;
    }
    else if(this.props.numbBottomLi===2) {
      return <PageBottomSecondComponent />;
    }
    else if(this.props.numbBottomLi===3) {
      return <PageBottomThirdComponent />;
    }
    else if(this.props.numbBottomLi===4) {
      return <PageBottomFourthComponent />;
    }
    else if(this.props.numbBottomLi===5) {
      return <PageBottomFifthComponent />;
    }
    else {
      return null;
    }
  }
}
export default BottomComponent ;