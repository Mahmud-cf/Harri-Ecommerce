import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Cart from '../Pages/Cart'
import ClothProduct from '../Pages/ClothProduct'
import Contact from '../Pages/Contact'
import FashionProduc from '../Pages/FashionProduc'
import Home from '../Pages/Home'
import About from '../Pages/About'
import ProductDetails from '../Pages/ProductDetails'
import TechProduct from '../Pages/TechProduct'
import ClothProductDetails from '../Pages/ClothProductDetails'
import FetureProductDetails from '../Pages/FetureProductDetails'
import NotFound from '../Pages/NotFound'

function AllRoutes() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/cart' element={<Cart/>} />
            <Route path='/contact' element={<Contact/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/cloth-product' element={<ClothProduct/>} />
            <Route path='/tech-product' element={<TechProduct/>} />
            <Route path='/fashion-product' element={<FashionProduc/>} />
            <Route path='/product-details/:id' element={<ProductDetails/>} />
            <Route path='/cloth-product-details/:id' element={<ClothProductDetails/>} />
            <Route path='/feture-product-details/:id' element={<FetureProductDetails/>} />
            <Route path='*' element={<NotFound/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default AllRoutes