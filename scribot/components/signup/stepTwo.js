import React,{useEffect, useRef, useState} from 'react'
import ProgressBar from '../../progressBar/progress';
import {BiArrowBack} from 'react-icons/bi'
import {AiFillEyeInvisible,AiFillEye} from 'react-icons/ai'

function StepTwo({forward,backward,input,setInput,signUpFunc}) {
  const [passwordMatch,setPasswordMatch] = useState(null);
  const [changeCount,setChangeCount] = useState(0);
  const [ stepTwoProgress,setStepTwoProgress] = useState(0);
  const [isPasswordStrong,setIsPasswordStrong] = useState(null);
  const [visible, setVisible] = useState(false);
  const [visible2, setVisible2] = useState(false);

  const stepTwoRef = useRef(0);

  

  const handleOnChange = (e) => {
   setChangeCount(prev => prev+1);
   setVisible(false);
   setVisible2(false);
   
    return setInput(prev => ({...prev,[e.target.name]:e.target.value}))
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

  useEffect(
    ()=>{
 
      passwordMatch && isPasswordStrong && stepTwoRef.current.classList.add('display');
      !passwordMatch && isPasswordStrong && stepTwoRef.current.classList.remove('display');

      if(input.password && input.checkpassword && passwordMatch && isPasswordStrong){
        return setStepTwoProgress(100);
      }
      else{
        return setStepTwoProgress(50);
      }
    },[passwordMatch]
  )
  // function to toggle visiblity between passwords
  const toggleVisblility = ()=>{
    setVisible(prev => !prev)
  }
  const toggleVisblility2 = ()=>{
    setVisible2(prev => !prev)
  }

  return (
    <div className='flex flex-col gap-4'> 
    <button className='text-xl'  onClick={backward}>
      <BiArrowBack className='text-3xl border rounded bg-slate-100 p-1 dark:text-black' />
    </button >

    <span className='text-indigo-500 dark:text-indigo-400 text-sm w-80 font-bold my-2'>
      Note: <span className='text-indigo-500 dark:text-indigo-400'> Password must be more than 12 characters long,
      be a combination of uppercase letters, lowercase letters, numbers and symbols.</span>
    </span>


    <div>
<label for="password" className="text-sm dark:text-white py-1">
  <div>

    Password:{isPasswordStrong === false?  <span className='text-red-500'> Weak</span>:<span className='text-green-600 dark:text-green-400'> Strong</span>}</div> 
   
    </label> 
    <div className='bg-white p-3 border w-80 rounded text-slate-900 flex justify-between'>
       <input type={`${visible? "text" : "password"}`} name="password"  className="outline-none  w-80 bg-white" id="password" placeholder="Password" value={input.password} onChange={handleOnChange} /> 
        <button className='pointer' onClick={()=>{toggleVisblility()}}>
     {visible? <AiFillEyeInvisible className='text-xl'> </AiFillEyeInvisible>: <AiFillEye className='text-xl' />}
    </button>
    </div>
 
</div>
{/* check password input */}
<div>
<label for="confirmPassword" className="text-sm dark:text-white py-1">
  <div>
    Confirm password:{passwordMatch === false && <span className='text-red-500 text-sm'> Passwords doesn&apos;t match</span>}
  </div>
 
   </label>
   <div className='bg-white p-3 border w-80 rounded text-slate-900 flex justify-between '>
    <input type={`${visible2? "text" : "password"}`} name="checkpassword"  className="outline-none bg-white w-80" id="confirmPassword" placeholder="Confirm Password" value={input.checkpassword} onChange={handleOnChange}/> 
     <button className='pointer' onClick={()=>{toggleVisblility2()}}>
     {visible2? <AiFillEyeInvisible className='text-xl'> </AiFillEyeInvisible>: <AiFillEye className='text-xl' />}
    </button>
   </div>
  
</div>
<div className='text-end text-indigo-500'>
  {/* progress */}
<ProgressBar progressPercentage={stepTwoProgress} />
<span className='ml-5 text-indigo-600 bg-slate-200 border rounded-full p-1'>2/2</span> 
</div>


  
   {/* <button ref={stepTwoRef} className='p-3 rounded w-80 text-center font-semibold text-white border animate__animated animate__pulse bg-indigo-500 hidden' onClick={()=> passwordMatch && forward() && isPasswordStrong}>
    Next
   </button> */}

   <button ref={stepTwoRef} className='p-3 rounded w-80 text-center font-semibold text-white animate__animated animate__pulse bg-indigo-500 hidden' onClick={(e)=>{
    return passwordMatch && isPasswordStrong && signUpFunc(e)} 
    } >
   Sign up
   </button>





</div>
  )
}

export default StepTwo;