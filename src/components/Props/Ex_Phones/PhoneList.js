import React, { Component } from "react";
import shortid from "shortid";
import PhoneItem from "./PhoneItem";

export default class PhoneList extends Component {
  renderPhoneList = () => {
    return this.props.data.map((item, index) => {
      let randomNum = shortid.generate();
      // console.log("randomNum: ", randomNum);
      return (
        <PhoneItem
          handleOnClick={this.props.handleShow}
          data={item}
          key={randomNum}
        />
      );
    });
  };

  render() {
    // console.log(this.props.data);
    return <div className={` p-4`}>
      <h3 className=" mb-2">Phone List</h3>
      <div className="row">{this.renderPhoneList()}</div>
    </div>
  }
}
