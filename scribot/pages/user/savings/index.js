import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import axios from 'axios';
import Link from 'next/link';
import Head from 'next/head';
import { BsCardList, BsCurrencyBitcoin, BsHeadset, BsHouse, BsKey, BsNewspaper, BsPaperclip, BsPerson, BsSave, BsSend, BsWallet, BsWallet2, BsWalletFill } from 'react-icons/bs';
import { IoAdd, IoBusiness, IoLogOut, IoSettings } from 'react-icons/io5';
import { FaChartPie, FaDollarSign, FaMoneyBill, FaSchool } from 'react-icons/fa';
import { GiHelp } from 'react-icons/gi';
import { MdCastForEducation } from 'react-icons/md';
import Cookies from 'js-cookie';



function Savings() {
    const [coins, setCoins] = useState([]);
    const [show,setShow] = useState(false);
    const [activated,setActivated] = useState("services");
    const [refresh,setRefresh] = useState(0);

    useEffect(() => {
  
      const id = Cookies.get("__id");
      const token = Cookies.get("token")
        if(id && token){
      return ;
        }
        else{
          router.replace("/auth/login")
        }
   
   }, []);

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

  alert("Logged Out Successfully")
  Cookies.remove("__id");
  Cookies.remove("token");
  setRefresh(prev => prev + 1)
  router.replace("/auth/login")
}

  return (
    <div className='bg-white min-h-screen overflow-hidden'>
 <Head>

{/* title */}
<title>Savings</title>
{/* meta tags */}
<meta name="description" content=" Welcome to Swiftfund, where your financial goals meet possibility! Get ready to embark on a seamless journey towards your dreams with our hassle-free lending solutions. Whether you're looking to fund your next big project, consolidate debt, or seize a lucrative opportunity, we've got you covered. Explore our range of flexible loan options tailored to fit your needs, backed by competitive rates and expert guidance. Say goodbye to financial barriers and hello to a brighter future with SwiftFund. Start your application today and let's make your aspirations a reality!" />

{/* header links */}
<link rel="icon" href="./static/logo.ico" />
</Head>
<div>

<nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200  ">
  <div className="px-3 py-3 lg:px-5 lg:pl-3">
    <div className="flex items-center justify-between">
      <div className="flex items-center justify-start rtl:justify-end">
        <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"  onClick={()=>toggle_nav()}>
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
  <div class={`sm:hidden ${show? "sm:flex flex-col":"sm:hidden hidden"}`} id="mobile-menu">
     <div class="space-y-1 px-2 pb-3 pt-2">
    
     
     <Link href="/user/dashboard" class={`${ activated === "home"? "bg-sky-500 text-white":"text-gray-900 hover:bg-gray-100 hover:text-slate-900"}  block rounded-md px-3 py-2 text-base font-medium`} aria-current="page">Dashboard</Link>
      <Link href="/user/account" class={`${ activated === "about"? "bg-sky-500 text-white":"text-gray-900 hover:bg-gray-100 hover:text-slate-900"} block rounded-md px-3 py-2 text-base font-medium`}>Account</Link>
      <Link href="/user/loan" class={`${ activated === "faqs"? "bg-sky-500 text-white":"text-gray-900 hover:bg-gray-100 hover:text-slate-900"} block rounded-md px-3 py-2 text-base font-medium`}>Loans</Link>
      <Link href="/user/savings" class={`${ activated === "services"? "bg-sky-500 text-white":"text-gray-900 hover:bg-gray-100 hover:text-slate-900"} block rounded-md px-3 py-2 text-base font-medium`}>Savings</Link>
      <Link href="" class={`${ activated === ""? "bg-sky-500 text-white":"text-gray-900 hover:bg-gray-100 hover:text-slate-900"} block rounded-md px-3 py-2 text-base font-medium`}>Buy Crypto <span className="text-[0.7rem] text-sky-500 p-1 border border-sky-500 rounded rounded-full">Coming Soon</span></Link>
      {/* <Link href="/calculator" class={`${ activated === "calculator"? "bg-sky-500 text-white":"text-gray-900 hover:bg-gray-100 hover:text-slate-900"} block rounded-md px-3 py-2 text-base font-medium`}>Loan Calculator</Link> */}
      <Link href="/user/activity" class={`${ activated === "blog"? "bg-sky-500 text-white":"text-gray-900 hover:bg-gray-100 hover:text-slate-900"} block rounded-md px-3 py-2 text-base font-medium`}>Activity</Link>
      <Link href="" class={`${ activated === "contact"? "bg-sky-500 text-white":"text-gray-900 hover:bg-gray-100 hover:text-slate-900"} block  rounded-md px-3 py-2 text-base font-medium`}>Products</Link>
      <Link href="" class={`${ activated === "contact"? "bg-sky-500 text-white":"text-gray-900 hover:bg-gray-100 hover:text-slate-900"} block  rounded-md px-3 py-2 text-base font-medium`}>Privacy & Security</Link>
      <Link href="" class={`${ activated === "contact"? "bg-sky-500 text-white":"text-gray-900 hover:bg-gray-100 hover:text-slate-900"} block  rounded-md px-3 py-2 text-base font-medium`}>Settings</Link>
      <Link href="" class="text-red-500 hover:bg-sky-100 hover:text-slate-900 block rounded-md px-3 py-2 text-base font-medium" onClick={()=>logout()}>Log out</Link>
     </div>
   </div>
</nav>

<aside id="logo-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0  " aria-label="Sidebar">
   
   <div className="h-full px-3 pb-4 overflow-y-auto bg-white ">
      <ul className="space-y-2 font-medium">
         <li>
            <Link href="/user/dashboard" className="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100  group">
               <svg className="w-5 h-5 text-gray-500 transition duration-75  group-hover:text-gray-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                  <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z"/>
                  <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z"/>
               </svg>
               <span className="ms-3">Dashboard</span>
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
            <Link href="/user/savings" className="flex items-center p-2  p-2 text-white rounded-lg  hover:bg-gray-700 bg-sky-500 group">
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
            <Link href="/user/activity " className="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100  group">
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

<div className="p-4 sm:ml-64 lg:w-[75%] lg:items-center lg:flex lg:justify-center  ">
   <div className="p-4  rounded-lg  mt-14 ">
   <div className='text-slate-600 py-5 font-semibold text-2xl'>
    Savings
</div>
      <div className="gap-4 mb-4  ">
        {/* First Part */}
         <div className=" border border-dashed border-slate-500 flex items-start justify-start h-24 rounded rounded-xl bg-green-100 p-5 text-slate-100 lg:w-full">
            <div className='flex f gap-2 text-center w-full items-center justify-between'>
                <div className='flex flex-col items-start gap-2  justify-start '>
                    <div className='font-semibold text-slate-500'>
                        Total Asset
                    </div>
                   <div className='text-black text-4xl flex flex-col justify-start items-start font-bold'>        
                  $ 0.0
               </div>
 <div className='rounded rounded-xl cursor-pointer text-sm bg-slate-100 text-orange-700 p-1 px-3 border border-orange-700'>
                   Account not linked
                </div>
                </div>
               <div className='bg-sky-500 text-white p-3 px-5 rounded rounded-xl cursor-pointer'>
                Start Saving
               </div>
            </div>
            
         </div>
      </div>
      <div className='flex  items-center justify-center gap-5  lg:w-full'>
        {/*  */}
        <div className='flex justify-between w-full py-1 rounded rounded-xl bg-gray-100 p-5 font-semibold h-44 text-slate-600'>
        <div className='flex flex-col items-start  gap-2 cursor-pointer py-5'>
            <div className='text-xl'>
              CashBox
            </div>
            <div className='font-normal text-slate-400 '>
                 Flexible savings with up to <span className='text-sky-600'>30%p.a</span> daily interest.
            </div>
            <div className='text-white px-3 py-1 bg-sky-500 rounded-full'>
                save
            </div>
        </div>
        </div>
        {/*  */}
        <div className='flex justify-between w-full py-1 rounded rounded-xl bg-gray-100 p-5 font-semibold h-44 text-slate-600'>
        <div className='flex flex-col items-start  gap-2 cursor-pointer py-5'>
            <div className='text-xl'>
                Spend & Save
            </div>
            <div className='font-normal text-slate-400'>
                 Every Spend adds to your savings 
            </div>
            <div className='text-white px-3 py-1 bg-sky-500 rounded-full'>
                save
            </div>
        </div>
        </div>
      </div>

      {/* Target savinsg */}
      <div className='flex flex-col items-start justify-start rounded rounded-xl bg-gray-100 p-5  text-slate-600 gap-5 font-semibold mt-5 lg:w-full'>
        {/* intro */}

        <div className='flex flex-col gap-2 items-start'>
        <div className='text-xl '>
            Target Savings
        </div>
        <div className='text-slate-400 font-normal '>
           Save smarter, reach your goal faster!
        </div>
        </div>
        {/*  */}
        <div className='flex justify-center items-start  w-full cursor-pointer border py-3 rounded rounded-full'>
        <div className='flex items-center gap-2'>
            <div className='text-xl bg-sky-200 text-bg-sky-600 p-3 rounded rounded-full'><BsHouse /></div>
          <div>Accomodation </div>
        </div>
       
        </div>
        {/*  */}
        <div className='flex justify-center items-start  w-full cursor-pointer border py-3 rounded rounded-full'>
        <div className='flex items-center gap-2'>
            <div className='text-xl bg-sky-200 text-bg-sky-600 p-3 rounded rounded-full'><FaSchool /></div>
          <div>Education</div>
        </div>
       
        </div>
        {/*  */}
        <div className='flex justify-center items-start  w-full cursor-pointer border py-3 rounded rounded-full'>
        <div className='flex items-center gap-2'>
            <div className='text-xl bg-sky-200 text-bg-sky-600 p-3 rounded rounded-full'><IoBusiness /></div>
          <div>Business </div>
        </div>
       
        </div>
        {/*  */}
        <div className='flex justify-center items-start  w-full cursor-pointer border py-3 rounded rounded-full'>
        <div className='flex items-center  gap-2'>
            <div className='text-xl bg-sky-200 text-bg-sky-600 p-3 rounded rounded-full'><BsSend /></div>
          <div>Travel </div>
        </div>
       
        </div>

      </div>

      {/* Fixed savings */}
      <div className='flex flex-col items-start justify-start rounded rounded-xl bg-gray-100 p-5  text-slate-600 gap-5 font-semibold mt-5 lg:w-full'>
        {/* intro */}

        <div className='flex flex-col gap-2 items-start'>
        <div className='text-xl '>
            Fixed Savings
        </div>
        <div className='text-slate-400 font-normal '>
           Lock funds for emergencies and specific goals
        </div>
        </div>
        {/*  */}
        <div className='flex justify-center items-start  w-full cursor-pointer py-3 rounded rounded-full'>
        <div className='flex items-center justify-between gap-2 w-full'>
            {/* p.a % */}
            <div className='flex flex-col items-start'>
                <div className='text-lg'>
                    10%
                </div>
                <div className='font-normal text-[0.7rem] text-slate-500'>
                interest p.a.
                </div>
                </div>
                {/* days */}
                <div className='flex flex-col items-start'>
                <div className='text-lg'>
                    7 days
                </div>
                <div className='font-normal text-[0.7rem] text-slate-500'>
                Duration
                </div>
                </div>
          <div className='text-sky-800 px-3 py-1 bg-sky-300 rounded-full font-normal'>
                save
            </div>
        </div>
       
        </div>
        {/*  */}
        <div className='flex justify-center items-start  w-full cursor-pointer py-3 rounded rounded-full'>
        <div className='flex items-center justify-between gap-2 w-full'>
            {/* p.a % */}
            <div className='flex flex-col items-start'>
                <div className='text-lg'>
                    10%
                </div>
                <div className='font-normal text-[0.7rem] text-slate-500'>
                interest p.a.
                </div>
                </div>
                {/* days */}
                <div className='flex flex-col items-start'>
                <div className='text-lg'>
                    30 days
                </div>
                <div className='font-normal text-[0.7rem] text-slate-500'>
                Duration
                </div>
                </div>
          <div className='text-sky-800 px-3 py-1 bg-sky-300 rounded-full font-normal'>
                save
            </div>
        </div>
       
        </div>
        {/*  */}
        <div className='flex justify-center items-start  w-full cursor-pointer py-3 rounded rounded-full'>
        <div className='flex items-center justify-between gap-2 w-full'>
            {/* p.a % */}
            <div className='flex flex-col items-start'>
                <div className='text-lg'>
                    12%
                </div>
                <div className='font-normal text-[0.7rem] text-slate-500'>
                interest p.a.
                </div>
                </div>
                {/* days */}
                <div className='flex flex-col items-start'>
                <div className='text-lg'>
                    60 days
                </div>
                <div className='font-normal text-[0.7rem] text-slate-500'>
                Duration
                </div>
                </div>
          <div className='text-sky-800 px-3 py-1 bg-sky-300 rounded-full font-normal'>
                save
            </div>
        </div>
       
        </div>
        {/*  */}
        <div className='flex justify-center items-start  w-full cursor-pointer py-3 rounded rounded-full'>
        <div className='flex items-center justify-between gap-2 w-full'>
            {/* p.a % */}
            <div className='flex flex-col items-start'>
                <div className='text-lg'>
                    15%
                </div>
                <div className='font-normal text-[0.7rem] text-slate-500'>
                interest p.a.
                </div>
                </div>
                {/* days */}
                <div className='flex flex-col items-start'>
                <div className='text-lg'>
                    90 days
                </div>
                <div className='font-normal text-[0.7rem] text-slate-500'>
                Duration
                </div>
                </div>
          <div className='text-sky-800 px-3 py-1 bg-sky-300 rounded-full font-normal'>
                save
            </div>
        </div>
       
        </div>
        {/*  */}
        <div className='flex justify-center items-start  w-full cursor-pointer py-3 rounded rounded-full'>
        <div className='flex items-center justify-between gap-2 w-full'>
            {/* p.a % */}
            <div className='flex flex-col items-start'>
                <div className='text-lg'>
                    18%
                </div>
                <div className='font-normal text-[0.7rem] text-slate-500'>
                interest p.a.
                </div>
                </div>
                {/* days */}
                <div className='flex flex-col items-start'>
                <div className='text-lg'>
                    180 days
                </div>
                <div className='font-normal text-[0.7rem] text-slate-500'>
                Duration
                </div>
                </div>
          <div className='text-sky-800 px-3 py-1 bg-sky-300 rounded-full font-normal'>
                save
            </div>
        </div>
       
        </div>
        {/*  */}
        <div className='flex justify-center items-start  w-full cursor-pointer py-3 rounded rounded-full'>
        <div className='flex items-center justify-between gap-2 w-full'>
            {/* p.a % */}
            <div className='flex flex-col items-start'>
                <div className='text-lg'>
                    20%
                </div>
                <div className='font-normal text-[0.7rem] text-slate-500'>
                interest p.a.
                </div>
                </div>
                {/* days */}
                <div className='flex flex-col items-start'>
                <div className='text-lg'>
                    365 days
                </div>
                <div className='font-normal text-[0.7rem] text-slate-500'>
                Duration
                </div>
                </div>
          <div className='text-sky-800 px-3 py-1 bg-sky-300 rounded-full font-normal'>
                save
            </div>
        </div>
       
        </div>
       

      </div>
    
     
    
  
       
   </div>
</div>

</div>
        <main className=' flex justify-center items-center h-full w-full'>
       
        </main>
</div>
  )
}

export default Savings;