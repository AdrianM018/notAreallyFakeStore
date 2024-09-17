import React, { useState, useEffect } from 'react';
import Header from './Header';

function Cart() {
  const [total, setTotal] = useState(0);
  const ProductList = JSON.parse(localStorage.getItem('ProductsAddedToCart')) || []

  useEffect(() => {
    const newTotal = ProductList.reduce((accumulator, product) => {
      return accumulator + parseFloat(product.price * product.qty);
    }, 0);
    setTotal(newTotal.toFixed(2));
  }, [ProductList]);

  return (
    <>
      <Header />
      <div className='row g-5 mt-5 pt-5'>
        <div className="col-md-5 col-lg-4 order-md-last">
          <h4 className="d-flex justify-content-between align-items-center mb-3">
            <span className="text-primary">Cart de cumparaturi</span>
          </h4>
          <ul className="list-group mb-3">
            {ProductList.map((product, index) => (
              <li className="list-group-item d-flex lh-sm" key={index}>
                <button onClick={()=>{
                  if(product.qty > 1){
                    const accesproductsstored = JSON.parse(localStorage.getItem('ProductsAddedToCart'))
                    const updatestockincart = accesproductsstored.find((Element) => Element.name === product.name)
                    updatestockincart.qty = updatestockincart.qty - 1
                    const ProductList_String = JSON.stringify(accesproductsstored);
                    localStorage.setItem('ProductsAddedToCart', ProductList_String)
                    location.reload();
                  }else if (product.qty = 1){
                    const accesproductsstored = JSON.parse(localStorage.getItem('ProductsAddedToCart'))
                    const updatestockincart = accesproductsstored.find((Element) => Element.name === product.name)
                    accesproductsstored.splice(updatestockincart, 1)
                    const ProductList_String = JSON.stringify(accesproductsstored);
                    localStorage.setItem('ProductsAddedToCart', ProductList_String)
                    location.reload();
                  }
                }} className='border-0 bg-transparent'>X</button>
                <img
                  src={product.img}
                  alt="thumbnail"
                  className="col-lg-1 col-sm-2 col-4 object-fit-contain border-0"
                />
                <h6 className="my-0 text-start">{product.name}</h6>
                <div className='row text-end w-100'>
                  <span className="text-body-secondary"><strong>{product.price}$</strong></span>
                  <small className="text-body-secondary"><i>{product.qty}QTY</i></small>
                </div>
              </li>
            ))}
            <li className="list-group-item d-flex justify-content-between">
              <span>Total (USD)</span>
              <strong>{total}$</strong>
            </li>
          </ul>

          <form className="card p-2">
            <div className="input-group">
              <input type="text" className="form-control" placeholder="Promo code" />
              <button type="submit" className="btn bg-color-main light-shades">Revendica</button>
            </div>
          </form>
        </div>

        <div className="col-md-7 col-lg-8 mt-4 pt-4">
          <h4 className="mb-3">Adresa de livrare</h4>
          <form action="needs-validation" noValidate>
            <div className="row g-3">
              <div className="col-sm-6">
                <label for="firstName" className="form-label">Nume</label>
                <input type="text" className="form-control" id="firstName" placeholder="" value="" required="" />
                <div className="invalid-feedback">
                  Obligatoriu
                </div>
              </div>

              <div className="col-sm-6">
                <label for="lastName" className="form-label">Prenume</label>
                <input type="text" className="form-control" id="lastName" placeholder="" value="" required="" />
                <div className="invalid-feedback">
                  Obligatoriu
                </div>
              </div>

              <div className="col-12">
                <label for="email" className="form-label">Email <span className="text-body-secondary">(Optional)</span></label>
                <input type="email" className="form-control" id="email" placeholder="you@example.com" />
                <div className="invalid-feedback">
                  Va rugam sa introduceti o adresa de mail pentru actualizari despre comanda.
                </div>
              </div>

              <div className="col-12">
                <label for="address" className="form-label">Adresa</label>
                <input type="text" className="form-control" id="address" placeholder="1234 Main St" required="" />
                <div className="invalid-feedback">
                  Adresa de livrare
                </div>
              </div>

              <div className="col-12">
                <label for="address2" className="form-label">Adresa 2<span className="text-body-secondary">(Optional)</span></label>
                <input type="text" className="form-control" id="address2" placeholder="Apartment or suite" />
              </div>

              <div className="col-md-5">
                <label for="country" className="form-label">Tara</label>
                <select className="form-select" id="country" required="">
                  <option value="">Alegeti</option>
                  <option>Romania</option>
                  <option>Ungaria</option>
                  <option>Bulgaria</option>
                  <option>Polonia</option>
                </select>
                <div className="invalid-feedback">
                  Va rugam sa alegeti una dintre tarile afisate.
                </div>
              </div>

              <div className="col-md-4">
                <label for="state" className="form-label">Judet</label>
                <select className="form-select" id="state" required="">
                  <option value="">Alegeti Judetul</option>
                  <option>Cluj</option>
                  <option>Bucuresti</option>
                  <option>Pitesti</option>
                  <option>Timisoara</option>
                  <option>Iasi</option>
                </select>
                <div className="invalid-feedback">
                  Va rugam sa alegeti unul dintre tarile afisate.
                </div>
              </div>

              <div className="col-md-3">
                <label for="zip" className="form-label">Zip</label>
                <input type="text" className="form-control" id="zip" placeholder="" required="" />
                <div className="invalid-feedback">
                  Codul Zip.
                </div>
              </div>
            </div>
          </form >
          <hr className="my-4"></hr>
          <div className="form-check text-start">
            <input type="checkbox" className="form-check-input" id="same-address" />
            <label className="form-check-label" for="same-address">Adresa de livrare este aceeasi cu adresa de facturare</label>
          </div>
          <hr className="my-4"></hr>
          <h4 className="mb-3">Plata</h4>
          <div className="my-3 text-start">
            <div className="form-check ">
              <input id="credit" name="paymentMethod" type="radio" className="form-check-input" checked="" required="" />
              <label className="form-check-label" for="credit">Cash</label>
            </div>
            <div className="form-check">
              <input id="debit" name="paymentMethod" type="radio" className="form-check-input" required="" />
              <label className="form-check-label" for="debit">Card de credit</label>
            </div>
            <div className="form-check">
              <input id="paypal" name="paymentMethod" type="radio" className="form-check-input" required="" />
              <label className="form-check-label" for="paypal">PayPal</label>
            </div>
          </div>
          <div className="row gy-3">
            <div className="col-md-6">
              <label for="cc-name" className="form-label">Nume pe card</label>
              <input type="text" className="form-control" id="cc-name" placeholder="" required="" />
              <small className="text-body-secondary">Numele complet</small>
              <div className="invalid-feedback">
                Name on card is required
              </div>
            </div>

            <div className="col-md-6">
              <label for="cc-number" className="form-label">Numar card</label>
              <input type="text" className="form-control" id="cc-number" placeholder="" required="" />
              <div className="invalid-feedback">
                Credit card number is required
              </div>
            </div>

            <div className="col-md-3">
              <label for="cc-expiration" className="form-label">Data Expirare</label>
              <input type="text" className="form-control" id="cc-expiration" placeholder="" required="" />
              <div className="invalid-feedback">
                Expiration date required
              </div>
            </div>

            <div className="col-md-3">
              <label for="cc-cvv" className="form-label">CVV</label>
              <input type="text" className="form-control" id="cc-cvv" placeholder="" required="" />
              <div className="invalid-feedback">
                Security code required
              </div>
            </div>
          </div>
          <hr className="my-4"></hr>
          <button className="w-100 btn text-light btn-lg bg-color-main" type="submit">Continue to checkout</button>
        </div >
      </div>
    </>
  );
}

export default Cart;
