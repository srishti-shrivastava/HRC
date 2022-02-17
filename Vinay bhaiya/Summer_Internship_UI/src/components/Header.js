import React, { Component } from 'react'
import './header.css'
import img1 from './images/Group 20399.png'
import img2 from './images/logo.png'

export class Header extends Component {
    render() {
        return (
            <div className="property" >
            <div className="imgage">
                <img src={img1}/>
                <p className="invoice">Invoice List</p>
                </div>
            <div className="logo">
            <img src={img2}/>
            </div>
           
            </div>
        )
    }
}

export default Header
