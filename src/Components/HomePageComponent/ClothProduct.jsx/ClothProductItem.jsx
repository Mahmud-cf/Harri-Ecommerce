import React from 'react'
import { useNavigate } from 'react-router-dom'

function ClothProductItem({product}) {

  const navigate = useNavigate()

  if (product.title.length > 15){
    var newTitle = product.title.slice(0,15) + '....'
  }else{
    var newTitle = product.title
  }

  return (
    <div className='col-md-3 col-sm-6 ' >
        <div className='cloth-product-item' >
            <div className='cloth-image'>
                <img onClick={()=> navigate(`/cloth-product-details/${product.id}`)} src={product.images[0]} alt={product.title} />
            </div>
            <div className='cloth-title'>
                <h5 onClick={() => navigate(`/cloth-product-details/${product.id}`)} >{newTitle}</h5>
            </div>
        </div>
    </div>
  )
}

export default ClothProductItem