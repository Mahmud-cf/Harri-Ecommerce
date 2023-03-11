import React from 'react'
import './AllProduct.css'
import Navbar from '../Components/GlobalComponents/Navbar'
import { useQuery } from '@tanstack/react-query'
import { getClothProduct } from '../Services'
import Footer from '../Components/GlobalComponents/Footer'
import { useNavigate } from 'react-router-dom'

function ClothProduct() {
  const {data} = useQuery(['product'], getClothProduct);
  const newData = data?.slice(0,28);
  const navigate = useNavigate()
  console.log(newData)
  return (
    <div>
      <Navbar/>
      <div className='container-fluid all-product-page-wrapper' >
        <div className="pd-4">
          <div>
            <div className='all-product-wrapper-title text-center' >
              <h1>All Product</h1>
              <p>Chose the best one</p>
            </div>
            <div className="all-product-wrapper">
              <div className='row'>
                {newData?.map((product) =>{
                  return(
                    <div key={product.id} className="col-lg-3 col-md-4 col-sm-6">
                      <div className='indivitual-product-wrapper' >
                        <div className='indivitual-product-image'>
                          <img  onClick={()=> navigate(`/cloth-product-details/${product.id}`)} src={product.images[0]} alt={product.title} className='img-fluid' />
                        </div>
                        <div className='indivitual-product-title text-center' >
                          <h6 onClick={()=> navigate(`/cloth-product-details/${product.id}`)} >{product.title}</h6>
                          <dir className='product-dir' ></dir>
                          <p>${product.price}</p>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default ClothProduct