import React, { useEffect, useState,useRef } from 'react'
import ProgressBar from '@/components/progressBar/progress';
import Resizer from "react-image-file-resizer";
import { FaImages } from 'react-icons/fa';
import { GiCancel } from 'react-icons/gi';

function StepFour({forward,input,backward,setInput}) {
    

  // The Individual states
  const [changeCount,setChangeCount] = useState(0);
  const [stepTwoProgress,setStepTwoProgress] = useState(79);
  const [review,showReview] = useState([]);
  const [display_review,set_display_review] = useState(false)
 
function handleReview(image){
    showReview(image);
    set_display_review(true)
};

function closeReview(){
    set_display_review(false)
}



  // functions
  const handleOnChange = (e) => {
    setChangeCount(prev => prev+1);
    return setInput(prev => ({...prev,[e.target.name]:e.target.value}))
  }
  const stepTwoRef = useRef(0);

  const isFilled = () => {
    if(input.driver_licence_back[0] && input.driver_licence_front[0] && input.medicare_back[0] && input.medicare_front[0]){
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

      if(input.driver_licence_back && input.driver_licence_front && input.medicare_back && input.medicare_front){
        return setStepTwoProgress(79);
      }
      else{
        return setStepTwoProgress(65);
      }


      
    },[changeCount]
  )
// image resizer (outputs base64 as its default value)
const resizeFile = (file) =>
  new Promise((resolve) => {
    Resizer.imageFileResizer(
      file,
      1200,
      630,
      "WEBP",
      50,
      0,
      (uri) => {
        resolve(uri);
      },
      "base64"
    );
  });
  // create thumbnail from 
  const generateThumbnail = (file) =>
  new Promise((resolve) => {
    Resizer.imageFileResizer(
      file,
      150,
      150,
      "WEBP",
      40,
      0,
      (uri) => {
        resolve(uri);
      },
      "base64"
    );
  });

  const handleCreateBase64 = (e) => {
    let files = e.target.files;
    console.log(e.target.name)
  
    Promise.all([...files].map(async file =>
  
     { if(file.type === "image/jpeg" || file.type === "image/jpg" || file.type === "image/png" ){
      
      
        return ({
      src:file.size <= 100000? file: await resizeFile(file),
      alt:"",
      // index:context.post.media._files.length,
      thumbnail:await generateThumbnail(file),
      fileName: file.name,
      contentType: file.type,
      size: file.size
    })
      }}))
      .then((files) => {
       setInput(prev =>
        ({...prev,[e.target.name]:files})
       )
      })
      .catch((error) => {
        console.error(error)
      })
  }
  
// handle file select
const handleFileSelect = (e) =>{
    if(e.target.files.length > 6){
      return alert('maximum number of Pictures Exceeded');
    }
    else{
      return ;
    }
  }

  return (
    <div className='max-w-[40rem] z-[9999999] flex flex-col items-center justify-center mt-5 '>
   
 {display_review &&   <div className='flex items-center w-full h-screen justify-center fixed bg-black  z-[999999999999]'>
        <div className='w-full absolute top-0 l-0 p-1  text-end text-2xl bg-slate-900 text-white cursor-pointer rounded rounded-full' onClick={closeReview}>
        <GiCancel className='px-5' />
        </div>
        {  review &&  <img src={review[0].src} alt='image' className='w-96 h-96'/>}
    </div>}

   {/* The Form  */}
<div className='text-red-500 px-2 bg-white rounded rounded-lg  flex flex-col items-center justify-center w-96  py-16'>
  {/* INTRO text */}
        <div className='text-2xl font-semibold text-sky-700 py-2'>
       Upload Credentials
        </div>
   <p className='text-slate-700 text-xs pb-2 font-semibold'>1. Ensure Proper Lightening </p>
   <p className='text-slate-700 text-xs  pb-2 font-semibold'>2. Blur Images will be rejected</p>
   <p className='text-slate-700 text-xs pb-5 font-semibold'>3. Format: Images{ "(JPEG or JPG, PNG)"}</p>

{/*  */}
<div className='text-xl font-bold text-sky-600'>
    Drivers License
</div>

{/* image 1 */}
<div className="  px-3 mb-4 md:mb-0 my-2 flex items-center self-start gap-5 my-7">
      <label className="block uppercase tracking-wide text-slate-800 text-xs font-bold flex flex-col  text-start" for="grid-first-name">
    1. Upload Front Picture
    <span className='text-xs text-slate-400 lowercase pl-5'>{input.driver_licence_front?input.driver_licence_front[0].fileName:"No file uploaded"}</span>
    <span className='text-xs text-sky-500 lowercase pl-5 cursor-pointer' onClick={()=>handleReview(input.driver_licence_front)}>{input.driver_licence_front && "Review Picture"}</span>
      </label>
      <input id="one" type="file" name="driver_licence_front"  accept="image/*, png, jpeg, jpg" onChange={handleCreateBase64} style={{display:"none"}} onSelect={handleFileSelect} multiple={true} onInput={()=>{
}} />
<label htmlFor="one" className='cursor-pointer hover:bg-slate-200 dark:hover:bg-slate-100  rounded-full ease-linear transition-all duration-150 p-3 text-xl border text-sky-500'>
<FaImages  /></label>
    </div>


    {/* image 2 */}
<div className="  px-3 mb-4 md:mb-0 my-2 flex items-center gap-5 my-5 self-start my-7">
      <label className="block uppercase tracking-wide text-slate-800 text-xs font-bold flex flex-col  text-start" for="grid-first-name">
    2. Upload Back Picture
    <span className='text-xs text-slate-400 lowercase pl-5'>{input.driver_licence_back?input.driver_licence_back[0].fileName:"No file uploaded"}</span>
    <span className='text-xs text-sky-500 lowercase pl-5 cursor-pointer' onClick={()=>handleReview(input.driver_licence_back)}>{input.driver_licence_back && "Review Picture"}</span>
      </label>
      <input id="two" type="file" name="driver_licence_back"  accept="image/*, png, jpeg, jpg" onChange={handleCreateBase64} style={{display:"none"}} onSelect={handleFileSelect} multiple={false} onInput={()=>{
}} />
<label htmlFor="two" className='cursor-pointer hover:bg-slate-200 dark:hover:bg-slate-100  rounded-full ease-linear transition-all duration-150 p-3 text-xl border text-sky-500'>
<FaImages  /></label>
    </div>

{/*  */}
<div className='text-xl font-bold text-sky-600 mt-5'>
    Medicare ID
</div>

{/* image 1 */}
<div className="  px-3 mb-4 md:mb-0 my-2 flex items-center gap-5 my-5 self-start my-7">
      <label className="block uppercase tracking-wide text-slate-800 text-xs font-bold flex flex-col  text-start" for="grid-first-name">
    1. Upload Front Picture
    <span className='text-xs text-slate-400 lowercase pl-5'>{input.medicare_front?input.medicare_front[0].fileName:"No file uploaded"}</span>
    <span className='text-xs text-sky-500 lowercase pl-5 cursor-pointer' onClick={()=>handleReview(input.medicare_front)}>{input.medicare_front && "Review Picture"}</span>
      </label>
      <input id="three" type="file" name="medicare_front"  accept="image/*, png, jpeg, jpg" onChange={handleCreateBase64} style={{display:"none"}} onSelect={handleFileSelect} multiple={false} onInput={()=>{
}} />
<label htmlFor="three" className='cursor-pointer hover:bg-slate-200 dark:hover:bg-slate-100  rounded-full ease-linear transition-all duration-150 p-3 text-xl border text-sky-500'>
<FaImages  /></label>
    </div>
    {/* image 2 */}
<div className="  px-3 mb-4 md:mb-0 my-2 flex items-center gap-5 my-5 self-start my-7">
      <label className="block uppercase tracking-wide text-slate-800 text-xs font-bold flex flex-col  text-start" for="grid-first-name">
    2. Upload Back Picture
    <span className='text-xs text-slate-400 lowercase pl-5'>{input.medicare_back?input.medicare_back[0].fileName:"No file uploaded"}</span>
    <span className='text-xs text-sky-500 lowercase pl-5 cursor-pointer' onClick={()=>handleReview(input.medicare_back)}>{input.medicare_back && "Review Picture"}</span>
      </label>
      <input id="four" type="file" name="medicare_back"  accept="image/*, png, jpeg, jpg" onChange={handleCreateBase64} style={{display:"none"}} onSelect={handleFileSelect} multiple={false} onInput={()=>{
}} />
<label htmlFor="four" className='cursor-pointer hover:bg-slate-200 dark:hover:bg-slate-100  rounded-full ease-linear transition-all duration-150 p-3 text-xl border text-sky-500'>
<FaImages  /></label>
    </div>

    {/* subtext */}
    <p className='text-slate-300 p-5 font-bold text-xs text-slate-600 bottom-0 '>All your data are kept safe & private.</p>

</div>
 {/* progress */}
 <div className='text-end  w-full'>
       <ProgressBar progressPercentage={stepTwoProgress} />
       <span className='text-sky-800 bg-sky-200 border rounded-full p-1'>4/5</span>
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
    <button className='p-3 mt-3 lg:display bg-slate-500  rounded w-96 text-center font-semibold  border border-slate-800 text-white animate__animated animate__pulse  ' ref={stepTwoRef} onClick={()=>{
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

export default StepFour;