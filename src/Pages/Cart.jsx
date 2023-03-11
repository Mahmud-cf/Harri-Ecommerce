import React from "react";
import "./CssFile/Cart.css";
import { Link } from "react-router-dom";
import { useCart } from "react-use-cart";
import Navbar from "../Components/GlobalComponents/Navbar";
import Footer from "../Components/GlobalComponents/Footer";
import { MdClear } from "react-icons/md";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

function Cart() {
  const {
    isEmpty,
    cartTotal,
    removeItem,
    totalItems,
    updateItemQuantity,
    items,
    totalUniqueItems,
  } = useCart();

  console.log(cartTotal);
  if (isEmpty) {
    return (
      <div>
        <Navbar />
        <div className=" container-fluid">
          <div className="pd-4">
            <div className="empty-cart-wrapper">
              <div className="empty-title text-center">
                <h2>Your shopping cart is empty.</h2>
                <p>
                  Discover the <Link to="/">most popular items</Link> available
                </p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
  return (
    <div>
      <Navbar />
      <div className="container-fluid">
        <div className="pd-4 cart-padding">
          <div className="cart-page-wrapper">
            <div className="cart-title text-center">
              <h1>You have total {totalUniqueItems} product in cart</h1>
            </div>
            <div>
              <div className="full-cart-wrapper d-flex">
                <div className="cart-item-wrapper">
                  <div>
                    <table cellSpacing="0">
                      <thead>
                        <tr>
                          <th></th>
                          <th>PRODUCT</th>
                          <th>PRICE</th>
                          <th>QUANTITY</th>
                          <th>SUBTOTAL</th>
                        </tr>
                      </thead>
                      <tbody>
                        {items?.map((item) => {
                          return (
                            <tr>
                              <td className="text-center">
                                <div
                                  onClick={() => removeItem(item.id)}
                                  className="remove-icon"
                                >
                                  <MdClear />
                                </div>
                              </td>
                              <td className="d-flex cart-item-pic-title">
                                <div>
                                  <img
                                    className="img-fluid"
                                    src={item?.images[0]}
                                    alt=""
                                  />
                                </div>
                                <div>{item?.title}</div>
                              </td>
                              <td className="item-price">${item?.price}</td>
                              <td>
                                <div className="d-flex">
                                  <div
                                    className="quantity-icon"
                                    onClick={() =>
                                      updateItemQuantity(
                                        item?.id,
                                        item?.quantity - 1
                                      )
                                    }
                                  >
                                    <AiOutlineMinus />
                                  </div>
                                  <div>{item?.quantity}</div>
                                  <div
                                    className="quantity-icon"
                                    onClick={() =>
                                      updateItemQuantity(
                                        item?.id,
                                        item?.quantity + 1
                                      )
                                    }
                                  >
                                    <AiOutlinePlus />
                                  </div>
                                </div>
                              </td>
                              <td className="item-price">
                                ${item?.price * item?.quantity}
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="total-price-div">
                  <table>
                    <thead>
                      <tr>
                        <th colSpan={2}>CART TOTAL</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Shipping</td>
                        <td className="item-price">$5</td>
                      </tr>
                      <tr>
                        <td>Total</td>
                        <td className="item-price">${cartTotal + 5}</td>
                      </tr>
                    </tbody>
                  </table>
                  <div>
                    <Link to="/" className="cart-page-button">
                      Go To Shopiing
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Cart;
