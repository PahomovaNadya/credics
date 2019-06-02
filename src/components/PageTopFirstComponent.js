import React, { Component } from 'react';
import '../App.css';

class PageTopFirstComponent extends Component {
  render() {
    return (
    <div className="topDiv">
      <table width="45%">
        <tbody>
          <tr><td>מכשיר:</td><td colSpan="2">{this.props.elemSel.id} - {this.props.elemSel.deviceName}</td><td colSpan="2"></td></tr>
          <tr><td>סטטוס:</td><td>{this.props.elemSel.status}</td><td colSpan="3"></td></tr>
          <tr><td nowrap="nowrap">עובד בשבת:</td><td>{this.props.elemSel.worksShabbat}</td><td colSpan="2" nowrap="nowrap">תחילת פעילות:</td><td nowrap="nowrap">{this.props.elemSel.startActivity}</td></tr>
          <tr><td colSpan="2" nowrap="nowrap">עמלות שירות:</td><td>ש"ח</td><td>דולר</td><td></td></tr>
          <tr><td colSpan="2">משיכה:</td><td>{this.props.elemSel.priceSek}</td><td>{this.props.elemSel.priceDoll}</td><td></td></tr>
        </tbody>
      </table>

      <table width="40%">
        <tbody>
          <tr><td nowrap="nowrap">סטטיסטיקת פעולות</td><td>30-:</td><td>{this.props.elemSel.deviceStatistica30}</td><td>60-:</td><td>{this.props.elemSel.deviceStatistica60}</td></tr>
          <tr><td>תנועה אחרונה:</td><td colSpan="4">{this.props.elemSel.lastMovement}</td></tr>
          <tr><td>סכום מסוף יום:</td><td>ש"ח:</td><td colSpan="3">{this.props.elemSel.summDayEnd}</td></tr>
        </tbody>
      </table>
    </div>
    );
  }
}
export default PageTopFirstComponent;