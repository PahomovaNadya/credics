import React, { Component } from 'react';
import './App.css';

import data from './json/devices.json'

import TopComponent from './components/TopComponent';
import BottomComponent from './components/BottomComponent';
import MenuTopComponent from './components/MenuTopComponent';
import MenuBottomComponent from './components/MenuBottomComponent';
import HeaderComponent from './components/HeaderComponent';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: (new Date()).getDate()+"/"+((new Date()).getMonth()+1) +"/"+(new Date()).getFullYear(),
      dataAll: data.devices,
      firstName: "FIRSTNANE",
      lastName: "LASTNAME",
      numbTopLi: 1,
      numbBottomLi: 1,
      elemObj: data.devices[0]
    }
    this.changeMenuTopNumBlockFunc = this.changeMenuTopNumBlockFunc.bind(this);
    this.changeMenuBottomNumBlockFunc = this.changeMenuBottomNumBlockFunc.bind(this);
    this.getDateFirst = this.getDateFirst.bind(this);
    this.searchFunc = this.searchFunc.bind(this);
  }
  changeMenuTopNumBlockFunc = (num) => {
    this.setState({ numbTopLi: num });
  };
  changeMenuBottomNumBlockFunc = (num) => {
    this.setState({ numbBottomLi: num });
  };
  getDateFirst(objData) {
    this.setState({ elemObj: objData[0] });
  }
  searchFunc(txtSearch) {
    let dataSearch = {};
    if(txtSearch===""){
      dataSearch = data.devices;
    } else {
        dataSearch = this.state.dataAll.filter(function(device: object, index: number) {
        return (device.id.includes(txtSearch) || device.deviceName.includes(txtSearch));
      }); 
    }
    this.setState({ dataAll: dataSearch });
  }
  render() {
    return (
      <div className="App">
        <HeaderComponent 
          projDate={this.state.date}
          userName={this.state.firstName+" "+this.state.lastName}
        />
        <MenuTopComponent 
          numbTopLi={this.state.numbTopLi}
          changeMenuTopNumBlock={this.changeMenuTopNumBlockFunc}
          searchTopFunc={this.searchFunc}
        /> 
        <div className="topDiv">
          <TopComponent
            numbTopLi={this.state.numbTopLi}
            selectedElem={this.state.elemObj}
          />
        </div>
        <MenuBottomComponent 
          numbBottomLi={this.state.numbBottomLi}
          changeMenuBottomNumBlock={this.changeMenuBottomNumBlockFunc}
          searchBottomFunc={this.searchFunc}
        />
        <div className="bottomDiv">
          <BottomComponent 
            numbBottomLi={this.state.numbBottomLi}
            data={this.state.dataAll}
            getDateSecond = {this.getDateFirst}
          />
        </div>

      </div>
    );
  }
}
export default App;
/*
function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <MenuComponent /> 
      <TopComponent />
      <BottomComponent />

    </div>
  );
}

export default App;

*/