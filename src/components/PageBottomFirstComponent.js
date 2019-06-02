import React, { Component } from 'react';
import '../App.css';

let deviceArr: Array = [];

class PageBottomFirstComponent extends Component {
  constructor(props) {
    super(props);
    this.sendData = this.sendData.bind(this);
    this.startFunc = this.startFunc.bind(this);
  }

  startFunc(){  
    let strClass = "";
    deviceArr = [];
    this.props.data.map((device, index) => {
      let objNew = {
        "id": "",
        "deviceName": "",
        "deviceDate": "",
        "deviceDescription": "",
        "status": "",
        "statusClass": "",
        "worksShabbat": "",
        "startActivity": "",
        "deviceStatistica30": "",
        "deviceStatistica60": "",
        "lastMovement": "",
        "priceSek": "",
			  "priceDoll": "",
        "summDayEnd": ""
      }
      if(device.status==="active") { strClass = "trafficGreen"; }
      else if(device.status==="requires tracking") { strClass = "trafficYellow"; }
      else if(device.status==="disabled") { strClass = "trafficRed"; }

      objNew.id = device.id;
      objNew.deviceName = device.deviceName;
      objNew.deviceDate = device.deviceDate;
      objNew.deviceDescription = device.deviceDescription;
      objNew.status = device.status;
      objNew.statusClass = strClass;
      objNew.worksShabbat = device.worksShabbat;
      objNew.startActivity = device.startActivity;
      objNew.deviceStatistica30 = device.deviceStatistica30;
      objNew.deviceStatistica60 = device.deviceStatistica60;
      objNew.lastMovement = device.lastMovement;
      objNew.priceSek = device.priceSek;
			objNew.priceDoll = device.priceDoll;
      objNew.summDayEnd = device.summDayEnd;
      deviceArr.push(objNew);
    });
  }
  sendData = (event) => {
    let elem = this.props.data.filter(function(device, index) {
      return (device.id===event.target.innerText);
    }); 
    this.props.getDateFouth(elem);
  };
  render() {
    this.startFunc();
    return (
    <div className="bottomDiv">
      <table><thead><tr><th nowrap="nowrap">רמזור</th><th nowrap="nowrap">מספר מכשיר</th></tr></thead><tbody>
      { deviceArr.map((device, index) => 
          <tr key={index}><td><div className={device.statusClass}></div></td><td onClick={this.sendData}>{device.id}</td></tr>
      )}
      </tbody></table>
    </div>
    );
  }
}
export default PageBottomFirstComponent;