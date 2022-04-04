import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom';

export default function Products() {

    const [data, setData] = useState([])
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);

    let componentMounted = true;



    useEffect(() => {
        const getProducts = async () => {
            setLoading(true)
            const responce = await fetch("https://fakestoreapi.com/products")
            if (componentMounted) {
                setData(await responce.clone().json());
                setFilter(await responce.json());
                setLoading(false);
                console.log(filter)
            }
            return () => {
                componentMounted = false
            }

        }

        getProducts();
    }, [])

    const Loading = () => {
        return (
            <>
                Loading ...
            </>
        )
    }
    const FilterProducts = (cat) => {
        const updatedList = data.filter((x) => x.category === cat);
        setFilter(updatedList);
    }

    console.log(data, "<---------")
    const ShowProducts = () => {
        return (
            <>
                <div className='buttons d-flex justify-content-center mb-5 pb-5'>

                    <button id='A12a' className='btn btn-outline-dark me-2' onClick={() => setFilter(data)}>All</button>
                    <button id='M12m' className='btn btn-outline-dark me-2' onClick={() => FilterProducts("men's clothing")}>Men's Clothing</button>
                    <button id='W12w' className='btn btn-outline-dark me-2' onClick={() => FilterProducts("women's clothing")}>Women's Clothing</button>
                    <button id='J12j' className='btn btn-outline-dark me-2' onClick={() => FilterProducts("jewelery")}>Jewelery</button>
                    <button id='E12e' className='btn btn-outline-dark me-2' onClick={() => FilterProducts("electronics")}>Electronic</button>

                </div>
                {filter.map((product) => {
                    return (
                        <>
                            <div id='afeaf' className='col-md-3 mb-4'>

                                <div id='abdullah2' class="card h-100 text-center p-4" key={product.id} >

                                    <img src={product.image} class="card-img-top" alt={product.title} height="200px" />
                                    <div id='BUYNOW12' class="card-body">
                                        <h5 class="card-title mb-0">{product.title.substring(0, 12)}</h5>
                                        <p class="card-text lead fw-bold">${product.price}</p>

                                        <div id='abdullah'>
                                            <NavLink to={`/products/${product.id}`} className="btn btn-outline-dark" id='poaskdokasdpok23'><h5>Buy Now</h5> </NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })}
            </>
        );
    };



    return (
        <div>
            <div className='container my-5 py-5'>
                <div className='row'>
                    <div className='col-12 mb-5'>
                        <h1 className='display-6 fw-bolder text-center'>Latest Products</h1>
                        <hr />
                    </div>
                </div>
                <div className='row justify-content-center'>
                    {loading ? <Loading /> : <ShowProducts />}
                </div>
            </div>
        </div>
    )
}