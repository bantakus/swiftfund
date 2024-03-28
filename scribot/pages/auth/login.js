import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import axios from 'axios';
import Link from 'next/link';
import Head from 'next/head';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { baseURL } from '../api';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';

function Login() {

  const [input, set_input] = useState({email:"",password:""});
  const [changeCount,setChangeCount] = useState(0);
  const [ischecked,setChecked] = useState(false);
  const [error,setError] = useState("");

  const router = useRouter();

  const handleChecked = (e)=>{
    setChecked(e.target.checked)
    setChangeCount(prev => prev+1);
};


function handleSubmit(e){
  e.preventDefault();
  if(input.email  && input.password &&ischecked){
  axios.post(`${baseURL}/users/login`,{email:input.email,password:input.password}).then(res =>{
      let data = res.data;
      Cookies.set('__id',data.id,{expires:7})
      Cookies.set('token',data.token,{expires:7})
      alert("Logged-in Successfully")
      if(true){
        router.replace("/user/dashboard")
      }
      else{
        router.replace("/user/loan/apply")
      }
     
      }
      ).catch(err => {
        setError(err.message)
        console.log(err)
      })
  }

};

const handleChange = (e)=>{
  set_input(prev =>({...prev,
  [e.target.name]:e.target.value}))
  setChangeCount(prev => prev+1);
  setVisible(false);
  
}

const [visible, setVisible] = useState(false);

// toggle visibilty
  const toggleVisblility = ()=>{
    setVisible(prev => !prev)
  }
  return (
    <div className='bg-white h-screen overflow-hidden'>
 <Head>

{/* title */}
<title>Login</title>
{/* meta tags */}
<meta name="description" content=" Welcome to Swiftfund, where your financial goals meet possibility! Get ready to embark on a seamless journey towards your dreams with our hassle-free lending solutions. Whether you're looking to fund your next big project, consolidate debt, or seize a lucrative opportunity, we've got you covered. Explore our range of flexible loan options tailored to fit your needs, backed by competitive rates and expert guidance. Say goodbye to financial barriers and hello to a brighter future with SwiftFund. Start your application today and let's make your aspirations a reality!" />

{/* header links */}
<link rel="icon" href="./static/logo.ico" />
</Head>
        <main className=' flex justify-center items-center h-full w-full'>
        <div className='w-full hidden lg:flex h-full relative items-center justify-center'>
        <Image src={"/static/auth.jpg"} height={1000} width={1000} alt='' className='w-full h-full'/>
        <div className='absolute text-white font-semibold text-3xl px-5 '>
       Where your financial dream comes to life ...
        </div>
      </div>
      {/* form */}
        <div className='w-full h-full bg-slate-100 '>
        <section className="p-5 ">
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-700 ">
          <img className="w-8 h-8 mr-2" src="/static/logo.png" alt="logo" />
          Swiftfund   
      </a>
      <div className="w-full bg-white rounded-lg shadow  md:mt-0 sm:max-w-md pr-5 ">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                Login
              </h1>
              <form className="space-y-4 md:space-y-6" action="#" onSubmit={handleSubmit}>
               <div className='text-red-500'> {error && error }</div>
                  <div>
                      <label for="email" className="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
                      <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="name@email.com" required=" " onChange={handleChange} />
                  </div>
              
                  <div className='w-full'>
                      <label for="password" className="block mb-2 text-sm font-medium text-gray-900 ">Password: </label>
                      <div className='bg-white rounded text-slate-900 flex justify-between border rounded rounded-lg w-full pr-5'>
                      <input type={`${visible? "text" : "password"}`}  name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 border-0 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required="true" value={input.password} onChange={handleChange} />
                      <button className='pointer px-2' onClick={()=>{toggleVisblility()}}>
     {visible? <AiFillEyeInvisible className='text-xl'> </AiFillEyeInvisible>: <AiFillEye className='text-xl' />}
    </button>

                      </div>
                  </div>
                  <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300  " required="true" checked={ischecked} onChange={handleChecked} />
                      </div>
                      <div className="ml-3 text-sm">
                        <label for="terms" className="font-light text-gray-500 ">I accept the <Link className="font-medium text-primary-600 hover:underline " href="/terms-and-condition" >Terms and Conditions</Link></label>
                      </div>
                  </div>
                  <button type="submit" className="w-full text-white bg-sky-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Login</button>
                  <p className="text-sm font-light text-gray-500 ">
                      Don&apos;t have an account? <Link href="/auth/signup" className="font-medium text-sky-600 hover:underline ">Register here</Link>
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

export default Login;