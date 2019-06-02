import React, { Component } from 'react';
import '../App.css';
import PageTopFirstComponent from './PageTopFirstComponent';
import PageTopSecondComponent from './PageTopSecondComponent';
import PageTopThirdComponent from './PageTopThirdComponent';
import PageTopFourthComponent from './PageTopFourthComponent';
import PageTopFifthComponent from './PageTopFifthComponent';
import PageTopSixthComponent from './PageTopSixthComponent';

class TopComponent extends Component {
  /*constructor(props) {
    super(props);
  }*/
  render() {
    if(this.props.numbTopLi===1) {
      return <PageTopFirstComponent
                elemSel = {this.props.selectedElem}
             />;
    }
    else if(this.props.numbTopLi===2) {
      return <PageTopSecondComponent />;
    }
    else if(this.props.numbTopLi===3) {
      return <PageTopThirdComponent />;
    }
    else if(this.props.numbTopLi===4) {
      return <PageTopFourthComponent />;
    }
    else if(this.props.numbTopLi===5) {
      return <PageTopFifthComponent />;
    }
    else if(this.props.numbTopLi===6) {
      return <PageTopSixthComponent />;
    }
    else {
      return null;
    }
  }
}
export default TopComponent;