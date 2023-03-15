import React, { Component } from "react";

export default class PhoneItem extends Component {
  render() {
    let { tenSP, hinhAnh } = this.props.data;
    return (
      <div className="col-4">
        <div className="card" style={{ width: "18rem" }}>
          <img src={hinhAnh} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{tenSP}</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            {/* <a href="#" className="btn btn-primary">
              Go somewhere
            </a> */}

            <button
              onClick={() => {
                this.props.handleOnClick(this.props.data);
              }}
              type="button"
              class="btn btn-primary"
            >
              Xem chi tiết
            </button>
          </div>
        </div>
      </div>
    );
  }
}
