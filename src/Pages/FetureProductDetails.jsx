import { useQuery, useQueryClient } from "@tanstack/react-query";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Components/GlobalComponents/Navbar";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { useCart } from "react-use-cart";
import Table from "react-bootstrap/Table";
import RelatedProduct from "../Components/HomePageComponent/FashionProduct/RelatedProduct";
import {  getFeaturedProductById } from "../Services";
import Footer from "../Components/GlobalComponents/Footer";

function ProductDetails() {
  const queryClient = useQueryClient();
  const { id } = useParams();
  const {data, isLoading} = useQuery([`featureProduct/${id}`], () => getFeaturedProductById(id))
  const { updateItemQuantity, addItem, items } = useCart();
  const findProduct = items.find((item) => item.id === data?.id);
  return (
    <div>
      <Navbar />
      <div className="container-fluid product-details-wrapper">
        <div className="container">
          <div className="product-details-main-part-wrapper">
            <div className="row">
              <div className="col-md-5">
                <div className="product-details-image">
                  <img
                    src={data?.images[0]}
                    alt={data?.title}
                    className="img-fluid"
                  />
                </div>
              </div>
              <div className="col-md-7">
                <div className="product-details-page-right-part">
                  <div className="for-border-bottom">
                    <div className="product-details-description-part">
                      <h2>{data?.title}</h2>
                      <h1>${data?.price}</h1>
                      <p>{data?.description}</p>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quia omnis excepturi architecto, debitis aliquam facilis
                        perferendis quas et laudantium commodi!
                      </p>
                    </div>
                    <div className="d-flex product-quantity-wrapper">
                      {findProduct ? (
                        <div className="conditional-quantity-button">
                          <div className="d-flex product-quantity">
                            <div
                              className="quantity-icon"
                              onClick={() =>
                                updateItemQuantity(
                                  findProduct?.id,
                                  findProduct?.quantity - 1
                                )
                              }
                            >
                              <AiOutlineMinus />
                            </div>
                            <div>{findProduct?.quantity}</div>
                            <div
                              className="quantity-icon"
                              onClick={() =>
                                updateItemQuantity(
                                  findProduct?.id,
                                  findProduct?.quantity + 1
                                )
                              }
                            >
                              <AiOutlinePlus />
                            </div>
                          </div>
                          <div className="product-details-page-add-to-cart">
                            <button onClick={() => addItem(data)}>
                              ADD TO CART
                            </button>
                          </div>
                        </div>
                      ) : (
                        <div className="product-details-page-add-to-cart">
                          <button onClick={() => addItem(data)}>
                            ADD TO CART
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="product-cetegory">
                    <div>
                      <span>stock : </span>
                      {/* <span>{data?.stock}</span> */}
                    </div>
                    <div>
                      <span>category : </span>
                      {/* <span>{data?.category}</span> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="product-details-page-table col-md-8">
            <div className="row">
              <div className="table-head custom-table d-flex">
                {/* <div>Brand</div> */}
                <div>Category</div>
                {/* <div>Rating</div> */}
                <div>Price</div>
              </div>
              <div className="table-body custom-table d-flex">
                {/* <div>{data?.brand}</div> */}
                <div>{data?.category?.name}</div>
                {/* <div>{data?.rating}</div> */}
                <div>${data?.price}</div>
              </div>
            </div>
          </div>

          {/* MORE RELATED PRODUCT PART  */}
          <div >
            <div className="fashion-product-title related-product-title">
              <p>Popular Item in the market</p>
              <h2>Top Product</h2>
            </div>
            <RelatedProduct />
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default ProductDetails;
