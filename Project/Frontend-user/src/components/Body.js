import { useEffect, useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import { Home } from './user/home/Home';
import { Products } from './user/products/Products';
import { Menu } from './user/menu/Menu';
import { Login } from './user/login/Login';
import { Register } from './user/login/Register';
import { ProductDetail } from './user/ProductDetail/ProductDetail';
import { Cart } from './user/cart/Cart';
import { Bills } from './user/bill/Bills';
import { Notifications } from './user/notifications/Notifications';
import * as API from '../constants/api_config'

export function Body() {

  return(
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/products/:swag" element={<ProductDetail/>}/>
        <Route path="/cart/:swag" element={<Cart/>}/>
        <Route path="/bills/:swag" element={<Bills/>}/>
        <Route path="/settings" element={<Menu/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/notifications" element={<Notifications/>}/>
        <Route path="/:swag" element={<Home/>}/>
    </Routes>
  )
}