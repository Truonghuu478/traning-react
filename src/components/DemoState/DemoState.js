import React, { Component } from 'react'

export default class DemoState extends Component {
    // state là thuộc tính có sẵn trong class component, nó là nơi quản lí những thuộc tính mà mình muốn thay đổi giao diện 
    state = {
        isLogin: false, // kiểm tra xem đã đăng nhập hay chưa ?,
    }
    userName ='truong'

    login = () => {
        //set isLogin = true
        const newState = {
            isLogin: true,
        }
        //cập nhật state mới, nó bị bất đồng bộ 
        this.setState(newState, () => {
            console.log(this.state.isLogin);
        })


    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-md navbar-light bg-light">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="collapsibleNavId">
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Link</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                                <div className="dropdown-menu" aria-labelledby="dropdownId">
                                    <a className="dropdown-item" href="#">Action 1</a>
                                    <a className="dropdown-item" href="#">Action 2</a>
                                </div>
                            </li>
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            {this.state.isLogin ? <div>
                                Hello <span className='text-success font-bold'>{this.userName}</span>
                            </div> : <button type='button' onClick={() => {
                                this.login()
                            }} className='btn btn-success'>ĐĂng nhập</button>}
                        </form>
                    </div>
                </nav>

            </div>
        )
    }
}
