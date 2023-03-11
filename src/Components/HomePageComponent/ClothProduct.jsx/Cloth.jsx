import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { getClothProduct } from '../../../Services'
import './Cloth.css'
import ClothProductItem from './ClothProductItem'

function Cloth() {

    const {data, isLoading} = useQuery(['clothProduct'], getClothProduct)

    const sliceClothProduct = data?.slice(1,5)

  return (
    <div className="container-fluid">
        <div className="pd-4">
          <div>
            <div className="d-flex cloth-product-wrapper">
              <div className="cloth-product-title-wrapper">
                <h2>TOP CATEGORIES CLOTH PRODUCT</h2>
                <p>Choose the best one. ll the fantastic products available for you </p>
                <a href='/cloth-product' className='btn' >View all product</a>
              </div>
              <div className="row">
                {sliceClothProduct?.map((item) => {
                    return (
                        <ClothProductItem key={item.id} product={item} />
                    )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Cloth