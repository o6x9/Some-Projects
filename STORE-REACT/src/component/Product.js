import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { addCart } from '../redux/action';
import { NavLink, useParams } from "react-router-dom"

export default function Product() {

    const { id } = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);

    const dispatch = useDispatch();

    const addProduct = (product) => {
        dispatch(addCart(product));
        console.log(product, "product")
    }

    useEffect(() => {

        const getProduct = async () => {
            setLoading(true)
            const responce = await fetch(`https://fakestoreapi.com/products/${id}`);
            setProduct(await responce.json());
            setLoading(false);

        }
        getProduct();
    }, [])


    const Loading = () => {
        return (
            <>
                Loading ...
            </>
        )
    }
    const ShowProduct = () => {
        return (
            <>
                <div className='col-md-6'>
                    <img id='photosssss' src={product.image} alt={product.title} height={"400px"} width={"400px"} />
                </div>
                <div className='col-md-6'>
                    <h4 className='text-uppercase text-black-50'>
                        {product.category}
                    </h4>
                    <h1 className='display-5'>
                        {product.title}
                    </h1>
                    <p className='lead fw-bolder'>
                        Rating {product.rating && product.rating.rate}
                        <i className='fa fa-star'> </i>
                    </p>
                    <h3 className='display-6 fw-bold my-4'>
                        $ {product.price}
                    </h3>
                    <p className='lead'>
                        {product.description}
                    </p>
                    <button id='gocart11' className='btn btn-outline-dark px-4 py-2' onClick={() => addProduct(product)}>
                        Add to Cart
                    </button>
                    <NavLink id='gocart12' className='btn btn-outline-dark ms-2 px-3 py-2' to="/cart">
                        Go to Cart
                    </NavLink>

                </div>

            </>
        )
    }



    return (
        <div className='container py-5'>
            <div className='row py-5'>
                {loading ? <Loading /> : <ShowProduct />}

            </div>

        </div>
    )
}
