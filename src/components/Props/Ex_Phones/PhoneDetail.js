import React, { Component } from "react";

export default class PhoneDetail extends Component {
  render() {
    let {
      maSP,
      tenSP,
      manHinh,
      heDieuHanh,
      cameraTruoc,
      cameraSau,
      ram,
      rom,
      giaBan,
      hinhAnh,
    } = this.props.phoneDetail;
    return (
      <div className="row mt-5">
        <div className="col-4">
          <img src={hinhAnh} className="w-100" alt="" />
        </div>
        <div className="col-8 display-4 text-left ">
          <p> Tên sp: {tenSP} </p>
          <p> Màn hình: {manHinh} </p>
          <p> Hệ điều hành: {heDieuHanh} </p>
        </div>
      </div>
    );
  }
}
