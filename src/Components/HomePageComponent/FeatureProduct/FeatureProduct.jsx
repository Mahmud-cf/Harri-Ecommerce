import { useQueries, useQuery } from "@tanstack/react-query";
import React from "react";
import { getFeaturedProduct } from "../../../Services";
import "./Feature.css";
import FeaturedProductItem from "./FeaturedProductItem";

function FeatureProduct() {

    const {data, isLoading} = useQuery(['featuredProduct'], getFeaturedProduct)
    
    const newData = data?.slice(0,6)
    
  return (
    <div className="container-fluid feature-product-wrapper">
      <div className="pd-4">
        <div className="fashion-product-title d-flex">
          <div>
            <h2>Featured Prouduct</h2>
          </div>
          <div className="button-div">
            <a href="/fashion-product" className="btn">View all product</a>
          </div>
        </div>
        <div className="featured-produc-single-item-wrapper">
            <div className="row">
                {newData?.map((item) => {
                    return(
                        <FeaturedProductItem key={item.id} product={item} />
                    )
                })}
            </div>
        </div>
      </div>
    </div>
  );
}

export default FeatureProduct;
