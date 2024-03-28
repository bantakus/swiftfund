import React, { useEffect, useState,useRef } from 'react'
import ProgressBar from '@/components/progressBar/progress';

function StepOne({forward,input,setInput}) {
    

  // The Individual states
  const [changeCount,setChangeCount] = useState(0);
  const [stepOneProgress,setStepOneProgress] = useState(0);
 


  // functions
  const handleOnChange = (e) => {
    setChangeCount(prev => prev+1);
    return setInput(prev => ({...prev,[e.target.name]:e.target.value}))
  }
  const stepOneRef = useRef(0);

  const isFilled = () => {
    if(input.firstname && input.lastname){
      return true;
    }
    else{
      return false;
    }
  }

  // function depending on the changes made in the form
  useEffect(
    ()=>{
      
      
      isFilled() && stepOneRef.current.classList.add('display');
      !isFilled() && stepOneRef.current.classList.remove('display');

      if(input.firstname && input.lastname){
        return setStepOneProgress(35);
      }
      else{
        return setStepOneProgress(0);
      }


      
    },[changeCount]
  )



  return (
    <div className='max-w-[40rem] z-[9999999] flex flex-col items-center justify-center mt-5'>
   

   {/* The Form  */}
<div className='text-red-500  bg-white rounded rounded-lg  flex flex-col items-center justify-center w-96  py-16'>
  {/* INTRO text */}
        <div className='text-2xl font-semibold text-sky-700 py-2'>
        Let&apos;s Get to Know You
        </div>

        {/* subtext */}
        <p className='text-slate-700 pb-5'>What is your Name?</p>

   <form className="mt-8">
  <div className="relative flex w-full flex-col  gap-2 items-center justify-center">
    <div className=" px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-slate-800 text-xs font-bold mb-2 text-start" for="grid-first-name">
       Firstname:
      </label>
      <input className={`appearance-none block  bg-white text-slate-800  ${true? "border border-slate-500": "border border-red-500"} rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`} id="grid-first-name" type="text" placeholder="Jane" name='firstname' value={input.firstname} onChange={handleOnChange}/>
      {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
    </div>
 
    <div className="  px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-slate-800 text-xs font-bold mb-2 text-start" for="grid-first-name">
       Lastname:
      </label>
      <input className={`appearance-none block  bg-white text-slate-800 ${true? "border border-slate-500": "border border-red-500"} rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`} id="grid-first-name" type="text" placeholder="Gloria" name="lastname" value={input.lastname} onChange={handleOnChange} />
      {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
    </div>
    {/* subtext */}
    <p className='text-slate-300 p-5 font-bold text-xs text-slate-600 bottom-0 '>All your data are kept safe & private.</p>
  </div>
 
</form>
 
</div>
 {/* progress */}
 <div className='text-end  w-full'>
       <ProgressBar progressPercentage={stepOneProgress} />
       <span className='text-sky-800 bg-sky-200 border rounded-full p-1'>1/5</span>
    </div>


    {/* button */}
    <button className='p-3 mt-3 bg-slate-400  rounded w-96 text-center font-semibold  border border-slate-800 text-white hidden animate__animated animate__pulse ' ref={stepOneRef} onClick={()=>{
    input.firstname && input.lastname && forward()
    }}>
    Next
   </button>
    </div>
    

  )
}

export default StepOne;