import React, { Component } from "react";
import { shoeArr } from "./data_shoeShop";
import ItemShoe from "./ItemShoe";
import TableGioHang from "./TableGioHang";
export default class ExShoeShop extends Component {
  state = {
    shoeArr: shoeArr,
    gioHang: [],
  };

  renderShoes = () => {
    return this.state.shoeArr.map((item) => {
      return (
        <ItemShoe
          handleAddToCard={this.handleAddToCard}
          shoeData={item}
          key={item.id}
        />
      );
    });
  };

  handleAddToCard = (sp) => {
    // let cloneGioHang = [...this.state.gioHang, shoe];
    // this.setState({ gioHang: cloneGioHang });
    //
    // th1: sp chưa có trong giỏi hàng => tạo object mới, có thêm key soLuong=1
    // let newSp = { ...sp, soLuong: 1 };
    //
    // th2: sp đã có tron giỏ hàng => dựa vào index, tăng soLuong gioHang[index].soLuong++

    let index = this.state.gioHang.findIndex((item) => {
      return item.id == sp.id;
    });
    let cloneGioHang = [...this.state.gioHang];
    if (index == -1) {
      let newSp = { ...sp, soLuong: 1 };
      cloneGioHang.push(newSp);
      // th1
    } else {
      cloneGioHang[index].soLuong++;
      // th2
    }
    this.setState({
      gioHang: cloneGioHang,
    });
  };

  handleRemoveShoe = (idShoe) => {
    let index = this.state.gioHang.findIndex((item) => {
      return item.id == idShoe;
    });
    if (index !== -1) {
      let cloneGioHang = [...this.state.gioHang];
      cloneGioHang.splice(index, 1);
      this.setState({ gioHang: cloneGioHang });
    }
  };

  handleChangeQuantity = (idShoe, step) => {
    let index = this.state.gioHang.findIndex((item) => {
      return item.id == idShoe;
    });
    let cloneGioiHang = [...this.state.gioHang];
    // 5+1=6
    // 5 + -1=4
    cloneGioiHang[index].soLuong = cloneGioiHang[index].soLuong + step;
    if (cloneGioiHang[index].soLuong == 0) {
      cloneGioiHang.splice(index, 1);
    }

    this.setState({ gioHang: cloneGioiHang }, () => {
      console.log(this.state.gioHang.length);
    });
  };
  render() {
    return (
      <div className="container py-5">
        {this.state.gioHang.length > 0 && (
          <TableGioHang
            handleRemoveShoe={this.handleRemoveShoe}
            gioHang={this.state.gioHang}
            handleChangeQuantity={this.handleChangeQuantity}
          />
        )}

        <div className="row">{this.renderShoes()}</div>
      </div>
    );
  }
}
