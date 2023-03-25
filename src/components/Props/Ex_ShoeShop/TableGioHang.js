import React, { Component } from "react";
/**
 * id: number;
    name: string;
    alias: string;
    price: number;
    description: string;
    shortDescription: string;
    quantity: number;
    image: string;
 */
export default class TableGioHang extends Component {
  renderContent = () => {
    return this.props.gioHang.map((item) => {
      return (
        <tr key={item.id}>
          <td>{item.id}</td>
          <td>{item.name}</td>
          <td>{item.price}</td>
          <td>
            <button
              onClick={() => {
                this.props.handleChangeQuantity(item.id, -1);
              }}
              className="btn btn-secondary"
            >
              -
            </button>
            <span className="mx-2"> {item.soLuong}</span>
            <button
              onClick={() => {
                this.props.handleChangeQuantity(item.id, 1);
              }}
              className="btn btn-warning"
            >
              +
            </button>
          </td>
          <td>
            <button
              onClick={() => {
                this.props.handleRemoveShoe(item.id);
              }}
              className="btn btn-danger"
            >
              Xoá
            </button>
          </td>
        </tr>
      );
    });
  };
  render() {
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{this.renderContent()}</tbody>
        </table>
      </div>
    );
  }
}
