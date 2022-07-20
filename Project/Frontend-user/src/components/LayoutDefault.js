import { useState } from 'react';
import {Body} from './Body'
import { Header } from './header/Header';

export function LayoutDefault() {
  return (
    <div className="App">
      <Header/>
      <Body/>
      {/* <Footer/> */}
    </div>
  )
}