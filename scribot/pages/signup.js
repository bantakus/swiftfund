import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import axios from 'axios';
import Link from 'next/link';
import Head from 'next/head';


function Signup() {
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
    <div className='bg-white h-screen overflow-hidden'>

<Head>

{/* title */}
<title>Signup</title>
{/* meta tags */}
<meta name="description" content=" Welcome to Swiftfund, where your financial goals meet possibility! Get ready to embark on a seamless journey towards your dreams with our hassle-free lending solutions. Whether you're looking to fund your next big project, consolidate debt, or seize a lucrative opportunity, we've got you covered. Explore our range of flexible loan options tailored to fit your needs, backed by competitive rates and expert guidance. Say goodbye to financial barriers and hello to a brighter future with SwiftFund. Start your application today and let's make your aspirations a reality!" />

{/* header links */}
<link rel="icon" href="./static/logo.ico" />
</Head>
        <main className=' flex justify-center items-center h-full w-full'>
      <div className='w-full hidden lg:flex h-full relative items-center justify-center'>
        <Image src={"/static/auth.jpg"} height={1000} width={1000} className='w-full h-full'/>
        <div className='absolute text-white font-semibold text-3xl px-5 '>
       Where your financial dream comes to life ...
        </div>
      </div>
      {/* form */}
        <div className='w-full h-full bg-slate-100 '>
        <section class="p-5 ">
  <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-700 ">
          <img class="w-8 h-8 mr-2" src="/static/logo.png" alt="logo" />
          Swiftfund   
      </a>
      <div class="w-full bg-white rounded-lg shadow  md:mt-0 sm:max-w-md pr-5 ">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                 Register
              </h1>
              <form class="space-y-4 md:space-y-6" action="#">
                  <div>
                      <label for="email" class="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
                      <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5   " placeholder="name@email.com" required=" " />
                  </div>
                  <div>
                      <label for="password" class="block mb-2 text-sm font-medium text-gray-900 ">Password</label>
                      <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5   " required="" />
                  </div>
                  <div>
                      <label for="confirm-password" class="block mb-2 text-sm font-medium text-gray-900 ">Confirm password</label>
                      <input type="confirm-password" name="confirm-password" id="confirm-password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5   " required="" />
                  </div>
                  <div class="flex items-start">
                      <div class="flex items-center h-5">
                        <input id="terms" aria-describedby="terms" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300  " required="" />
                      </div>
                      <div class="ml-3 text-sm">
                      <label for="terms" class="font-light text-gray-500 ">I accept the <Link class="font-medium text-primary-600 hover:underline " href="/terms-and-condition" >Terms and Conditions</Link></label>
                      </div>
                  </div>
                  <button type="submit" class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  dark:hover:bg-primary-700 dark:focus:ring-primary-800">Create an account</button>
                  <p class="text-sm font-light text-gray-500 ">
                      Already have an account? <Link href="/login" class="font-medium text-sky-600 hover:underline ">Login here</Link>
                  </p>
              </form>
          </div>
      </div>
  </div>
</section>
        </div>
        </main>
</div>
  )
}

export default Signup;