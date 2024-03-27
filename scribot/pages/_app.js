import '../styles/globals.css'
import 'animate.css';

import {createContext} from 'react'
import { useState } from 'react';
import Context from '@/components/context';


export const AppContext = createContext();

 
function MyApp({ Component, pageProps }) {
  return (
    <Context >
       <Component {...pageProps} />
    </Context>
  )
}

export default MyApp
