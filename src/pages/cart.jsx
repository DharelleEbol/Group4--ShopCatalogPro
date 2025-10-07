import React, { useState } from 'react'
import '../styles/cartStyle.css'


export default function Cart() {
  const [items, setItems] = useState([
    { id: 1, brand: 'BRAND/ SHOP NAME', name: 'Product Name', price: 100, qty: 1 },
    { id: 2, brand: 'BRAND/ SHOP NAME', name: 'Product Name', price: 100, qty: 10 },
  ])

  const inc = (id) =>
    setItems((s) => s.map((it) => (it.id === id ? { ...it, qty: it.qty + 1 } : it)))
  const dec = (id) =>
    setItems((s) => s.map((it) => (it.id === id ? { ...it, qty: Math.max(0, it.qty - 1) } : it)))

  const total = items.reduce((sum, it) => sum + it.price * it.qty, 0)

  return (
    <main className="cart-page">
      <div className="container">
        <h2 className="page-title">My Cart</h2>

        <div className="cart-table" role="table" aria-label="Cart items">
          <div className="cart-row header" role="row">
            <div className="col product-col">Product</div>
            <div className="col qty-col">Quantity</div>
            <div className="col total-col">Total</div>
          </div>

          {items.map((it) => (
            <div className="cart-row" key={it.id} role="row">
              <div className="col product-col">
                <div className="cart-product">
                  <div className="cart-image" />
                  <div className="cart-info">
                    <div className="cart-brand">{it.brand}</div>
                    <div className="cart-name">{it.name}</div>
                    <div className="cart-unit">P{it.price}</div>
                  </div>
                </div>
              </div>

              <div className="col qty-col">
                <div className="qty-control" aria-label={`Quantity for ${it.name}`}>
                  <button type="button" className="qty-btn" onClick={() => dec(it.id)}>-</button>
                  <div className="qty-value">{it.qty}</div>
                  <button type="button" className="qty-btn" onClick={() => inc(it.id)}>+</button>
                </div>
              </div>

              <div className="col total-col">
                <div className="line-total">P{it.price * it.qty}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="cart-actions">
          <div className="cart-total">
            <span className="total-label">Total:</span>
            <span className="total-value">P{total.toLocaleString()}</span>
          </div>
          <button className="checkout-btn" type="button">Check Out</button>
        </div>
      </div>
    </main>
  )
}
