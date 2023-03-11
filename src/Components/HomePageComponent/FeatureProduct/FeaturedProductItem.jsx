import React from "react";
import { AiFillStar, AiOutlineSearch } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

function FeaturedProductItem({ product }) {
  const navigate = useNavigate()
  return (
    <div className="col-md-4 col-sm-6 ">
      <div className="feture-item-wrapper">
        <div className="d-flex">
          <div className="feturre-product-item-img" >
            <img
              onClick={() => navigate(`feture-product-details/${product.id}`)}
              className="img-fluid"
              src={product.images[0]}
              alt="product.title"
            />
          </div>
          <div className="feture-product-item-title" >
            <h2 onClick={() => navigate(`feture-product-details/${product.id}`)} >{product.title}</h2>
            <div>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </div>
            <p>${product.price}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedProductItem;
