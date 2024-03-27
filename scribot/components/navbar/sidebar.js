import React, { useContext, useEffect, useState } from 'react'
import Image from 'next/image';
import axios from 'axios';
import Link from 'next/link';
import Head from 'next/head';
import { BsCardList, BsCurrencyBitcoin, BsKey, BsNewspaper, BsPaperclip, BsPerson, BsSave, BsSend, BsWallet } from 'react-icons/bs';
import { IoAdd, IoLogOut, IoSettings } from 'react-icons/io5';
import { FaDollarSign, FaMoneyBill } from 'react-icons/fa';
import CoinItem from '@/components/CoinItem';
import { useRouter } from 'next/router';
import ProgressBar from '@/components/widgets/progressBar';
import { AppContext } from '@/components/context';
import Cookies from 'js-cookie';

function Sidebar() {
    const [coins, setCoins] = useState([]);
    const [show,setShow] = useState(false);
    const [activated,setActivated] = useState("home");
    const {user,setUser} = useContext(AppContext);
    const [refresh,setRefresh] = useState(0);




   const router = useRouter()
  function toggle_nav(){
    return setShow(!show);

  }

const api = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false";

useEffect(() => {
  axios.get(api).then((response) => {
    setCoins(response.data)
  }).catch((error) => {
    console.log(error)
  })
}, []);


function logout(){

   Cookies.remove("__id");
   Cookies.remove("token");
   alert("Logged Out Successfully")
   setRefresh(prev => prev + 1)
   router.replace("/auth/login")

}

  return (
   
<div>

<nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200  ">
  <div className="px-3 py-3 lg:px-5 lg:pl-3">
    <div className="flex items-center justify-between">
      <div className="flex items-center justify-start rtl:justify-end">
        <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" onClick={()=>toggle_nav()}>
            <span className="sr-only">Open sidebar</span>
            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
               <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
            </svg>
         </button>
        <a href="" className="flex ms-2 md:me-24">
          <img src="/static/logo.png" className="h-8 me-3" alt="Swiftfund Logo" />
          <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap ">Swiftfund</span>
        </a>
      </div>
      <div className="flex items-center">
          <div className="flex items-center ms-3">
            <div>
              <button type="button" className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 " aria-expanded="false" data-dropdown-toggle="dropdown-user">
                <span className="sr-only">Open user menu</span>
                <img className="w-8 h-8 rounded-full" src="/static/auth.jpg" alt="user photo" />
              </button>
            </div>
      
          </div>
        </div>
    </div>
  </div>
  <div className={`sm:hidden ${show? "sm:flex flex-col":"sm:hidden hidden"}`} id="mobile-menu">
     <div className="space-y-1 px-2 pb-3 pt-2">
    
     
     <Link href="/user/dashboard" className={`${ activated === "home"? "bg-sky-500 text-white":"text-gray-900 hover:bg-gray-100 hover:text-slate-900"}  block rounded-md px-3 py-2 text-base font-medium`} aria-current="page">Dashboard</Link>
      <Link href="/user/account" className={`${ activated === "about"? "bg-sky-500 text-white":"text-gray-900 hover:bg-gray-100 hover:text-slate-900"} block rounded-md px-3 py-2 text-base font-medium`}>Account</Link>
      <Link href="/user/loan" className={`${ activated === "faqs"? "bg-sky-500 text-white":"text-gray-900 hover:bg-gray-100 hover:text-slate-900"} block rounded-md px-3 py-2 text-base font-medium`}>Loans</Link>
      <Link href="/user/savings" className={`${ activated === "services"? "bg-sky-500 text-white":"text-gray-900 hover:bg-gray-100 hover:text-slate-900"} block rounded-md px-3 py-2 text-base font-medium`}>Savings</Link>
      <Link href="" className={`${ activated === ""? "bg-sky-500 text-white":"text-gray-900 hover:bg-gray-100 hover:text-slate-900"} block rounded-md px-3 py-2 text-base font-medium`}>Buy Crypto <span className="text-[0.7rem] text-sky-500 p-1 border border-sky-500 rounded rounded-full">Coming Soon</span></Link>
      {/* <Link href="/calculator" className={`${ activated === "calculator"? "bg-sky-500 text-white":"text-gray-900 hover:bg-gray-100 hover:text-slate-900"} block rounded-md px-3 py-2 text-base font-medium`}>Loan Calculator</Link> */}
      <Link href="/user/activity" className={`${ activated === "blog"? "bg-sky-500 text-white":"text-gray-900 hover:bg-gray-100 hover:text-slate-900"} block rounded-md px-3 py-2 text-base font-medium`}>Activity</Link>
      <Link href="" className={`${ activated === "contact"? "bg-sky-500 text-white":"text-gray-900 hover:bg-gray-100 hover:text-slate-900"} block  rounded-md px-3 py-2 text-base font-medium`}>Products</Link>
      <Link href="" className={`${ activated === "contact"? "bg-sky-500 text-white":"text-gray-900 hover:bg-gray-100 hover:text-slate-900"} block  rounded-md px-3 py-2 text-base font-medium`}>Privacy & Security</Link>
      <Link href="" className={`${ activated === "contact"? "bg-sky-500 text-white":"text-gray-900 hover:bg-gray-100 hover:text-slate-900"} block  rounded-md px-3 py-2 text-base font-medium`}>Settings</Link>
      <Link href="" className="text-red-500 hover:bg-sky-100 hover:text-slate-900 block rounded-md px-3 py-2 text-base font-medium" onClick={()=>logout()}>Log out</Link>
     </div>
   </div>
</nav>


<aside id="logo-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0  " aria-label="Sidebar">
   <div className="h-full px-3 pb-4 overflow-y-auto bg-white ">
      <ul className="space-y-2 font-medium">
         <li>
            <Link href="/user/dashboard" className="flex items-center p-2 text-white rounded-lg  hover:bg-gray-700 bg-sky-500 group">
               <svg className="w-5 h-5 text-white transition duration-75  group-hover:text-gray-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                  <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z"/>
                  <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z"/>
               </svg>
               <span className="ms-3 ">Dashboard</span>
            </Link>
         </li>
         <li>
            <Link href="/user/account" className="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100  group">
               <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75  group-hover:text-gray-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                  <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z"/>
               </svg>
               <span className="flex-1 ms-3 whitespace-nowrap">Account</span>
            </Link>
         </li>
         <li>
            <Link href="/user/loan" className="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100  group">
            <FaMoneyBill className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75  group-hover:text-gray-900  text-xl" />
               <span className="flex-1 ms-3 whitespace-nowrap">Loans</span>
            </Link>
         </li>
         <li>
            <Link href="/user/savings" className="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100  group">
            <BsWallet className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75  group-hover:text-gray-900  text-xl" />
               <span className="flex-1 ms-3 whitespace-nowrap">Savings</span>
            </Link>
         </li>
         <li>
            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100  group">
            <BsCurrencyBitcoin className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75  group-hover:text-gray-900  text-xl" />
               <span className="flex-1 ms-3 whitespace-nowrap">Buy Crypto <span className="text-[0.7rem] text-sky-500 p-1 border border-sky-500 rounded rounded-full">Coming Soon</span></span>
            </a>
         </li>
         <li>
            <Link href="/user/activity" className="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100  group">
               <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75  group-hover:text-gray-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="m17.418 3.623-.018-.008a6.713 6.713 0 0 0-2.4-.569V2h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2H9.89A6.977 6.977 0 0 1 12 -2V8A5 5 0 1 0 0 8v6a1 1 0 0 0 1 1h8v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h6a1 1 0 0 0 1-1V8a5 5 0 0 0-2.582-4.377ZM6 12H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z"/>
               </svg>
               <span className="flex-1 ms-3 whitespace-nowrap">Activity</span>
              
            </Link>
         </li>
         <li>
            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100  group">
               <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75  group-hover:text-gray-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                  <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z"/>
               </svg>
               <span className="flex-1 ms-3 whitespace-nowrap">Products</span>
            </a>
         </li>
         <li>
            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100  group">
             <BsKey  className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75  group-hover:text-gray-900  text-xl"/>
               <span className="flex-1 ms-3 whitespace-nowrap">Privacy & Security</span>
            </a> 
         </li>
         <li>
            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100  group">
             <IoSettings  className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75  group-hover:text-gray-900  text-xl"/>
               <span className="flex-1 ms-3 whitespace-nowrap">Settings</span>
            </a> 
         </li>
         <li>
            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100  group">
               <IoLogOut className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75  group-hover:text-gray-900  text-xl" />
               <span className="flex-1 ms-3 whitespace-nowrap text-red-500 dark:text-red-400" onClick={()=>logout()}>Log out</span>
            </a>
         </li>
      </ul>
   </div>
</aside>

<div className="p-4 sm:ml-64">
  
   <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg  mt-14">
       <div className='text-black text-xl font-bold p-2 py-5 text-sky-900'>
      Welcome, {user.user? user.user.firstname:"User"}
   </div>
      <div className="grid lg:grid-cols-3 gap-4 mb-4 overflow-scroll ">
        {/* First Part */}
         <div className="flex items-center justify-start h-24 rounded rounded-xl bg-gray-500 p-5 text-slate-100">
            <div className='flex flex-col '>
                <div className='flex gap-2 text-4xl font-semibold items-center justify-start'>
                    <FaDollarSign className='text-sm' /> 0.0
                </div>
                <div>
                    Account balance
                </div>
                <div className='font-semibold underline cursor-pointer text-sm' onClick={()=>router.replace("/user/account")}>
                    Account details
                </div>
            </div>
            
         </div>
         {/* Second Part */}
         <div className="flex items-center relative justify-start h-24 rounded-xl rounded bg-green-500 p-5 text-slate-100">
            <div className='flex flex-col '>
                <div className='flex gap-2 text-4xl pt-5 lg:text-2xl font-semibold items-center justify-start pb-2 '>
                <FaDollarSign className='text-sm' />{user.user?user.user.loan_amount:"10000"}
                </div>
                <div>
                    <span className='flex items-center text-sm'>  Get up to $50,000 in 5 minutes</span> 
                </div>
                <div className='font-semibold underline cursor-pointer text-sm' onClick={()=>router.replace("/user/loan")}>
                    Take a loan
                </div>
                <div className='absolute p-1 px-2 border border-orange-700 text-[0.7rem] top-0 right-0 m-2 text-orange-700 bg-orange-100 rounded rounded-full'>
                   Funds will be dispatched to account once loan is approved
                </div>
            </div>
            
         </div>
         {/* Third Part */}
         <div className="flex items-center justify-start h-24 rounded-xl rounded bg-sky-500 p-5 text-slate-100">
            <div className='flex flex-col '>
                <div className='flex gap-2 text-md md:text-xl lg:text-2xl  font-semibold items-center justify-start'>
                    Nothing Saved yet
                </div>
                <div className='text-sm'>
                    Make your first savings and start earning interest today.
                </div>
                <div className='font-semibold underline cursor-pointer text-sm' onClick={()=>router.replace("/user/savings")}>
                    Save now!
                </div>
            </div>
            
         </div>
      </div>
    <div className='flex flex-row items-center justify-center lg:justify-start gap-5 w-full'>
        {/*  */}
        <div className='flex flex-col gap-2 items-center justify-center'>
            <div className='p-3 border border-2 rounded rounded-full bg-sky-700 text-white font-bold cursor-pointer text-center  '>
            <BsSend />
            </div>
            <div>
                Transfer
            </div>
        </div>
        {/*  */}
        <div className='flex flex-col gap-2 items-center justify-center'>
         <div className='p-3 border border-2 rounded rounded-full bg-sky-700 text-white font-bold cursor-pointer text-center '>
              <IoAdd />  
            </div>
            <div>
                Add Money
            </div>
        </div>
        {/*  */}
        <div className='flex flex-col gap-2 items-center justify-center'>
        <div className='p-3 border border-2 rounded rounded-full bg-sky-700 text-white font-bold cursor-pointer text-center '>
                <BsCardList />
                </div>
                <div>
                Link Card
            </div>
        </div>
        {/*  */}
        <div className='flex flex-col gap-2 items-center justify-center'>
        <div className='p-3 border border-2 rounded rounded-full bg-sky-700 text-white font-bold cursor-pointer text-center '>
                <BsNewspaper />
                </div>
                <div>
                Bills
            </div>
        </div>

    </div>

    {/* Activities */}
      <div className="flex items-center justify-center h-48 mb-4 rounded bg-gray-50 my-12 ">
         <p className="text-2xl text-gray-400 dark:text-gray-500">
            No recent activities
         </p>
      </div>


      {/* Crypto */}
      <div className='text-center text-2xl leading-relaxed font-semibold p-5 '>
      Crypto Market
        </div>
        {/* grid */}
      
        {coins.length > 0 ?<div>
          <div className='heading flex items-center justify-between text-sky-500 mt-5 '>
               
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
   
  
       
   </div>
</div>

</div>

  )
}

export default Sidebar;