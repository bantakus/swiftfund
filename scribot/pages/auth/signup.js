import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import axios from 'axios';
import Link from 'next/link';
import Head from 'next/head';
import { instance,baseURL } from '../api';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

function Signup() {
    
  const router = useRouter()
  const [input,setInput] = useState({email:"",password:"",checkpassword:""});
  const [ischecked,setChecked] = useState(false);
  const [emailLegit,setEmailLegit] = useState(null);
  const [changeCount,setChangeCount] = useState(0);
  const [passwordMatch,setPasswordMatch] = useState(null);
  const [isPasswordStrong,setIsPasswordStrong] = useState(null);
  const [visible, setVisible] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [error,setError] = useState("");

const handleChecked = (e)=>{
    setChecked(e.target.checked)
    setChangeCount(prev => prev+1);
};
const handleChange = (e)=>{
    setInput(prev =>({...prev,
    [e.target.name]:e.target.value}))
    setChangeCount(prev => prev+1);
    setVisible(false);
    setVisible2(false);
}
// Check if email format is legit 
const emailLegitCheck = () => {
  if(!input.email){
    return setEmailLegit(null);
  }
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input.email))
{
  return setEmailLegit(true)
}
  return setEmailLegit(false)
}

// function to check password matching
const checkClientsPassword = () => {


  if(input.password && input.checkpassword && input.password !== input.checkpassword){
  return setPasswordMatch(() => false)
}
else if( input.password && input.password === input.checkpassword){
  return setPasswordMatch(() => true)
}
else{
  return setPasswordMatch(() => null)
}

}

 // function to check if a password is strong
 const pStrength = () => {

  let strongPassword = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})');

  if (strongPassword.test(input.password)){
    return setIsPasswordStrong(true);
  }
  else{
    return setIsPasswordStrong(false);
  }
}

// function depending on the changes made in the form
useEffect(
  ()=>{
    checkClientsPassword();
    pStrength();

   

  },[changeCount]
)



// function to toggle visiblity between passwords
const toggleVisblility = ()=>{
  setVisible(prev => !prev)
}
const toggleVisblility2 = ()=>{
  setVisible2(prev => !prev)
}

useEffect(
  ()=>{
    emailLegitCheck();
  },[changeCount]
)
// useEffect(() => {
//   axio.get(api).then((response) => {
//     setCoins(response.data)
//   }).catch((error) => {
//     console.log(error)
//   })
// }, []);


function handleSubmit(e){
    e.preventDefault();
    if(input.email && emailLegit &&input.password && input.checkpassword && passwordMatch && isPasswordStrong&& ischecked){
    axios.post(`${baseURL}/users/register`,{email:input.email,password:input.password}).then(res =>{
        let data = res.data;
        Cookies.set('__id',data._id,{expires:7})
        Cookies.set('token',data.token,{expires:7})
       
        router.replace("/user/loan/apply")
        alert("Account Created Successfully")
        }
        ).catch(err =>  {
          setError(err.message)
          console.log(err)
        })
    }

};

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
        <main className=' flex justify-center items-center h-full w-full '>
      <div className='w-full hidden lg:flex h-full relative items-center justify-center'>
        <Image src={"/static/auth.jpg"} height={1000} width={1000} className='w-full h-full'/>
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
                 Register
              </h1>
              <form className="space-y-4 md:space-y-6 "onSubmit={handleSubmit} action="#">
              <div className='text-red-500'> {error && error } </div>
                  <div>
                      <label for="email" className="block mb-2 text-sm font-medium text-gray-900 ">Your email: {emailLegit === false && <span className='text-red-500 text-sm px-1'>Invalid Email format !</span>}</label>
                      <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="name@email.com" required="true" value={input.email} onChange={handleChange}/>
                  </div>
                  <div>
                      <label for="password" className="block mb-2 text-sm font-medium text-gray-900 ">Password: {isPasswordStrong === false?  <span className='text-red-500 px-1'> Weak</span>:<span className='text-green-600 dark:text-green-400 px-1'> Strong</span>}</label>
                      <div className='bg-white rounded text-slate-900 flex justify-between border rounded rounded-lg w-full pr-5'>
                      <input type={`${visible2? "text" : "password"}`}  name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 border-0 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required="true" value={input.password} onChange={handleChange} />
                      <button className='pointer px-2' onClick={()=>{toggleVisblility2()}}>
     {visible2? <AiFillEyeInvisible className='text-xl'> </AiFillEyeInvisible>: <AiFillEye className='text-xl' />}
    </button>
                      </div>
                  </div>
                  <div>
                      <label for="confirm-password" className="block mb-2 text-sm font-medium text-gray-900 ">Confirm password: {passwordMatch === false && <span className='text-red-500 text-sm px-1'> Passwords doesn&apos;t match</span>}</label>
                      <div className='bg-white  rounded text-slate-900 flex justify-between rounded rounded-lg border w-full pr-5'>
                      <input type={`${visible? "text" : "password"}`} name="checkpassword" id="confirm-password" placeholder="••••••••" className="bg-gray-50  border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5   " required="true" value={input.checkpassword} onChange={handleChange}  />
                      <button className='pointer px-2' onClick={()=>{toggleVisblility()}}>
     {visible? <AiFillEyeInvisible className='text-xl'> </AiFillEyeInvisible>: <AiFillEye className='text-xl' />}
    </button>
                  </div>
                  </div>
                  <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input id="terms" aria-describedby="terms" type="checkbox" name='tc' className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300  " required="true"  checked={ischecked} onChange={handleChecked} />
                      </div>
                      <div className="ml-3 text-sm">
                      <label for="terms" className="font-light text-gray-500 ">I accept the <Link className="font-medium text-primary-600 hover:underline " href="/terms-and-condition" >Terms and Conditions</Link></label>
                      </div>
                  </div>
                  <button type="submit" className="w-full text-white bg-sky-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center" >Create an account</button>
                  <p className="text-sm font-light text-gray-500 ">
                      Already have an account? <Link href="/auth/login" className="font-medium text-sky-600 hover:underline ">Login here</Link>
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