import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeItem,
  updateQuantity,
} from "./redux/CartSlice";
import { Link } from "react-router-dom";

function CartItem() {
  const dispatch = useDispatch();

  const cartItems = useSelector(
    (state) => state.cart.items
  );

  const totalAmount = cartItems.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <>
      <nav className="navbar">
        <h2>Paradise Nursery</h2>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/plants">Plants</Link>
          <Link to="/cart">
            🛒 Cart
            <span className="cart-count">
              {totalItems}
            </span>
          </Link>
        </div>
      </nav>

      <div className="cart-container">
        <h1>Shopping Cart</h1>

        {cartItems.length === 0 ? (
          <div>
            <h2>Your cart is empty.</h2>

            <Link to="/plants">
              <button className="continue-button">
                Continue Shopping
              </button>
            </Link>
          </div>
        ) : (
          <>
            {cartItems.map((item) => (
              <div
                className="cart-item"
                key={item.id}
              >
                <img
                  src={item.image}
                  alt={item.name}
                />

                <div>
                  <h2>{item.name}</h2>

                  <p>
                    Unit Price: $
                    {item.price.toFixed(2)}
                  </p>

                  <p>
                    Total Cost: $
                    {(item.price * item.quantity).toFixed(
                      2
                    )}
                  </p>

                  <div className="quantity-controls">
                    <button
                      onClick={() =>
                        dispatch(
                          updateQuantity({
                            id: item.id,
                            quantity:
                              item.quantity - 1,
                          })
                        )
                      }
                    >
                      −
                    </button>

                    <strong>
                      {item.quantity}
                    </strong>

                    <button
                      onClick={() =>
                        dispatch(
                          updateQuantity({
                            id: item.id,
                            quantity:
                              item.quantity + 1,
                          })
                        )
                      }
                    >
                      +
                    </button>
                  </div>

                  <br />

                  <button
                    className="delete-button"
                    onClick={() =>
                      dispatch(removeItem(item.id))
                    }
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}

            <div className="cart-summary">
              <h2>
                Total Cart Amount: $
                {totalAmount.toFixed(2)}
              </h2>

              <p>
                Total Items: {totalItems}
              </p>

              <button
                className="checkout-button"
                onClick={() =>
                  alert("Coming Soon!")
                }
              >
                Checkout
              </button>

              <Link to="/plants">
                <button className="continue-button">
                  Continue Shopping
                </button>
              </Link>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default CartItem;
