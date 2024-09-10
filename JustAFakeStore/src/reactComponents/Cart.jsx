import React, { useState, useEffect } from 'react';
import Header from './Header';

function Cart() {

  let ProductList = JSON.parse(localStorage.getItem(`ProductsAddedToCart`));

  return (
    <>
    <Header></Header>
    <button onClick={()=>{console.log(ProductList)}} className='mt-5 pt-5'>Print</button>
    </>
  )
}

export default Cart