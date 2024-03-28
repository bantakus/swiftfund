import React, { useEffect, useState,useContext } from 'react'
import Image from 'next/image';
import axios from 'axios';
import Link from 'next/link';
import Head from 'next/head';
import Sidebar from '@/components/navbar/sidebar';

import Cookies from 'js-cookie';
import { useRouter } from 'next/router';

import { AppContext } from '@/components/context';
import { baseURL } from '@/pages/api';


function Dashboard() {
    
   const {user,setUser} = useContext(AppContext);
    const router = useRouter();
   





useEffect(() => {

  const id = Cookies.get("__id");
  const token = Cookies.get("token")
    if(id && token){
  axios.get(`${baseURL}/users/`+id,{headers:{Authorizatioin:"Bearer "+token}}).then(res => {

  setUser(res.data)
  
  }).catch(err => console.log(err));
    }
    else{
      router.replace("/auth/login")
    }
  
  return
}, []);

  return (
    <div className='bg-white min-h-screen overflow-hidden'>
 <Head>

{/* title */}
<title>Dashboard</title>
{/* meta tags */}
<meta name="description" content=" Welcome to Swiftfund, where your financial goals meet possibility! Get ready to embark on a seamless journey towards your dreams with our hassle-free lending solutions. Whether you're looking to fund your next big project, consolidate debt, or seize a lucrative opportunity, we've got you covered. Explore our range of flexible loan options tailored to fit your needs, backed by competitive rates and expert guidance. Say goodbye to financial barriers and hello to a brighter future with SwiftFund. Start your application today and let's make your aspirations a reality!" />

{/* header links */}
<link rel="icon" href="./static/logo.ico" />
</Head>
<Sidebar data={user.user} setData={setUser} />
        <main className=' flex justify-center items-center h-full w-full'>
       
        </main>
</div>
  )
}

export default Dashboard