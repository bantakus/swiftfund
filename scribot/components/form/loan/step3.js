import React, { useEffect, useState,useRef } from 'react'
import ProgressBar from '@/components/progressBar/progress';

function StepThree({forward,input,backward,setInput}) {
    

  // The Individual states
  const [changeCount,setChangeCount] = useState(0);
  const [stepTwoProgress,setStepTwoProgress] = useState(55);
 


  // functions
  const handleOnChange = (e) => {
    setChangeCount(prev => prev+1);
    return setInput(prev => ({...prev,[e.target.name]:e.target.value}))
  }
  const stepThreeRef = useRef(0);

  const isFilled = () => {
    if(input.city && input.loan_amount && input.loan_purpose && input.state && input.employment_status && input.loan_duration){
      return true;
    }
    else{
      return false;
    }
  }

  // function depending on the changes made in the form
  useEffect(
    ()=>{
      
      
      isFilled() && stepThreeRef.current.classList.add('display');
      !isFilled() && stepThreeRef.current.classList.remove('display');

      if(input.city && input.loan_amount && input.loan_purpose && input.state && input.employment_status && input.loan_duration){
        return setStepTwoProgress(65);
      }
      else{
        return setStepTwoProgress(55);
      }


      
    },[changeCount]
  )



  return (
    <div className='max-w-[40rem] z-[9999999] flex flex-col items-center justify-center mt-5 '>
   

   {/* The Form  */}
<div className='text-red-500 px-2 bg-white rounded rounded-lg  flex flex-col items-center justify-center w-96  py-16'>
  {/* INTRO text */}
        <div className='text-2xl font-semibold text-sky-700 py-2'>
       You are almost there
        </div>
   <p className='text-slate-700 pb-5'>Fill correctly to prevent loan from being disapproved.</p>
{/*  */}
    <div className=" px-3 mb-4 md:mb-0 mt-5 flex items-center justify-center gap-6">
      <label className="block uppercase tracking-wide text-slate-800 text-xs font-bold text-start" for="grid-first-name">
       Employement Status:
      </label>
      <select name="employment_status" onChange={handleOnChange} value={input.employment_status}  className='bg-slate-100 text-slate-800 p-3 border border-black'>
    <option value="">Please select one…</option>
    <option value="Employed">Employed</option>
    <option value="Self-Employed">Self-Employed</option>
    <option value="Student">Student</option>
    <option value="Not Employed">Not Employed</option>
    <option value="Worker">Worker</option>
  </select>
    </div>
{/*  */}
<div className="  px-3 mb-4 md:mb-0 my-2">
      <label className="block uppercase tracking-wide text-slate-800 text-xs font-bold mb-2 text-start" for="grid-first-name">
       Loan Amount ($):
      </label>
      <input className={`appearance-none block  bg-white text-slate-800 ${true? "border border-slate-500": "border border-red-500"} rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white `} id="grid-first-name" type="number" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" placeholder="10000" name="loan_amount" value={input.loan_amount} onChange={handleOnChange} />
    </div>
{/*  */}
<div className="  px-3 mb-4 md:mb-0 my-2">
      <label className="block uppercase tracking-wide text-slate-800 text-xs font-bold mb-2 text-start" for="grid-first-name">
       Purpose of Loan:
      </label>
      <input className={`appearance-none block  bg-white text-slate-800 ${true? "border border-slate-500": "border border-red-500"} rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white `} id="grid-first-name" type="text"  placeholder="Medical payment" name="loan_purpose" value={input.loan_purpose} onChange={handleOnChange} />
    </div>

    {/*  */}
    <div className='flex flex-col gap-3 items-center justify-center my-2'>

       <div className="  px-3 mb-4 md:mb-0">
      <label className="block uppercase tracking-wide text-slate-800 text-xs font-bold mb-2 text-start" for="grid-first-name">
       Loan Duration (Months):
      </label>
      <input className={`appearance-none block  bg-white text-slate-800 ${true? "border border-slate-500": "border border-red-500"} rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white `} id="grid-first-name" type="number" placeholder="24" name="loan_duration" value={input.loan_duration} onChange={handleOnChange} />
    </div>

    </div>
    {/* subtext */}
    <p className='text-slate-300 p-5 font-bold text-xs text-slate-600 bottom-0 '>All your data are kept safe & private.</p>

</div>
 {/* progress */}
 <div className='text-end  w-full'>
       <ProgressBar progressPercentage={stepTwoProgress} />
       <span className='text-sky-800 bg-sky-200 border rounded-full p-1'>3/5</span>
    </div>

<div className='hidden lg:display flex justify-between items-center w-56 w-full'>


   {/* button */}
    <button className='p-3  mt-3 bg-slate-400  rounded w-96 text-center font-semibold  border border-slate-800 text-white  animate__animated animate__pulse ' onClick={()=>{
    input.firstname && input.lastname && backward()
    }}>
   Previous
   </button>
   {/* button */}
    <button className='p-3 mt-3 lg:display bg-slate-400  rounded w-96 text-center font-semibold  border border-slate-800 text-white hidden animate__animated animate__pulse ' ref={stepThreeRef} onClick={()=>{
    input.firstname && input.lastname && forward()
    }}>
    Next
   </button>
</div>
<div className='lh:hidden  flex flex-col justify-between items-center w-56 w-full'>


 {/* button */}
    <button className='p-3 mt-3 lg:display bg-slate-500  rounded w-96 text-center font-semibold  border border-slate-800 text-white hidden animate__animated animate__pulse ' ref={stepThreeRef} onClick={()=>{
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

export default StepThree;