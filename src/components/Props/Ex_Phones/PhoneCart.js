import React, { Component } from 'react'

export default class PhoneCart extends Component {
    renderCart = ()=>{
        // trả về các tr sản phẩm điện thoại được thêm vào giỏ hàng
        return this.props.cart.map(sp=>{
            return (
                <tr key={sp.maSP}>
                    <td> <img width={100} src={sp.hinhAnh} alt='..' /></td>
                    <td>{sp.tenSP}</td>
                    <td>{sp.giaBan.toLocaleString()}đ</td>
                    <td>
                        <button className='btn btn-primary'>-</button>
                        <span className='px-2'>1</span>
                        <button className='btn btn-primary'>+</button>

                    </td>
                    <td>{Number(sp.soLuong * sp.giaBan).toLocaleString()}đ</td>  {/** (giá bán * số lượng) */}
                    <td>
                        <button className='btn btn-danger'>Xoá</button>
                    </td>

                </tr>
            )
        })
    }
    render() {
        // console.log(this.props.cart);
        return (
            <div className='border p-4'>
                <div className='d-flex justify-content-between'>
                    <h3>Giỏ  hàng</h3>
                    <span style={{ fontSize: 25 }}>
                        <i className="fa fa-shopping-cart pr-2"></i>(0)
                    </span>
                </div>
                {/* table  */}
                <table className='table'>
                    <thead>
                        <td className='font-weight-bold'>Hình ảnh</td>
                        <td className='font-weight-bold'>Tên sản phẩm</td>
                        <td className='font-weight-bold'>Đơn giá</td>
                        <td className='font-weight-bold'>Số lượng</td>
                        <td className='font-weight-bold'>Số tiền</td>
                        <td className='font-weight-bold'>Thao Tác</td>

                    </thead>
                    <tbody>
                        {/* <tr>
                            <td> <img width={100} src="./img/phone/vsphone.jpg" alt='..' /></td>
                            <td>VinSmart Live</td>
                            <td>5700000</td>
                            <td>1</td>
                            <td>5700000</td>
                            <td>
                                <button className='btn btn-danger'>Xoá</button>
                            </td>

                            </tr> */}
                        {this.renderCart()}

                    </tbody>
                </table>
            </div>
        )
    }
}
