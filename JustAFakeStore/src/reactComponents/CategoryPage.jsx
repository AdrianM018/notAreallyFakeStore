import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';

function CategoryPage() {
  let SingleCategory = JSON.parse(sessionStorage.getItem(`PressedOnCategory`));
  const [ProductsfromCategory, setProductsfromCategory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function getData() {
      const url = `https://dummyjson.com/products/category/${SingleCategory}`;
      try {
        setLoading(true);
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }

        const json = await response.json();
        setProductsfromCategory(json.products);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    }

    getData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <>
      <Header />
      <h1 className='mt-5 pt-5'>{SingleCategory} Products</h1>
      <div className='row gap-3 mt-5'>
        {ProductsfromCategory.length > 0 ? (
          ProductsfromCategory.map((product) => (
            <div className='col border-0' key={product.id}>
              <a onClick={() => {
                const Product_String = JSON.stringify(product.id);
                sessionStorage.setItem('PressedOnProduct', Product_String)
                navigate('/SingleProductPage')
              }}>
                <div className='shadow rounded-3 card border-0'>
                  <img src={product.thumbnail} alt="" className='position-relative img-thumbnail border-0' />
                  <p className='position-absolute fs-6 bg-danger text-light rounded-4 p-1 top-0 mt-1 mb-0'>{product.tags[1] ? product.tags[1] : 'Fetching Tags'}</p>
                  <div className='row nowrap py-1'>
                    <p className='col text-start flex-grow-1'>{product.title ? product.title : 'Fetching Name'}</p>
                    <p className='col-auto text-end'>{product.price ? `$${product.price}` : 'Fetching Price'}</p>
                  </div>
                  <p className='col-auto text-center'>{product.shippingInformation ? `${product.shippingInformation}` : 'Fetching Price'}</p>
                  <p className='col-auto text-center'><i className="bi bi-star p-1"></i>{product.rating ? `${product.rating}` : 'Fetching Price'}</p>
                </div>
                <div className='shadow rounded-3 card border-0 mt-4'>
                  <div className='row gap-0 rounded-3'>
                    <p className='col m-0 p-0 align-self-center'>Buy now!</p>
                    <p className='col-auto m-0 py-2 align-self-center bg-danger rounded-3'>{product.discountPercentage ? `${product.discountPercentage}%` : 'Fetching Price'}</p>
                  </div>
                </div>
              </a>
            </div>
          ))
        ) : (
          <p>No products available</p>
        )}
      </div>
    </>
  );
}

export default CategoryPage;
