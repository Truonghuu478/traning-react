import React, { Component } from "react";
import { phoneArr } from "./data_phone";
import PhoneDetail from "./PhoneDetail";
import PhoneList from "./PhoneList";

export default class Ex_Phones extends Component {
  state = {
    phoneArr: phoneArr,
    phoneDetail: phoneArr[0],
  };

  handleShowDetail = (sp) => {
    this.setState({ phoneDetail: sp });
  };
  render() {
    return (
      <div className="container py-5">
        <PhoneList
          handleShow={this.handleShowDetail}
          data={this.state.phoneArr}
        />
        <PhoneDetail phoneDetail={this.state.phoneDetail} />
      </div>
    );
  }
}
