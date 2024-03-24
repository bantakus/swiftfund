
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import {FaBars,FaSearch,FaUserCircle} from "react-icons/fa"
import Image from "next/image";
import { FaHamburger } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { BsC } from "react-icons/bs";
import { GiCancel,GiHamburgerMenu } from "react-icons/gi";
import Link from "next/link"

// This navigation bar is for the landing page of the app

function Horizontal_nav({activated}){
    
  const [nav,setnav] = useState(false);
  const [show,setShow] = useState(false);

  function toggle_nav(){
    return setShow(!show);

  }
function open(){
setnav(true)
}
function close(){
setnav(false)
}
const router = useRouter();
   
  return (
   <nav class="bg-white">
   <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
     <div class="relative flex h-16 items-center justify-between">
       <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
        
         <button type="button" onClick={()=>toggle_nav()} class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
           <span class="absolute -inset-0.5"></span>
           <span class="sr-only">Open main menu</span>
         
           <svg class="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
             <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
           </svg>
       
           <svg class="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
             <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
           </svg>
         </button>
       </div>
       <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
         <div class="flex flex-shrink-0 items-center">
           <img class="h-8 w-auto" src="/static/logo.png" alt="Swiftfund" />
         </div>
         <div class="hidden sm:ml-6 sm:block">
           <div class="flex space-x-4">
            
             <Link href="/" class={`${ activated === "home"? "bg-sky-500 text-white":"text-gray-900 hover:bg-gray-100 hover:text-slate-900"}  rounded-md px-3 py-2 text-sm font-medium`} aria-current="page">Home</Link>
             <Link href="/about" class={`${ activated === "about"? "bg-sky-500 text-white":"text-gray-900 hover:bg-gray-100 hover:text-slate-900"}  rounded-md px-3 py-2 text-sm font-medium`}>About</Link>
             <Link href="#faqs" class={`${ activated === "faqs"? "bg-sky-500 text-white":"text-gray-900 hover:bg-gray-100 hover:text-slate-900"}  rounded-md px-3 py-2 text-sm font-medium`}>FAQS</Link>
             <Link href="/services" class={`${ activated === "services"? "bg-sky-500 text-white":"text-gray-900 hover:bg-gray-100 hover:text-slate-900"}  rounded-md px-3 py-2 text-sm font-medium`}>Services</Link>
             <Link href="" class={`${ activated === "blog"? "bg-sky-500 text-white":"text-gray-900 hover:bg-gray-100 hover:text-slate-900"}  rounded-md px-3 py-2 text-sm font-medium`}>Blog</Link>
             <Link href="" class={`${ activated === "contact"? "bg-sky-500 text-white":"text-gray-900 hover:bg-gray-100 hover:text-slate-900"}  rounded-md px-3 py-2 text-sm font-medium`}>Contact</Link>
             {/* <Link href="/calculator" class={`${ activated === "calculator"? "bg-sky-500 text-white":"text-gray-900 hover:bg-gray-100 hover:text-slate-900"}  rounded-md px-3 py-2 text-sm font-medium`}>Loan Calculator</Link> */}
             <Link href="/login" class={`text-gray-900 hover:bg-sky-100 hover:text-slate-900 rounded-md px-3 py-2 text-sm font-medium"`}>Login</Link>
           </div>
         </div>
       </div>
       <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
         <div class="relative ml-3">
           <div className="flex gap-3 items-center justify-center">
           <Link href="signup" class="bg-sky-500 text-white rounded-md px-8 py-3 text-sm font-medium" aria-current="page">SignUp</Link>
           {/* <a href="#" class="text-slate-900 hover:bg-gray-100 rounded-md px-8 py-3 text-sm font-medium" aria-current="page">LogIn</a> */}
           </div>
         </div>
       </div>
     </div>
   </div>
 

 {/* The mobile view */}
   
   <div class={`sm:hidden ${show? "sm:flex flex-col":"sm:hidden hidden"}`} id="mobile-menu">
     <div class="space-y-1 px-2 pb-3 pt-2">
    
     
     <Link href="/" class={`${ activated === "home"? "bg-sky-500 text-white":"text-gray-900 hover:bg-gray-100 hover:text-slate-900"}  block rounded-md px-3 py-2 text-base font-medium`} aria-current="page">Home</Link>
      <Link href="/about" class={`${ activated === "about"? "bg-sky-500 text-white":"text-gray-900 hover:bg-gray-100 hover:text-slate-900"} block rounded-md px-3 py-2 text-base font-medium`}>About</Link>
      <Link href="#faqs" class={`${ activated === "faqs"? "bg-sky-500 text-white":"text-gray-900 hover:bg-gray-100 hover:text-slate-900"} block rounded-md px-3 py-2 text-base font-medium`}>FAQS</Link>
      <Link href="/services" class={`${ activated === "services"? "bg-sky-500 text-white":"text-gray-900 hover:bg-gray-100 hover:text-slate-900"} block rounded-md px-3 py-2 text-base font-medium`}>Services</Link>
      {/* <Link href="/calculator" class={`${ activated === "calculator"? "bg-sky-500 text-white":"text-gray-900 hover:bg-gray-100 hover:text-slate-900"} block rounded-md px-3 py-2 text-base font-medium`}>Loan Calculator</Link> */}
      <Link href="" class={`${ activated === "blog"? "bg-sky-500 text-white":"text-gray-900 hover:bg-gray-100 hover:text-slate-900"} block rounded-md px-3 py-2 text-base font-medium`}>Blog</Link>
      <Link href="" class={`${ activated === "contact"? "bg-sky-500 text-white":"text-gray-900 hover:bg-gray-100 hover:text-slate-900"} block  rounded-md px-3 py-2 text-base font-medium`}>Contact</Link>
      <Link href="/login" class="text-gray-900 hover:bg-sky-100 hover:text-slate-900 block rounded-md px-3 py-2 text-base font-medium">Login</Link>
     </div>
   </div>
 </nav>
 
  )
}

export default Horizontal_nav;