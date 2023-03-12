import React, { Component } from 'react'

export default class ProductCard extends Component {
    // this.props
    //this.props là  thuộc tính được kế thừa tù Component, nó là nơi quản lí những dữ liệu component cha(component sử dụng component ProductCard) xử lí và binding ra giao diện
    //this.props là thuộc tính không thể gán lại giá trị
    render() {
        // this.props.name ='sam sung'=> sai
        console.log('props', this.props);
        const {product} = this.props
        return (
            <div className="card">
                <img className="card-img-top" src={product.image} height={200} alt='...' />
                <div className="card-body">
                    <h4 className="card-title">{product.name}</h4>
                    <p className="card-text">{product.price}</p>
                    <button className='btn btn-success'>thêm và giỏ hàng</button>
                </div>
            </div>

        )
    }
}
