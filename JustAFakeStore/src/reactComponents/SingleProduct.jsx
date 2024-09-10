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
                    <img src={singularProduct.images[1]} alt="" className='img-thumbnail shadow' />
                </div>
                <div className='col-lg-6 text-start'>
                    <div>
                        <h1 className='mt-5 pt-5'>{singularProduct.title}</h1>
                        <p><strong>Brand: </strong>{singularProduct.brand} | Category: {singularProduct.category}</p>
                    </div>
                    <hr />
                    <p>{singularProduct.description}</p>
                    <div>
                        <h2 className='text-center'>{singularProduct.price}$ ({singularProduct.discountPercentage}%)</h2>
                        <h4 className='text-center'><i class="bi bi-star-fill"></i>{singularProduct.rating}</h4>
                        <div className='row text-center'>
                            <p className='col'>{singularProduct.availabilityStatus}</p>
                            <p className='col'>Product id:{singularProduct.id}</p>
                            <p className='col'>Minimum order qty:{singularProduct.minimumOrderQuantity}</p>
                        </div>
                    </div>
                    <div className='text-center my-5'>
                        <button className='btn shadow w-50'onClick={() =>{
                            const storingArray = [];
                            if (localStorage.getItem('ProductsAddedToCart') === null){
                                storingArray.push(singularProduct.id)
                                const Product_String = JSON.stringify(storingArray);
                                localStorage.setItem('ProductsAddedToCart', Product_String)
                            }else{
                                const accesproductsstored = localStorage.getItem('ProductsAddedToCart')
                                const transformproductsstored = JSON.parse(accesproductsstored)
                                const tobestoredProduct = singularProduct.id
                                transformproductsstored.push(tobestoredProduct)
                                const ProductList_String = JSON.stringify(transformproductsstored);
                                localStorage.setItem('ProductsAddedToCart', ProductList_String)
                            }
                        }}>Buy now!</button>
                    </div>
                    <hr />
                    <h3>Other details</h3>
                    <p>This product has {singularProduct.warrantyInformation}, weights {singularProduct.weight} KG and has a {singularProduct.returnPolicy} </p>
                </div>
                <div>
                    {singularProduct.reviews != 0 ? (
                        singularProduct.reviews.map((element) => {
                            element.rating;
                        })
                    ) : ' No reviews for this product'
                    }
                </div>
            </div>
        </>
    );
}

export default SingleProduct;