import React from "react";
import { BsCart2, BsSearch } from "react-icons/bs";
import { AiFillStar, AiOutlineSearch } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import "./ProductItem.css";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "react-use-cart";

function ProductItem({ fashion }) {
  const navigate = useNavigate();
  // console.log(fashion?.images[0])
  const { addItem } = useCart();

  return (
    <div className="col-lg-3 col-md-4 col-sm-6">
      <div
        className="product-item"
        onClick={() => navigate(`product-details/${fashion.id}`)}
      >
        <div className="text-center">
          <div className="product-image d-flex">
            <div className="position-relative">
              <img src={fashion?.images[0]} alt="" className="img-fluid" />
              <div className="image-toggle-part-wrapper">
                <div className="d-flex image-toggle-part-inner">
                  <div
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                    }}
                    
                  >
                    <button onClick={() => addItem(fashion)} className="image-toggle-icon" >
                      <BsCart2 />
                    </button>
                  </div>
                  <div>
                    <Link className="image-toggle-icon">
                      <BiSearch
                        onClick={() =>
                          navigate(`product-details/${fashion.id}`)
                        }
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="product-title">
            <div>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </div>
            <div>
              <h5
                onClick={() => navigate(`product-details/${fashion.id}`)}
                className="title"
              >
                {fashion.title}
              </h5>
            </div>

            <div>
              <h3>${fashion.price}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
