import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import Horizontal_nav from '../components/navbar/horizontal_nav'
import axios from 'axios';
import { useRouter } from 'next/router';
import Link from 'next/link';


function Trade() {
    const [coins, setCoins] = useState([]);
    
    const [input,setInput] = useState({name:"",coin:"",amount:0,quantity:0})
    const [error,setError] = useState(false);

    const handleOnChange = (e) => {
        let value = e.target.value
        setInput(prev =>({...prev,[e.target.name]:value}) )
    }

    const router = useRouter();

    // const handleProceed = () => {
    //     if(input.name && input.coin){
    //         return router.replace(`https://wa.me/2347036778009/?text=Hello%20I%20am%20${input.name}%20and%20I%20want%20to%20trade%20my%20${input.coin}%20${input.amount &&'of amount $'+input.amount}%20${input.quantity &&'of amount $'+input.quantity}`)
    //     }
    //     return setError(true);
    // };

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
<title>Trade</title>
{/* meta tags */}
<meta name="description" content="Trade or Exchange all your cryptocurrencies and giftcards with us.
         We are driven by the belief that everyone should have the opportunity to access, profit from, and benefit from contemporary digital assets, especially those who are most in need.
         We accept a wide range of gift card brands, including popular ones like Amazon, iTunes, and Google Play. Check our list for the full selection.
         We support a variety of cryptocurrencies, including Bitcoin, Ethereum, Litecoin, and more. You can choose your preferred cryptocurrency during the transaction." />

{/* header links */}
<link rel="icon" href="./static/logo.ico" />
</Head>



{/* navbar */}
<div className='w-full'>
 <Horizontal_nav activated={"trade"} />
 {/* main */}
 <main className='relative overflow-hidden text-white'>
     {/* form */}
     <div className='w-full bg-gray-900 min-h-screen p-5 pt-12 flex flex-col items-center justify-center'>

    <form className='bg-gray-800 m-5 rounded rounded-lg p-5 flex flex-col gap-5 mt-12 sm:mt-5' >
        {/* info section */}
        <div className='flex flex-col gap-3'>
            <div className='text-yellow-100 '>
                Kindly fill this section & Leave any part blank if not applicable
            </div>
            <div className='text-sm text-red-500'>
                {error &&  "Missing Credentials, please fill in the required field."}
            </div>
        </div>
    <div className='space-y-2 font-semibold'>
        <div>
            Your Name:
        </div>
    <input type="text" name={"name"} value={input.name} onChange={handleOnChange}  className="px-4 py-2 outline-none border-2 border-yellow-500 w-full rounded-lg "  placeholder='e.g Tosin' required/> <br />  
    </div>
       
       <div className='space-y-2 font-semibold'>
        <div >
            Name of Cryptocurrency or Giftcard:
        </div>
    <input type="text" name={"coin"} value={input.coin} onChange={handleOnChange}  className="px-4 py-2 outline-none border-2 border-yellow-500 w-full rounded-lg caret-yellow" placeholder='e.g Bitcoin' required/> <br />
       </div>
    <div className='space-y-2 font-semibold'>
         <div >
            Amount in US Dollars (optional):
        </div>
     <input type="number" name={"amount"} value={input.amount} onChange={handleOnChange}  className="px-4 py-2 outline-none border-2 border-yellow-500 w-full rounded-lg caret-blue" placeholder='e.g 100' /> <br /> 
    </div>
    <div className='space-y-2 font-semibold'>
         <div >
            Quantity (optional):
        </div>
     <input type="number" name={"quantity"} value={input.quantity} onChange={handleOnChange}  className="px-4 py-2 outline-none border-2 border-yellow-500 w-full rounded-lg caret-blue" placeholder='e.g 2.2' /> <br /> 
    </div>
   
    
    </form>
       <button className={`text-white py-3 px-5 text-lg font-semibold rounded rounded-lg text-center ${input.name && input.coin ? "bg-yellow-500" : "bg-yellow-700  w-64"}`} >
            <a href={`https://wa.me/2347036778009/?text=Hello%20I%20am%20${input.name}%20and%20I%20want%20to%20trade%20my%20${input.coin}%20${input.amount?'of amount $'+input.amount:""}%20${input.quantity ?'and it is of quantity '+input.quantity:""}`}>Proceed</a>
        </button>
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
    &copy;2023 - CryptoCentre
   </div>
   <div className=' text-center text-sm p-5'>
    Built by CYBUG TECHNOLOGIES
   </div>

 </main>

</div></div>
  )
}

export default Trade;