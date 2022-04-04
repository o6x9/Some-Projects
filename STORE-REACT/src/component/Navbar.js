import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function Navbar() {
    const state = useSelector((state) => state.handleCart)
    console.log(state)
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
                <div class="container">
                    <div id='jpijdsp'>
                        <a class="navbar-brand fw-bold fs-4" href="/">Shopping Cart</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                    </div>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <div id='knsdofsdjfodsij234'>
                            <ul class="navbar-nav mx-auto mb-2 mb-lg-0 fs-5">
                                <li class="nav-item">
                                    <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                                </li>
                                <li class="nav-item">
                                    <NavLink className="nav-link" to="/products">Products</NavLink>
                                </li>
                            </ul>
                        </div>
                        <div className='buttons'>
                            <button id='oiesjr8w4uoi' className='btn' >
                                <NavLink id='ljkfdjlksd' to="/cart" className='btn btn-outline-dark'>
                                    <i className='fa fa-shopping-cart me-1'></i> Cart {state.length}</NavLink>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
