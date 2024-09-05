import React, { useEffect, useState } from 'react'

function Hero() {
  
const [randomproduct, setRandomProduct] = useState(null);
const [loading, setLoading] = useState(true); 
const [error, setError] = useState(null); 

useEffect(() => {

  async function getData() {
    const productID = Math.floor(Math.random() * (30 - 1) + 1  );
      const url = `https://dummyjson.com/products/${productID}`;
      try {
          setLoading(true);
          const response = await fetch(url);

          if (!response.ok) {
              throw new Error('Response status: ${response.status}');
          }

          const json = await response.json();
          setRandomProduct(json);
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
    <div className="my-5 pt-5">
    <div className="row pb-0 pe-lg-0 align-items-center rounded-3 border shadow-lg">
      <div className="col-lg-6 p-3 p-lg-5 pt-lg-3">
        <h1 className="display-6 fw-bold lh-1 text-body-emphasis">{randomproduct.title}</h1>
        <p className="lead fs-6">{randomproduct.description}</p>
        <div className="d-grid gap-2 d-md-flex justify-content-center mb-4 mb-lg-3">
          <button type="button" className="btn btn-primary btn-lg px-4 me-md-2 fw-bold">Buy now</button>
        </div>
      </div>
      <div className="col-lg-6 py-2 px-2 overflow-hidden">
          <img className="rounded-3 img-thumbnail  shadow-lg" src={randomproduct.thumbnail} alt=""/>
      </div>
    </div>
  </div>
  )
}

export default Hero