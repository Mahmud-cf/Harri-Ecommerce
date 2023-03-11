import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getTechProduct } from "../../../Services";
import ProductItem from "./ProductItem";

function Technologey() {
  const { data, isLoading } = useQuery(["fashion-product"], getTechProduct);
  const sliceProduct = data?.products?.slice(0, 4);
  return (
    <div className="container-fluid" id="buy-now" >
      <div className="pd-4">
        <div className="fashion-product-title d-flex" >
          <div>
            <p>Popular Item in the market</p>
            <h2>Technologey Prouduct</h2>
          </div>
          <div className="button-div" >
            <a href="/tech-product" className="btn"  >View all product</a>
          </div>
        </div>
        <div className="row">
          {sliceProduct?.map((item) => {
            return <ProductItem key={item.title} fashion={item} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Technologey;
