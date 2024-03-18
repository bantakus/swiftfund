import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import Horizontal_nav from '../components/navbar/horizontal_nav'
import axios from 'axios';
import CoinItem from '../components/CoinItem';

import ProgressBar from '../components/widgets/progressBar';

function QMS() {
    const [coins, setCoins] = useState([]);

const api = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false";

useEffect(() => {
  axios.get(api).then((response) => {
    setCoins(response.data)
  }).catch((error) => {
    console.log(error)
  })
}, []);

  return (
    <div><Head>

    {/* title */}
<title>Quick Market Summary</title>
{/* meta tags */}
<meta name="description" content=" Trade or Exchange all your cryptocurrencies and giftcards with us.
         We are driven by the belief that everyone should have the opportunity to access, profit from, and benefit from contemporary digital assets, especially those who are most in need.
         We accept a wide range of gift card brands, including popular ones like Amazon, iTunes, and Google Play. Check our list for the full selection.
         We support a variety of cryptocurrencies, including Bitcoin, Ethereum, Litecoin, and more. You can choose your preferred cryptocurrency during the transaction. " />

{/* header links */}
<link rel="icon" href="./static/logo.ico" />
</Head>



{/* navbar */}
<div className='w-full'>
 <Horizontal_nav activated={"pricing"} />
 {/* main */}
 <main className='relative overflow-hidden px-5 sm:container  sm:mx-auto  sm:px-5 xl:px-10 text-white'>
     {/*  Market Summary */}
     <div className='mt-24 '>
        <div className='text-sm text-yellow-500 text-center py-3 font-semibold'>
          Market Summary
        </div>
        <div className='text-center text-2xl leading-relaxed font-semibold px-5'>
      Live Crypto Stats
        </div>
        <div className="p-2 bg-yellow-500 text-gray-800 border hover:border-yellow-500  hover:bg-yellow-600 rounded rounded-lg my-5 font-semibold text-center border-slate-700 p-3 px-10 mx-4" >
    <a href="" className= {``} >Trade/Exchange</a>
</div>
        {/* grid */}
      
        {coins.length > 0 ?<div>
          <div className='heading flex items-center justify-between text-yellow-400 mt-5 w-full '>
               
                    <p>#</p>
                    <p className='coin-name'>Coin</p>
                    <p>Price</p>
                    <p>24h</p>
                    <p className='hide-mobile'>Volume</p>
                    <p className='hide-mobile'> Market Cap</p>
                </div>

                {coins.map((coins,index)=> {
                    return (
                     
                            <CoinItem coins={coins} key={index} className="flex items-center justify-between  w-full"/>
                          
                       
                    )
                })}
        </div>
           : <div className='w-full flex items-center justify-center py-24  ' >
            <ProgressBar />
           </div> }
          </div>
            <div className='flex flex-col sm:flex-row p-5 gap-5 sm:container  sm:mx-auto  sm:px-5 xl:px-10  w-full pt-36 relative overflow-hidden sm:gap-24'>
    <div className='text-sm'>
      <div className='text-lg font-semibold
      '>
       <a href="tel:+2347036778009">Contact Us</a> 
      </div>
      <div className='flex flex-col sm:flex-row text-gray-400 gap-5'>
         
      <a href='tel:+2347036778009' className='hover:text-white font-semibold'>Book a Call</a>
    <a href='http://' className='hover:text-white font-semibold'>Telegram</a>
    <a href='mailto:cryptocentree@gmail.com' className='hover:text-white font-semibold'>Email Us</a>
      </div>
      
    </div>
    <div className='text-sm'>
      <div className='text-lg font-semibold
      '>
        Legal
      </div>
      <div className='flex flex-col sm:flex-row gap-5 text-gray-400'>
         <a href='http:// ' className='hover:text-white font-semibold'>Privacy Policy</a>
    <a href='http://' className='hover:text-white font-semibold'>Terms and Conditions</a>
    
      </div>
      
    </div>
   
   </div>
   <div className=' text-center p-5'>
    &copy;2023 - CryptoCentre </div>
   <div className=' text-center text-sm p-5'>
    Built by CYBUG TECHNOLOGIES
   </div>

 </main>

</div></div>
  )
}

export default QMS;