import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import Header from './Header'

function SearchPage() {
    let SearchedForProducts = JSON.parse(sessionStorage.getItem(`SearchforProducts`));
    const [ProductsFromSearch, setProductsFromSearch] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
  
    useEffect(() => {
      async function getData() {
        const url = `https://dummyjson.com/products/search?q=${SearchedForProducts}`;
        try {
          setLoading(true);
          const response = await fetch(url);
  
          if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
          }
  
          const json = await response.json();
          setProductsFromSearch(json.products);
          console.log(json)
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
        <Header></Header>
        <h2 className='mt-5 pt-5 text-start'>Your searched for <i>`{SearchedForProducts}`</i></h2>
        <div className='row mt-5 justify-content-start'>
        {ProductsFromSearch.length > 0 ? (
          ProductsFromSearch.map((product) => (
            <div className='col-lg-3 col-sm-4 col-md-4 border-0 mb-5' key={product.id}>
              <a onClick={() => {
                const Product_String = JSON.stringify(product.id);
                sessionStorage.setItem('PressedOnProduct', Product_String)
                navigate('/SingleProductPage')
              }}>
                <div className='shadow rounded-3 card border-0 h-100 text-start justify-content-between rounded-4'>
                  <img src={product.thumbnail} alt="product thumbnail" className='position-relative img-thumbnail border-0' />
                  <p className='position-absolute fs-6 bg-secondery-color text-light rounded-2 p-1 top-0 m-1'>{product.tags[1] ? product.tags[1] : 'On sale!'}</p>
                  <div className='px-1'>
                  <h4>{product.title ? product.title : 'Unamed Product'}</h4>
                  <p><i className="bi bi-star p-1"></i>{product.rating ? `${product.rating}` : 'No Ratings'}</p>
                  <p>Brand: <strong>{product.brand ? `${product.brand}` : ''}</strong></p>
                  <p><i>{product.availabilityStatus ? `${product.availabilityStatus}` : ''}</i></p>
                  <div className='row text-center justify-content-center'>
                    <p className='col-auto p-1 fs-3'>{product.price ? `$${product.price}` : 'No current price'}</p>
                    <sub className='col-auto p-1 fs-6'> <del>{product.discountPercentage ? `${product.discountPercentage}%` : 'No current price'}</del></sub>
                  </div>
                  <p className=' text-center'><i>{product.shippingInformation ? `${product.shippingInformation}` : 'No current price'}!</i></p>
                  </div>
                  <button className='w-100 border-0 py-3 b-color-main rounded-bottom-4 text-light'>Buy now!</button>
                </div>
              </a>
            </div>
          ))
        ) : (
          <p>No products available</p>
        )}
      </div>
        </>
    )
}

export default SearchPage