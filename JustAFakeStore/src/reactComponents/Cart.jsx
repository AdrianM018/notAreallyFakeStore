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
      <div className='row g-5 mt-5 pt-5'>
        <div class="col-md-5 col-lg-4 order-md-last">
          <h4 class="d-flex justify-content-between align-items-center mb-3">
            <span class="text-primary">Cart de cumparaturi</span>
          </h4>
          <ul class="list-group mb-3">
            {ProductList.map((product, index) => (
              <li class="list-group-item d-flex lh-sm" key={index}>
                  <img
                    src={product.img}
                    alt="thumbnail"
                    className="col-lg-1 col-sm-2 col-4 object-fit-contain border-0"
                  />
                  <h6 class="my-0 text-start">{product.name}</h6>
                <span class="text-body-secondary ms-auto">{product.price}$</span>
              </li>
            ))}
            <li class="list-group-item d-flex justify-content-between">
              <span>Total (USD)</span>
              <strong>{total}$</strong>
            </li>
          </ul>

          <form class="card p-2">
            <div class="input-group">
              <input type="text" class="form-control" placeholder="Promo code" />
              <button type="submit" class="btn btn-secondary">Revendica</button>
            </div>
          </form>
        </div>

        <div class="col-md-7 col-lg-8 mt-4 pt-4">
          <h4 class="mb-3">Adresa de livrare</h4>
          <form action="needs-validation" noValidate>
            <div class="row g-3">
              <div class="col-sm-6">
                <label for="firstName" class="form-label">Nume</label>
                <input type="text" class="form-control" id="firstName" placeholder="" value="" required="" />
                <div class="invalid-feedback">
                  Obligatoriu
                </div>
              </div>

              <div class="col-sm-6">
                <label for="lastName" class="form-label">Prenume</label>
                <input type="text" class="form-control" id="lastName" placeholder="" value="" required="" />
                <div class="invalid-feedback">
                  Obligatoriu
                </div>
              </div>

              <div class="col-12">
                <label for="email" class="form-label">Email <span class="text-body-secondary">(Optional)</span></label>
                <input type="email" class="form-control" id="email" placeholder="you@example.com" />
                <div class="invalid-feedback">
                  Va rugam sa introduceti o adresa de mail pentru actualizari despre comanda.
                </div>
              </div>

              <div class="col-12">
                <label for="address" class="form-label">Adresa</label>
                <input type="text" class="form-control" id="address" placeholder="1234 Main St" required="" />
                <div class="invalid-feedback">
                  Adresa de livrare
                </div>
              </div>

              <div class="col-12">
                <label for="address2" class="form-label">Adresa 2<span class="text-body-secondary">(Optional)</span></label>
                <input type="text" class="form-control" id="address2" placeholder="Apartment or suite" />
              </div>

              <div class="col-md-5">
                <label for="country" class="form-label">Tara</label>
                <select class="form-select" id="country" required="">
                  <option value="">Alegeti</option>
                  <option>Romania</option>
                  <option>Ungaria</option>
                  <option>Bulgaria</option>
                  <option>Polonia</option>
                </select>
                <div class="invalid-feedback">
                  Va rugam sa alegeti una dintre tarile afisate.
                </div>
              </div>

              <div class="col-md-4">
                <label for="state" class="form-label">Judet</label>
                <select class="form-select" id="state" required="">
                  <option value="">Alegeti Judetul</option>
                  <option>Cluj</option>
                  <option>Bucuresti</option>
                  <option>Pitesti</option>
                  <option>Timisoara</option>
                  <option>Iasi</option>
                </select>
                <div class="invalid-feedback">
                  Va rugam sa alegeti unul dintre tarile afisate.
                </div>
              </div>

              <div class="col-md-3">
                <label for="zip" class="form-label">Zip</label>
                <input type="text" class="form-control" id="zip" placeholder="" required="" />
                <div class="invalid-feedback">
                  Codul Zip.
                </div>
              </div>
            </div>
          </form >
          <hr class="my-4"></hr>
          <div class="form-check text-start">
            <input type="checkbox" class="form-check-input" id="same-address" />
            <label class="form-check-label" for="same-address">Adresa de livrare este aceeasi cu adresa de facturare</label>
          </div>
          <hr class="my-4"></hr>
          <h4 class="mb-3">Plata</h4>
          <div class="my-3 text-start">
            <div class="form-check ">
              <input id="credit" name="paymentMethod" type="radio" class="form-check-input" checked="" required="" />
              <label class="form-check-label" for="credit">Cash</label>
            </div>
            <div class="form-check">
              <input id="debit" name="paymentMethod" type="radio" class="form-check-input" required="" />
              <label class="form-check-label" for="debit">Card de credit</label>
            </div>
            <div class="form-check">
              <input id="paypal" name="paymentMethod" type="radio" class="form-check-input" required="" />
              <label class="form-check-label" for="paypal">PayPal</label>
            </div>
          </div>
          <div class="row gy-3">
            <div class="col-md-6">
              <label for="cc-name" class="form-label">Nume pe card</label>
              <input type="text" class="form-control" id="cc-name" placeholder="" required="" />
              <small class="text-body-secondary">Numele complet</small>
              <div class="invalid-feedback">
                Name on card is required
              </div>
            </div>

            <div class="col-md-6">
              <label for="cc-number" class="form-label">Numar card</label>
              <input type="text" class="form-control" id="cc-number" placeholder="" required="" />
              <div class="invalid-feedback">
                Credit card number is required
              </div>
            </div>

            <div class="col-md-3">
              <label for="cc-expiration" class="form-label">Data Expirare</label>
              <input type="text" class="form-control" id="cc-expiration" placeholder="" required="" />
              <div class="invalid-feedback">
                Expiration date required
              </div>
            </div>

            <div class="col-md-3">
              <label for="cc-cvv" class="form-label">CVV</label>
              <input type="text" class="form-control" id="cc-cvv" placeholder="" required="" />
              <div class="invalid-feedback">
                Security code required
              </div>
            </div>
          </div>
          <hr class="my-4"></hr>
          <button class="w-100 btn text-light btn-lg b-color-main" type="submit">Continue to checkout</button>
        </div >
      </div>
    </>
  );
}

export default Cart;
