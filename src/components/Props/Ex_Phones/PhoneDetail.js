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
      <div className={`mt-2 p-4`}>
        <h3 className=" mb-2">Phone Detail </h3>
        <div className={`row`}>
          <div className="col-4">
            <img src={hinhAnh} className="w-100" alt="" />
          </div>
          <div className="col-8 display-4 text-left ">
            <p> Tên sp: <b>{tenSP} </b></p>
            <p> Màn hình: <b> {manHinh}</b> </p>
            <p> Hệ điều hành: <b>{heDieuHanh} </b></p>
          </div>
        </div>
      </div>
    );
  }
}
