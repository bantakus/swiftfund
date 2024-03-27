import React, { useRef, useState, useEffect } from 'react'
import ProgressBar from '../../progressBar/progress';

function StepOne({forward,input,setInput}) {


  const [changeCount,setChangeCount] = useState(0);
  const [stepOneProgress,setStepOneProgress] = useState(0);
  const [emailLegit,setEmailLegit] = useState(null);
  



  const handleOnChange = (e) => {
    setChangeCount(prev => prev+1);
    return setInput(prev => ({...prev,[e.target.name]:e.target.value}))
  }
  const stepOneRef = useRef(0);

  const isFilled = () => {
    if(input.email && input.fullname && input.username && emailLegit){
      return true;
    }
    else{
      return false;
    }
  }
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
 
  // function depending on the changes made in the form
  useEffect(
    ()=>{
      emailLegitCheck();
      
      isFilled() && stepOneRef.current.classList.add('display');
      !isFilled() && stepOneRef.current.classList.remove('display');

      if(input.email && input.fullname && input.username && emailLegit){
        return setStepOneProgress(50);
      }
      else{
        return setStepOneProgress(0);
      }


      
    },[changeCount]
  )




  return (
    <div className='flex flex-col gap-5 mt-7'> 
        <div>
    <label for="Email" className="text-sm dark:text-white py-1">Email: {emailLegit === false && <span className='text-red-500'>Invalid Email format</span>}</label> <br />
      <input type="email" name="email"  className="bg-white p-3 border w-80 rounded outline-none text-slate-900 " id="email" placeholder="Email" value={input.email} onChange={handleOnChange} required /> 
  </div>
  <div>
    <label for="fullname" className="text-sm dark:text-white py-1">Full Name:</label> <br />
      <input type="text" name="fullname"  className="bg-white p-3 border w-80 rounded text-slate-900 outline-none" id="fullname" placeholder="Full Name" value={input.fullname} onChange={handleOnChange} required /> 
  </div>
  <div>
    <label for="username" className="text-sm dark:text-white">Username:</label> <br />
      <input type="text" name="username"  className="bg-white p-3 border w-80 rounded text-slate-900 outline-none" id="username" placeholder="e.g becky080" value={input.username} onChange={handleOnChange} required /> 
  </div>

    {/* progress */}
    <div className='text-end'>
       <ProgressBar progressPercentage={stepOneProgress} />
       <span className='text-indigo-600 bg-slate-200 border rounded-full p-1'>1/2</span>
    </div>
   <button className='p-3 bg-indigo-500  rounded w-full text-center font-semibold  border text-white hidden animate__animated animate__pulse ' ref={stepOneRef} onClick={()=>{
    input.email && input.fullname && input.username && forward()
    }}>
    Next
   </button>

</div>
  )
}

export default StepOne;