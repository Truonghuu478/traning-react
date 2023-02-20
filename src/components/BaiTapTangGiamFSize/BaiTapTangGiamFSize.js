import React, { Component } from 'react'

export default class BaiTapTangGiamFSize extends Component {
    /**
     * b1: Xây dựn giao diện(UI)
     * b2: xác định dữ liệu cần thay đổi (state)
     * b3: binding dữ liệu
     * b4: xử lí logic =>(setState)
     */
    state={
        fSize:13
    }

    tangGiamFSize=(value)=>{
        // b1 :  tạo state mới 
        // const newState ={
        //     fSize:this.state.fSize  + value
        // }
        // b2 : setState
        this.setState({
            fSize: this.state.fSize + value
        },()=>{
            console.log('new State',this.state.fSize);
        })
    }

    render() {
        return (
            <div className='text-center'>
                <h3>Bài tập tăng giảm font chữ</h3>
                <p style={{
                    fontSize: this.state.fSize
                }}>Cybersoft Academy</p>

                <button onClick={()=>{
                    this.tangGiamFSize(-5)
                }} className='btn btn-primary mr-2'>-</button>
                <button onClick={() => {
                    this.tangGiamFSize(5)
                }} className='btn btn-primary'>+</button>

            </div>
        )
    }
}
