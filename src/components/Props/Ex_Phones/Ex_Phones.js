import React, { Component } from "react";
import { phoneArr } from "./data_phone";
import PhoneDetail from "./PhoneDetail";
import PhoneList from "./PhoneList";

export default class ExPhone extends Component {
  state = {
    phoneArr,// phoneArr: phoneArr
    phoneDetail: phoneArr[0],
  };

  handleShowDetail = (sp) => {
    this.setState({ phoneDetail: sp });
  };
  handleAddToCart =()=>{
    //
  }
  handleRemoveCart = () => {
    //
  }

  render() {
    return (
      <div className="container py-5">
        <h1 className='text-success text-center'>Bài tập EX Phone</h1>
        <PhoneList
          handleShow={(sp) => this.handleShowDetail(sp)}
          data={this.state.phoneArr}
        />
        <PhoneDetail
          phoneDetail={this.state.phoneDetail} />

      </div>
    );
  }
}
