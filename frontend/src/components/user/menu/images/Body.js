import { useEffect, useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import { Home } from './user/home/Home';
import { Products } from './user/products/Products';
import { Menu } from './user/menu/Menu';
import * as API from '../constants/api_config'

export function Body() {

  return(
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/settings" element={<Menu/>}/>
        <Route path="/:swag" element={<Home/>}/>
    </Routes>
  )
}