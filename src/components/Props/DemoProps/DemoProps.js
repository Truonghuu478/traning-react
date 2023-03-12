import React, { Component } from 'react'
import ProductCard from './ProductCard'

export default class DemoProps extends Component {
    render() {
        let product1={
            name:'sam sung',
            image:'https://picsum.photos/200/300',
            price:1000
        }
        let product2 = {
            name: 'iphone',
            image: 'https://picsum.photos/seed/picsum/200/300',
            price: 2000
        }
        return (
            <div>
                <h2 className='text-center text-success'>Bài tập demo props</h2>
                <div className='row'>
                    <div className='col-3'>
                        <ProductCard product={product1} />
                    </div>
                    <div className='col-3'>
                        <ProductCard product={product2} />
                    </div>
                </div>
            </div>
        )
    }
}
