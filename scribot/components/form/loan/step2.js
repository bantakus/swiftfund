import React, { useEffect, useState,useRef } from 'react'
import ProgressBar from '@/components/progressBar/progress';

function StepTwo({forward,input,backward,setInput}) {
    

  // The Individual states
  const [changeCount,setChangeCount] = useState(0);
  const [stepTwoProgress,setStepTwoProgress] = useState(35);
 


  // functions
  const handleOnChange = (e) => {
    setChangeCount(prev => prev+1);
    return setInput(prev => ({...prev,[e.target.name]:e.target.value}))
  }
  const stepTwoRef = useRef(0);

  const isFilled = () => {
    if(input.city && input.phone && input.dob && input.state && input.gender){
      return true;
    }
    else{
      return false;
    }
  }

  // function depending on the changes made in the form
  useEffect(
    ()=>{
      
      
      isFilled() && stepTwoRef.current.classList.add('display');
      !isFilled() && stepTwoRef.current.classList.remove('display');

      if(input.city && input.phone && input.dob && input.state && input.gender){
        return setStepTwoProgress(55);
      }
      else{
        return setStepTwoProgress(35);
      }


      
    },[changeCount]
  )



  return (
    <div className='max-w-[40rem] z-[9999999] flex flex-col items-center justify-center mt-5 '>
   

   {/* The Form  */}
<div className='text-red-500 px-2 bg-white rounded rounded-lg  flex flex-col items-center justify-center w-96  py-16'>
  {/* INTRO text */}
        <div className='text-2xl font-semibold text-sky-700 py-2'>
       Getting Started
        </div>
   <p className='text-slate-700 pb-5'>Fill correctly.</p>
{/*  */}
    <div className=" px-3 mb-4 md:mb-0 mt-5 flex items-center justify-center gap-6">
      <label className="block uppercase tracking-wide text-slate-800 text-xs font-bold text-start" for="grid-first-name">
       Gender:
      </label>
      <select name="gender" onChange={handleOnChange} value={input.gender}  className='bg-slate-100 text-slate-800 p-3 border border-black'>
    <option value="">Please select one…</option>
    <option value="female">Female</option>
    <option value="male">Male</option>
    <option value="non-binary">Non-Binary</option>
    <option value="other">Other</option>
    <option value="Prefer not to answer">Prefer not to Answer</option>
  </select>
    </div>
{/*  */}
<div className="  px-3 mb-4 md:mb-0 mt-5">
      <label className="block uppercase tracking-wide text-slate-800 text-xs font-bold mb-2 text-start" for="grid-first-name">
       Phone Number:
      </label>
      <input className={`appearance-none block  bg-white text-slate-800 ${true? "border border-slate-500": "border border-red-500"} rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white `} id="grid-first-name" type="tel" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" placeholder="+6144730213" name="phone" value={input.phone} onChange={handleOnChange} />
    </div>
{/*  */}
<div className="  px-3 mb-4 md:mb-0 ">
      <label className="block uppercase tracking-wide text-slate-800 text-xs font-bold mb-2 text-start" for="grid-first-name">
       Date of Birth:
      </label>
      <input className={`appearance-none block  bg-white text-slate-800 ${true? "border border-slate-500": "border border-red-500"} rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white px-12`} id="grid-first-name" type="date" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" placeholder="Gloria" name="dob" value={input.dob} onChange={handleOnChange} />
    </div>

    {/*  */}
    <div className='flex flex-col gap-3 items-center justify-center'>

       <div className="  px-3 mb-4 md:mb-0">
      <label className="block uppercase tracking-wide text-slate-800 text-xs font-bold mb-2 text-start" for="grid-first-name">
       State:
      </label>
      <input className={`appearance-none block  bg-white text-slate-800 ${true? "border border-slate-500": "border border-red-500"} rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white `} id="grid-first-name" type="text" placeholder="New South Wales" name="state" value={input.state} onChange={handleOnChange} />
    </div>
       <div className="  px-3 mb-4 md:mb-0">
      <label className="block uppercase tracking-wide text-slate-800 text-xs font-bold mb-2 text-start" for="grid-first-name">
       city:
      </label>
      <input className={`appearance-none block  bg-white text-slate-800 ${true? "border border-slate-500": "border border-red-500"} rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white `} id="grid-first-name" type="text" placeholder="Sydney" name="city" value={input.city} onChange={handleOnChange} />
    </div>
 {/* subtext */}
 <p className='text-slate-300 p-5 font-bold text-xs text-slate-600 bottom-0 '>All your data are kept safe & private.</p>
    </div>
   

</div>
 {/* progress */}
 <div className='text-end  w-full'>
       <ProgressBar progressPercentage={stepTwoProgress} />
       <span className='text-sky-800 bg-sky-200 border rounded-full p-1'>2/5</span>
    </div>

<div className='hidden lg:display flex justify-between items-center w-56 w-full'>


   {/* button */}
    <button className='p-3  mt-3 bg-slate-400  rounded w-96 text-center font-semibold  border border-slate-800 text-white  animate__animated animate__pulse ' onClick={()=>{
    input.firstname && input.lastname && backward()
    }}>
   Previous
   </button>
   {/* button */}
    <button className='p-3 mt-3 lg:display bg-slate-400  rounded w-96 text-center font-semibold  border border-slate-800 text-white hidden animate__animated animate__pulse ' ref={stepTwoRef} onClick={()=>{
    input.firstname && input.lastname && forward()
    }}>
    Next
   </button>
</div>
<div className='lh:hidden  flex flex-col justify-between items-center w-56 w-full'>


 {/* button */}
    <button className='p-3 mt-3 lg:display bg-slate-500  rounded w-96 text-center font-semibold  border border-slate-800 text-white hidden animate__animated animate__pulse ' ref={stepTwoRef} onClick={()=>{
    input.firstname && input.lastname && forward()
    }}>
    Next
   </button>
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

export default StepTwo;