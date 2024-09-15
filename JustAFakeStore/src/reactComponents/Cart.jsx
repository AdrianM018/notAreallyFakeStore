import React, { useState, useEffect } from 'react';
import Header from './Header';

function Cart() {
  const [total, setTotal] = useState(0);
  const ProductList = JSON.parse(localStorage.getItem('ProductsAddedToCart')) || []

  useEffect(() => {
    const newTotal = ProductList.reduce((accumulator, product) => {
      return accumulator + parseFloat(product.price);
    }, 0);
    setTotal(newTotal.toFixed(2));
  }, [ProductList]);

  return (
    <>
      <Header />
      <div className="mt-5 pt-5">
        <div className="row nowrap">
          <h3 className="col text-start">Products</h3>
          <h3 className="col text-end">Prices</h3>
        </div>
        {ProductList.map((product, index) => (
          <div className="row nowrap my-2" key={index}>
            <img
              src={product.img}
              alt="thumbnail"
              className="col-lg-1 col-sm-2 col-4 object-fit-contain border-0"
            />
            <p className="col text-start align-self-center">{product.name}</p>
            <p className="col align-self-center text-end">{product.price}$</p>
            <hr />
          </div>
        ))}
      </div>
      <h3 className="col text-end">Total: {total}$</h3> 
    </>
  );
}

export default Cart;
