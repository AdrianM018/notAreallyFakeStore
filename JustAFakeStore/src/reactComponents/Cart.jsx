import React, { useState, useEffect } from 'react';
import Header from './Header';

function Cart() {

  let ProductList = JSON.parse(localStorage.getItem(`ProductsAddedToCart`));
  let Total = 0;

  function addtoTotal(){
    const allPrices = [];
    const sum = ProductList.forEach(element => {
      allPrices.push(element.price)
    });
    Total = allPrices.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
    console.log(allPrices)
    console.log(Total)
  }

  addtoTotal()

  return (
    <>
    <Header></Header>
    <div className='mt-5 pt-5'>
      <div className='row nowrap'>
        <h3 className='col text-start'>Products</h3>
        <h3 className='col text-end'>Total</h3>
      </div>
      {ProductList.map((product) =>(
        <div className='row nowrap my-2'>
          <img src={product.img} alt="thumbnail" className='col-lg-1 col-sm-2 col-4 object-fit-contain border-0'/>
          <p className='col text-start align-self-center'>{product.name}</p>
          <p className='col align-self-center text-end'>{product.price}$</p>
          <hr />
        </div>
      ))}
    </div>
    </>
  )
}

export default Cart