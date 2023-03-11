import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { getClothProduct, getTechProduct } from "../../../Services";

function RelatedProduct() {
    const navigate = useNavigate()
  const { data } = useQuery(["relatedProduct"], getClothProduct);
  const relatedProduct = data?.slice(0, 4);

  // THIS FUNCTION FOR NAVIGATE ANOTHER PRODUCT DETAILS PAGE
  const handler = (id) => {
    navigate(`/cloth-product-details/${id}`)
  }

  return (
    <div className="related-product-wrapper">
      <div className="row">
        {relatedProduct?.map((item) => {
          return (
            <div key={item.id} className="col-lg-3 col-md-4 col-sm-6">
              <div className="product-padding" >
              <div className="related-product d-flex">
                <div>
                  <img
                    src={item?.images[0]}
                    alt={item?.tilte}
                  />
                </div>
                <div className="related-single-product-title" >
                    <h6 onClick={ () => handler (item.id)} >{item?.title}</h6>
                  <p>${item?.price}</p>
                </div>
              </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default RelatedProduct;
