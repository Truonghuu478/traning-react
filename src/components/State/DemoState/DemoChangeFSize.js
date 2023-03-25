import React, { Component } from 'react'

export default class DemoChangeFSize extends Component {
    /**
     * b1 : xây dựng giao diện
     * b2 : xác định dữ liệu cần thay đổi (state)
     * b3 : binding dữ liệu ra giao diện
     * b4 : xử lí logic và setState
     */
    state = {
        fSize: 13
    }
    changeFontSize = (value)=>{
        this.setState({
            fSize: this.state.fSize + value
        })
    }

    render() {
        return (
            <div className='text-center'>
                <h3> Thay đổi font chữ</h3>
                <p style={{
                    fontSize: this.state.fSize
                }}>Cybersoft Academy</p>
                <button onClick={() => {
                   this.changeFontSize(-5)
                }} className='btn btn-primary mr-2'>-</button>
                <button
                    onClick={() => {
                        this.changeFontSize(5)

                    }}
                    className='btn btn-primary'>+</button>

            </div>
        )
    }
}
