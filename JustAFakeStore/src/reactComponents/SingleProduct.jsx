import React, { useState, useEffect } from 'react';
import Header from './Header';

function SingleProduct() {
    let SingleProduct = JSON.parse(sessionStorage.getItem(`PressedOnProduct`));

    const [singularProduct, setSingularProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function getData() {
            const url = `https://dummyjson.com/products/${SingleProduct}`;
            try {
                setLoading(true);
                const response = await fetch(url);

                if (!response.ok) {
                    throw new Error(`Response status: ${response.status}`);
                }

                const json = await response.json();
                setSingularProduct(json);
                setLoading(false);
                console.log(json);
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        }

        getData();
    }, [SingleProduct]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    if (!singularProduct) {
        return <p>The product is unavailable</p>;
    }

    return (
        <>
            <Header />
            <div className='row mt-5'>
                <div className='col-lg-6 mt-5'>
                    <img src={singularProduct.images[0]} alt="" className='img-thumbnail shadow' />
                </div>
                <div className='col-lg-6 text-start'>
                    <div>
                        <h1 className='mt-5 pt-5'>{singularProduct.title}</h1>
                        <p><strong>Brand: </strong>{singularProduct.brand ? `${singularProduct.brand}` : `Not branded`} | Category: {singularProduct.category}</p>
                    </div>
                    <hr />
                    <p>{singularProduct.description}</p>
                    <div>
                        <h2 className='text-center'>{singularProduct.price}$ ({singularProduct.discountPercentage}%)</h2>
                        <h4 className='text-center'><i className="bi bi-star-fill"></i>{singularProduct.rating}</h4>
                    </div>
                    <div className='text-center my-5'>
                        <button className='btn shadow w-50 bg-color-main text-light' onClick={() => {
                            const tobestoredProduct = {
                                name: singularProduct.title,
                                img: singularProduct.images[0],
                                price: singularProduct.price,
                                qty: 1,
                            }
                            const storingArray = [];
                            if (localStorage.getItem('ProductsAddedToCart') === null) {
                                storingArray.push(tobestoredProduct)
                                const Product_String = JSON.stringify(storingArray);
                                localStorage.setItem('ProductsAddedToCart', Product_String)
                            } else if(localStorage.getItem('ProductsAddedToCart').includes(singularProduct.title)){
                                const accesproductsstored = JSON.parse(localStorage.getItem('ProductsAddedToCart'))
                                const updatestockincart = accesproductsstored.find((Element) => Element.name === singularProduct.title)
                                updatestockincart.qty = updatestockincart.qty + 1
                                const ProductList_String = JSON.stringify(accesproductsstored);
                                localStorage.setItem('ProductsAddedToCart', ProductList_String)
                            }else {
                                const accesproductsstored = JSON.parse(localStorage.getItem('ProductsAddedToCart'))
                                accesproductsstored.push(tobestoredProduct)
                                const ProductList_String = JSON.stringify(accesproductsstored);
                                localStorage.setItem('ProductsAddedToCart', ProductList_String)
                            }

                            const buybtn = document.getElementById('buybtn').innerHTML = 'Added to cart'

                        }} id='buybtn'>Buy now!</button>
                    </div>
                    <div className='row text-center'>
                            <p className='col'>{singularProduct.availabilityStatus}</p>
                            <p className='col'>Product ID: {singularProduct.id}</p>
                            <p className='col'>Minimum order QTY: {singularProduct.minimumOrderQuantity}</p>
                        </div>
                    <hr />
                    <h3>Other details</h3>
                    <p>This product has {singularProduct.warrantyInformation}, weights {singularProduct.weight} KG and has a {singularProduct.returnPolicy} </p>
                </div>
                <h3 className='mt-3'>Reviews</h3>
                <div>
                    {singularProduct.reviews && singularProduct.reviews !=0 ? (
                        singularProduct.reviews.map((review, index) => (
                            <div key={index} className="text-start mt-3">
                                <h5>Review by {review.reviewerName}</h5>
                                <p><i className="bi bi-star-fill mx-2"></i>Rating: {review.rating}</p>
                                <p>{review.comment}</p>
                                <hr />
                            </div>
                        ))
                    ) : (
                        <p>No reviews for this product</p>
                    )}
                </div>

            </div>
        </>
    );
}

export default SingleProduct;