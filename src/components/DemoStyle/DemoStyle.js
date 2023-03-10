import React, { Component } from 'react'
// Cach 1 : import file css vào component : có thể sử dụng chung được
import './Style.css'
//Cach 2 : import file css module vào component : mã hoá css và đóng gói vào trong component.
import styles from "./Style.module.css"

export default class DemoStyle extends Component {
    render() {
        return (
            <div>
                <div className='text-red'>css with style sheet </div>
                <div className={styles['text-blue']}>css with module </div>
                <div style={{
                    backgroundColor: 'black',
                    color: 'white'
                }}>css with inline style </div>
            </div>
        )
    }
}
