import React, { Component } from "react";

export default class PhoneItem extends Component {
  render() {
    let { tenSP, hinhAnh, giaBan } = this.props.data;
    return (
      <div className="col-4">
        <div className="card" style={{ width: "18rem" }}>
          <img src={hinhAnh} height={275} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{tenSP}</h5>
            <p className="card-text">
              <b>{giaBan.toLocaleString()} </b>đ
            </p>

            <button
              onClick={() => {
                this.props.handleOnClick(this.props.data);
              }}
              type="button"
              className="btn btn-primary"
            >
              Xem chi tiết
            </button>
          </div>
        </div>
      </div>
    );
  }
}
