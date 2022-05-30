import { useEffect, useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import { Home } from './user/Home';
import * as API from '../constants/api_config'

export function Body() {

  return(
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/:swag" element={<Home/>}/>
    </Routes>
  )
}